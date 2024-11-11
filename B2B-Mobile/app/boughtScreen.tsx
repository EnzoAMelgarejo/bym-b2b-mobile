import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Link } from "expo-router";
import Footer from "@/components/footer";

export const Bought = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/images/task.png')} />
      <Text style={styles.title}>Gracias por tu compra</Text>
      <Text style={styles.label}>
        Tu orden está en camino. Te enviamos un mail con toda la información.
      </Text>
      <Link href="/main" style={styles.button}>
        <Text style={styles.buttonText}>Continuar comprando</Text>
      </Link>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ffffff",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "center",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: "#555555",
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#ff6600",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
