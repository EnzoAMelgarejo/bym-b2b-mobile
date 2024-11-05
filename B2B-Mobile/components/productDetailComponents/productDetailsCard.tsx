import React, {useState} from "react";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

export const ProductDetailsCard = () => {

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

    return( 
        <View style={styles.productContainer}>
                <Image source={require('../../assets/images/lightbulb.png')} style={styles.productImage} />

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
    )
}

const styles = StyleSheet.create(
    {
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
            color: "#666666",
            marginRight: 5,
        },
        discountPrice: {
            fontSize: 15,
            fontWeight: "bold",
            color: "#FF9C2A",
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
            borderWidth: 1,
            borderColor: '#EEEEEE',
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            borderRadius: 5,
            margin: 3,
        },
        selectedSizeBox: {
            borderWidth: 1,
            borderColor: "#FAAD3D",
        },
        sizeText: {
            fontSize: 12,
            fontWeight: "bold",
            color: "#333",
        },
        selectedSizeText: {
            color: "#FAAD3D",
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
            backgroundColor: "#F6F6F6",
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
    }
)