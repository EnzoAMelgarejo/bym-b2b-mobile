// CartList.tsx
import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

type Product = {
  id: number;
  title: string;
  quantity: number;
  price: number;
  image: any;
};

type CartListProps = {
  products: Product[];
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
  onRemoveProduct: (id: number) => void;
};

const CartList: React.FC<CartListProps> = ({ products, onIncrement, onDecrement, onRemoveProduct }) => {
  return (
    <>
      {products.map((product) => (
        <View key={product.id} style={styles.card}>
          <Image source={product.image} style={styles.cardImage} />
          <Text style={styles.cardTitle}>{product.title}</Text>

          <View style={styles.counterContainer}>
            <Pressable onPress={() => onDecrement(product.id)} style={styles.counterButton}>
              <Text style={styles.counterButtonText}>-</Text>
            </Pressable>
            <Text style={styles.quantity}>{product.quantity}</Text>
            <Pressable onPress={() => onIncrement(product.id)} style={styles.counterButton}>
              <Text style={styles.counterButtonText}>+</Text>
            </Pressable>
          </View>

          <Text style={styles.price}>${product.price.toFixed(2)}</Text>

          <Pressable onPress={() => onRemoveProduct(product.id)} style={styles.removeButton}>
            <Ionicons name="trash-outline" size={24} color="red" />
          </Pressable>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 10,
    marginVertical: 6,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    alignItems: "center",
  },
  cardImage: {
    width: 45,
    height: 45,
    borderRadius: 6,
    marginRight: 10,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "bold",
    flex: 1,
  },
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  counterButton: {
    padding: 5,
    backgroundColor: "#d9d9d9",
    borderRadius: 4,
    marginHorizontal: 5,
  },
  counterButtonText: {
    fontSize: 16,
  },
  quantity: {
    fontSize: 14,
  },
  price: {
    fontSize: 14,
    color: "#00C400",
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  removeButton: {
    padding: 6,
  },
});

export default CartList;
