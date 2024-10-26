import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Pressable, ScrollView } from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";

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

    // Nueva lógica para la oferta por tiempo limitado
    const [timeLeft, setTimeLeft] = useState(3600); // 1 hora en segundos
    const [stock, setStock] = useState(100);

    useEffect(() => {
    const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    return (
        <ScrollView style={styles.container}>

            {/*seccion de producto con */}

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

            <View style={styles.infoBox}>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Disponibilidad:</Text>
                    <Text style={[styles.infoValue, stock > 0 ? styles.inStock : styles.outOfStock]}>
                        {stock > 0 ? "InStock" : "No"}
                    </Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>SKU:</Text>
                    <Text style={styles.infoValue}>14235</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Categoría:</Text>
                    <Text style={styles.infoValue}>Iluminación</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={[styles.infoLabel, {color:'#00C400', textDecorationLine:'underline'}]}>Preguntanos</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Compartir en:</Text>
                    <View style={styles.socialIconsRow}>
                        <FontAwesome name="facebook" size={20} color="#3b5998" />
                        <FontAwesome name="twitter" size={20} color="#1da1f2" />
                        <FontAwesome name="instagram" size={20} color="#c32aa3" />
                    </View>
                </View>
                <View style={styles.offerRow}>
                    <Text style={styles.offerText}>Oferta por tiempo limitado!</Text>
                    <Text style={styles.infoLabel}>Esta oferta vence en: {formatTime(timeLeft)}</Text>
                </View>
                <View style={styles.stockContainer}>
                    <Text style={styles.stockText}>Cantidad: {stock}/100</Text>
                    <View style={styles.progressBar}>
                        <View style={[styles.progressFill, { width: `${(stock / 100) * 100}%` }]} />
                    </View>
                </View>
            </View>
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
    infoBox: {
        marginTop: 20,
        padding: 15,
        borderRadius: 8,
        backgroundColor: "#f8f8f8",
    },
    infoRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 8,
    },
    infoLabel: {
        fontSize: 13,
        color: "#555",
    },
    infoValue: {
        fontSize: 13,
    },
    inStock: {
        color: "#00C400",
    },
    outOfStock: {
        color: "red",
    },
    socialIconsRow: {
        flexDirection: "row",
        gap: 5,
    },
    offerRow: {
        marginVertical: 10,
    },
    offerText: {
        color: "#00C400",
        fontWeight: "bold",
    },
    stockContainer: {
        marginTop: 10,
    },
    stockText: {
        fontSize: 13,
    },
    progressBar: {
        height: 8,
        backgroundColor: "#ddd",
        borderRadius: 5,
        marginTop: 5,
    },
    progressFill: {
        height: "100%",
        backgroundColor: "#EF8216",
        borderRadius: 5,
    },
});

export default ProductDetails;
