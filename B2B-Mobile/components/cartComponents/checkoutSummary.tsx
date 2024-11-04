import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";

const CheckoutSummary: React.FC = () => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [total, setTotal] = useState(100); // Total inicial
  const [shippingCost, setShippingCost] = useState(10); // Costo de envío inicial

  const handleUpdateTotal = () => {
    // Aquí podrías calcular el total con el costo de envío
    const updatedTotal = 100 + shippingCost;
    setTotal(updatedTotal);
  };

  return (
    <View style={styles.summaryContainer}>
      <Text style={styles.title}>Total</Text>
      <View style={styles.separator} />

      <View style={styles.row}>
        <Text style={styles.label}>Subtotal:</Text>
        <Text style={styles.price}>$100.00</Text>
      </View>
      <View style={styles.separator} />

      <Text style={styles.label}>Cálculo de envío:</Text>
      <TextInput
        placeholder="País"
        value={country}
        onChangeText={setCountry}
        style={styles.input}
      />
      <TextInput
        placeholder="Ciudad"
        value={city}
        onChangeText={setCity}
        style={styles.input}
      />
      <TextInput
        placeholder="Código postal"
        value={postalCode}
        onChangeText={setPostalCode}
        style={styles.input}
      />
      <Pressable style={styles.updateButton} onPress={handleUpdateTotal}>
        <Text style={styles.updateButtonText}>Actualizar total</Text>
      </Pressable>
      <View style={styles.separator} />

      <View style={styles.row}>
        <Text style={styles.label}>Total:</Text>
        <Text style={styles.price}>${total.toFixed(2)}</Text>
      </View>
      <View style={styles.separator} />

      <Pressable style={styles.purchaseButton}>
        <Text style={styles.purchaseButtonText}>Realizar compra</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  summaryContainer: {
    alignSelf: "center", // Para alinear la card al extremo derecho
    padding: 15,
    marginVertical: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    width: "100%", // Ancho ajustable
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: 'center',
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: "#d9d9d9",
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  input: {
    borderRadius: 6,
    padding: 8,
    marginVertical: 5,
    backgroundColor: "#fff"
  },
  updateButton: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
  },
  updateButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  purchaseButton: {
    backgroundColor: "#FAAD3D",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  purchaseButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CheckoutSummary;
