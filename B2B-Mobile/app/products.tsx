import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import ProductList from "@/components/mainComponents/productList";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

export default function Products() {

    const products = [
        { title: 'Producto 1', image: require('../assets/images/lightexample.png') },
        { title: 'Producto 2', image: require('../assets/images/lightexample.png') },
        { title: 'Producto 3', image: require('../assets/images/lightexample.png') },
        { title: 'Producto 3', image: require('../assets/images/lightexample.png') },
        { title: 'Producto 3', image: require('../assets/images/lightexample.png') },
        { title: 'Producto 3', image: require('../assets/images/lightexample.png') },
        { title: 'Producto 3', image: require('../assets/images/lightexample.png') },
        { title: 'Producto 3', image: require('../assets/images/lightexample.png') },
        // Agrega más productos según sea necesario
    ];

    return (
        <ScrollView style={styles.container}>

            <View style={styles.imageContainer01}>
                <Image source={require('../assets/images/Home01.png')} style={styles.home01} resizeMode='cover' />
            </View>

            <View style={[styles.section, {marginBottom: 130,}]}>
                <ProductList title='Productos' products={products} />
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create (
    {
        container: {
            backgroundColor: '#fff',
            paddingVertical: 130,
        },
        imageContainer01: {
            width: '100%', // Ahora el contenedor ocupa todo el ancho de la pantalla
            height: 250, // Puedes ajustar esta altura
            justifyContent: 'center',
            alignItems: 'center',
        },
        home01: {
            width: '100%',
            height: '100%', // Altura para la primera imagen
            marginBottom: 30,
        },
        section: {
            paddingVertical: 20,
        },
    }
)