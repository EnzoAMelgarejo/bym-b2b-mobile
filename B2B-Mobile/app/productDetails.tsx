import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Image, Pressable, ScrollView, Animated } from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { InfoBox } from "@/components/productDetails/infoBox";

// Obtener el ancho de la pantalla
const screenWidth = Dimensions.get('window').width;

export const ProductDetails = () => {

    const [rating, setRating] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false);


    const product = {
        name: "Led",
        normalPrice: "$20.00",
        discountPrice: "$15.00",
        visits: 240,
        description: "Descripción breve del producto.",
        features: ["Característica 1", "Característica 2", "Característica 3"],
        colors: ["#FFFFFF", "#FF9C2A", "#00C400", "#000000"], 
        sizes: ["S", "M", "L", "XL", "XXL"],
   };

   const [activeSection, setActiveSection] = useState(0);
   const scrollViewRef = useRef(null);

   // Controla el movimiento del indicador
   const animatedIndicator = new Animated.Value(0);

   // Función para actualizar el scroll y el indicador
   const handleNavPress = (index) => {
       setActiveSection(index);
       scrollViewRef.current.scrollTo({ x: index * screenWidth, animated: true }); // Ajusta el valor del scroll según el tamaño de la pantalla

       // Animación del indicador
       Animated.timing(animatedIndicator, {
           toValue: index,
           duration: 300,
           useNativeDriver: false,
       }).start();
   };

    return (
        <ScrollView style={styles.container}>

            {/*seccion de producto con detalles */}

            <View style={styles.productContainer}>
                <Image source={require('../assets/images/lightbulb.png')} style={styles.productImage} />

                <View style={styles.details}>
                    <Text style={styles.title}>{product.name}</Text>
                        
                    <View style={styles.priceRow}>
                        <Text style={styles.normalPrice}>{product.normalPrice}</Text>
                        <Text style={styles.discountPrice}>{product.discountPrice}</Text>
                        <View style={styles.ratingContainer}>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <Pressable key={index} onPress={() => setRating(index + 1)}>
                                    <MaterialIcons
                                        name={index < rating ? "star" : "star-border"}
                                        size={18}
                                        color={index < rating ? "#FFD700" : "#ccc"}
                                    />
                                </Pressable>
                            ))}
                        </View>
                        <Text style={[styles.visits, {marginLeft:0}]}>{product.visits} visitas</Text>
                    </View>
                        

                    <Text style={styles.description}>{product.description}</Text>

                    <Text style={styles.sectionTitle}>Características:</Text>
                    {product.features.map((feature, index) => (
                        <Text key={index} style={styles.featureItem}>• {feature}</Text>
                    ))}

                    <View style={styles.colorRow}>
                        {product.colors.map((color, index) => (
                            <Pressable
                                key={index}
                                onPress={() => setSelectedColor(color)}
                                style={[
                                    styles.colorBox,
                                    { backgroundColor: color },
                                    selectedColor === color && styles.selectedColorBox
                                ]}
                            />
                        ))}
                    </View>

                    <Text style={styles.sectionTitle}>Tamaños disponibles:</Text>
                    <View style={styles.sizeRow}>
                        {product.sizes.map((size, index) => (
                            <Pressable
                                key={index}
                                onPress={() => setSelectedSize(size)}
                                style={[
                                    styles.sizeBox,
                                    selectedSize === size && styles.selectedSizeBox
                                ]}
                                >
                                <Text style={[styles.sizeText, selectedSize === size && styles.selectedSizeText]}>{size}</Text>
                            </Pressable>
                        ))}
                    </View>

                    <View style={styles.interactionBox}>
                        <Pressable onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} style={styles.quantityButton}>
                            <Text style={styles.quantityText}>-</Text>
                        </Pressable>
                        <Text style={styles.quantityDisplay}>{quantity}</Text>
                        <Pressable onPress={() => setQuantity(quantity + 1)} style={styles.quantityButton}>
                            <Text style={styles.quantityText}>+</Text>
                        </Pressable>
                        <Pressable style={styles.cartButton}>
                            <Text style={styles.cartButtonText}>Añadir</Text>
                        </Pressable>
                        <Pressable onPress={() => setIsFavorite(!isFavorite)} style={styles.heartButton}>
                            <FontAwesome
                                name={isFavorite ? "heart" : "heart-o"}
                                size={20}
                                color={isFavorite ? "#00C400" : "#00C400"}
                            />
                        </Pressable>
                    </View>
                </View>
            </View>

            {/*seccion de infoBox*/}
            <InfoBox></InfoBox>

            {/* Barra de navegación horizontal */}
            <View style={styles.navBar}>
                {["Descripción", "Información adicional", "Reseñas"].map((item, index) => (
                    <Pressable
                        key={index}
                        style={styles.navItem}
                        onPress={() => handleNavPress(index)}
                    >
                        <Text style={[styles.navText, activeSection === index && styles.activeNavText]}>
                            {item}
                        </Text>
                    </Pressable>
                ))}
            </View>

            {/* Indicador de la sección activa */}
            <View style={styles.indicatorContainer}>
                <Animated.View
                    style={[
                        styles.indicator,
                        {
                            width: "33%", // Indicador para cada sección (1/3 del ancho)
                            transform: [
                                {
                                    translateX: animatedIndicator.interpolate({
                                        inputRange: [0, 1, 2],
                                        outputRange: [0, screenWidth / 3, (screenWidth / 3) * 2], // Valores numéricos para translateX
                                    }),
                                },
                            ],
                        },
                    ]}
                />
            </View>

            {/* Secciones de contenido */}
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={(event) => {
                    const index = Math.round(event.nativeEvent.contentOffset.x / screenWidth); // Calcula la sección actual
                    setActiveSection(index);
                }}
            >
                <View style={styles.section}>
                    <Text>Contenido de la Descripción del Producto...</Text>
                </View>
                <View style={styles.section}>
                    <Text>Contenido de Información Adicional...</Text>
                </View>
                <View style={styles.section}>
                    <Text>Contenido de Reseñas del Producto...</Text>
                </View>
            </ScrollView>
           
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        padding: 10,
        paddingVertical: 150,
        backgroundColor: "#fff",
    },
    productContainer: {
        flexDirection: 'row',
        paddingVertical: 15,
        backgroundColor: "#fff",
        borderRadius: 8,
    },
    productImage: {
        width: 140,
        height: 140,
        resizeMode: 'contain',
        marginRight: 10,
    },
    details: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 6,
    },
    priceRow: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 5,
        flexWrap: 'wrap',
    },
    normalPrice: {
        fontSize: 13,
        textDecorationLine: "line-through",
        color: "#999",
        marginRight: 5,
    },
    discountPrice: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#EF8216",
    },
    ratingContainer: {
        flexDirection: "row",
        marginLeft: 5,
    },
    visits: {
        marginLeft: 8,
        fontSize: 12,
        color: "#888",
    },
    description: {
        marginVertical: 8,
        fontSize: 13,
        color: "#333",
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: "bold",
        marginTop: 6,
        marginBottom: 3,
    },
    featureItem: {
        fontSize: 12,
        color: "#555",
    },
    colorRow: {
        flexDirection: "row",
        marginTop: 5,
    },
    colorBox: {
        width: 20,
        height: 20,
        borderRadius: 4,
        borderWidth: 1,
        marginRight: 5,
    },
    selectedColorBox: {
        borderWidth: 2,
        borderColor: "#555",
    },
    sizeRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 5,
    },
    sizeBox: {
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#DDD",
        borderRadius: 5,
        margin: 3,
    },
    selectedSizeBox: {
        borderWidth: 2,
        borderColor: "#EF8216",
    },
    sizeText: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#333",
    },
    selectedSizeText: {
        color: "#EF8216",
        fontWeight: "bold",
    },
    interactionBox: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        flexWrap: 'wrap',
    },
    quantityButton: {
        width: 24,
        height: 24,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#DDD",
        borderRadius: 5,
        marginHorizontal: 3,
    },
    quantityText: {
        fontSize: 14,
        fontWeight: "bold",
    },
    quantityDisplay: {
        fontSize: 14,
        fontWeight: "bold",
        marginHorizontal: 3,
    },
    cartButton: {
        backgroundColor: "#00C400",
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginLeft: 8,
    },
    cartButtonText: {
        color: "#fff",
        fontWeight: "bold",
    },
    heartButton: {
        marginLeft: 10,
    },
    //Seccion de infoNav
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#ddd",
        marginTop: 20,
    },
    navItem: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
    },
    navText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#555",
    },
    activeNavText: {
        color: "#EF8216",  // Color naranja para la sección activa
    },
    indicatorContainer: {
        height: 3,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    indicator: {
        width: 0, // Inicia en 0, se actualizará dinámicamente
        height: 3,
        backgroundColor: "#EF8216",
    },
    section: {
        padding: 15,
    },
});

export default ProductDetails;
