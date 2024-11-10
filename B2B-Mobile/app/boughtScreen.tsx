import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";

export const Bought = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('')} />
      <Text style={styles.title}>Gracias por tu compra</Text>
      <Text style={styles.label}>Tu orden esta en camino. Te enviamos un mail con toda la informacion</Text>
      <Link href='/main'>
        <Text style={styles.buttonText}>Continuar comprando</Text>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create(
  {
    container: {
      width: '100%',
      height: 'auto',
      flex: 1,
      justifyContent: 'center',
    },
    image: {
      width: 40,
      heigth: 'auto',
    },

  } 
)