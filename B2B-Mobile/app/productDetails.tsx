import React from "react";
import { View, StyleSheet, ScrollView, Pressable, Text } from "react-native";
import { InfoBox } from "@/components/productDetailComponents/infoBox";
import { InfoNav } from "@/components/productDetailComponents/infoNav";
import { ProductDetailsCard } from "@/components/productDetailComponents/productDetailsCard";

export const ProductDetails = () => {

    return (
        <ScrollView>
        <View style={styles.container}>

            {/*seccion de detalles del producto */}
            <ProductDetailsCard></ProductDetailsCard>
            
            {/*seccion de box informativa*/}
            <InfoBox></InfoBox>

            {/* seccion de barra de navegacion informativa */}
            <InfoNav></InfoNav>

            <View style={styles.interestContainer}>
      <Text style={styles.title}>Podría interesarte</Text>

      <View style={styles.columnsContainer}>
        {/* Columna izquierda (Cards de productos recomendados) */}
        <View style={styles.leftColumn}>
          <ScrollView>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Producto 1</Text>
              <Text style={styles.cardDescription}>Descripción breve del producto.</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Producto 2</Text>
              <Text style={styles.cardDescription}>Descripción breve del producto.</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Producto 3</Text>
              <Text style={styles.cardDescription}>Descripción breve del producto.</Text>
            </View>
            {/* Añadir más productos aquí */}
          </ScrollView>
        </View>

        {/* Columna derecha (Precio, botón y texto) */}
        <View style={styles.rightColumn}>
          <Text style={styles.price}>Precio Total: $99.99</Text>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Agregar todo</Text>
          </Pressable>
          <Text style={styles.wishlistText}>Agregar a la lista de deseos</Text>
        </View>
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

    //Seccion de prodcutos recomendados

    interestContainer: {
        padding: 20,
        backgroundColor: '#000', // Fondo oscuro
        flex: 1,
      },
      title: {
        color: '#ff6600',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20,
      },
      columnsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      leftColumn: {
        flex: 1,
        marginRight: 10,
      },
      rightColumn: {
        width: '35%',
        backgroundColor: '#2e2e2e',
        padding: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      card: {
        backgroundColor: '#2e2e2e',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        width: '100%', // Que las tarjetas usen todo el ancho disponible
      },
      cardTitle: {
        fontSize: 18,
        color: '#ffffff',
        marginBottom: 5,
      },
      cardDescription: {
        fontSize: 14,
        color: '#cccccc',
      },
      price: {
        color: '#ffffff',
        fontSize: 18,
        marginBottom: 20,
      },
      button: {
        backgroundColor: '#ff6600',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
      },
      buttonText: {
        color: '#ffffff',
        fontSize: 16,
      },
      wishlistText: {
        color: '#ff6600',
        textDecorationLine: 'underline',
        fontSize: 14,
        textAlign: 'center',
      },
});

export default ProductDetails;
