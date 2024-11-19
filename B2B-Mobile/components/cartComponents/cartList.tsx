// CartList.tsx
import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

type Product = {
  id: number;
  title: string;
  number: number;
  total: number;
  image: string;
};

interface CartListProps {
  products: Product[];
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
  onRemove: (id: number) => void;
}

const CartList: React.FC<CartListProps> = ({ products, onIncrement, onDecrement, onRemove }) => {
  return (
    <View>
      {products.map((product) => (
        <View key={product.id} style={styles.productContainer}>
          <Image source={{uri: product.image}} style={styles.productImage} />
          <View style={styles.productDetails}>
            <Text style={styles.productTitle}>{product.title}</Text>
            <View style={styles.quantityControls}>
              <Pressable onPress={() => onDecrement(product.id)}>
                <SimpleLineIcons name="minus" size={24} color="black" />
              </Pressable>
              <Text style={styles.quantityText}>{product.number}</Text>
              <Pressable onPress={() => onIncrement(product.id)}>
                <SimpleLineIcons name="plus" size={24} color="black" />
              </Pressable>
            </View>
            <Text style={styles.productPrice}>${product.total.toFixed(2)}</Text>
          </View>
          <Pressable onPress={() => onRemove(product.id)} style={styles.removeButton}>
            <SimpleLineIcons name="close" size={24} color="red" />
          </Pressable>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  productImage: {
    width: 100,
    height: 100,
    marginRight: 16,
  },
  productDetails: {
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  quantityText: {
    marginHorizontal: 8,
    fontSize: 16,
  },
  productPrice: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
  removeButton: {
    marginLeft: 16,
  },
});

export default CartList;
