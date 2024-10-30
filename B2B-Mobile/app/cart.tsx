import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Pressable, Text, Image } from "react-native";
import CheckoutSummary from "@/components/cartComponents/checkoutSummary";
import lightbulbImage from "../assets/images/lightbulb.png";
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from "@expo/vector-icons";
import Footer from "../components/footer";

type Product = {
  id: number;
  title: string;
  quantity: number;
  price: number;
  image: any;
};

const Cart: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      title: "Producto 1",
      quantity: 1,
      price: 33.33,
      image: lightbulbImage,
    },
    {
      id: 2,
      title: "Producto 2",
      quantity: 1,
      price: 33.33,
      image: lightbulbImage,
    },
    {
      id: 3,
      title: "Producto 3",
      quantity: 1,
      price: 33.33,
      image: lightbulbImage,
    },
  ]);

  const handleIncrement = (id: number) => {
    setProducts(products.map(product => product.id === id ? { ...product, quantity: product.quantity + 1 } : product));
  };

  const handleDecrement = (id: number) => {
    setProducts(products.map(product => product.id === id && product.quantity > 1 ? { ...product, quantity: product.quantity - 1 } : product));
  };

  const handleRemoveProduct = (id: number) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <ScrollView>
    <View style={styles.cartContainer}>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Carrito de compra</Text>
        <SimpleLineIcons name="options" size={20} color="white" />
      </Pressable>

      <View style={styles.productsColumn}>
        <ScrollView>
          {products.map((product) => (
            <View key={product.id} style={styles.card}>
              <Image source={product.image} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{product.title}</Text>

              <View style={styles.counterContainer}>
                <Pressable onPress={() => handleDecrement(product.id)} style={styles.counterButton}>
                  <Text style={styles.counterButtonText}>-</Text>
                </Pressable>
                <Text style={styles.quantity}>{product.quantity}</Text>
                <Pressable onPress={() => handleIncrement(product.id)} style={styles.counterButton}>
                  <Text style={styles.counterButtonText}>+</Text>
                </Pressable>
              </View>

              <Text style={styles.price}>${product.price.toFixed(2)}</Text>

              <Pressable onPress={() => handleRemoveProduct(product.id)} style={styles.removeButton}>
                <Ionicons name="trash-outline" size={24} color="red" />
              </Pressable>
            </View>
          ))}
        </ScrollView>
      </View>

        <CheckoutSummary></CheckoutSummary>

        <Footer />

    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cartContainer: {
    padding: 10,
    marginTop: 80,
    flex: 1,
  },
  button: {
    backgroundColor: '#00C400', 
    paddingVertical: 10, 
    paddingHorizontal: 10, 
    borderRadius: 8,
    marginVertical: 50,
    flexDirection: 'row', 
    alignItems: 'center', 
    alignSelf: 'flex-start', 
    gap: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
  productsColumn: {
    width: "100%",
  },
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
  totalPrice: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
    color: "#00C400",
  },
});

export default Cart;
