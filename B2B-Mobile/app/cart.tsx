// Cart.tsx
import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Pressable, Text } from "react-native";
import CheckoutSummary from "@/components/cartComponents/checkoutSummary";
import lightbulbImage from "../assets/images/lightbulb.png";
import { SimpleLineIcons } from "@expo/vector-icons";
import Footer from "../components/footer";
import CartList from "@/components/cartComponents/cartList";

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
    setProducts(products.map(product => 
      product.id === id && product.quantity > 1 
        ? { ...product, quantity: product.quantity - 1 } 
        : product
    ));
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
            <CartList
              products={products}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              onRemoveProduct={handleRemoveProduct}
            />
          </ScrollView>
        </View>

        <CheckoutSummary />

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
});

export default Cart;
