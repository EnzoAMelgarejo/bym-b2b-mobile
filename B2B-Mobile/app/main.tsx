// Main.tsx
import React from 'react';
import { StyleSheet, View, Text, ScrollView, Pressable, Image } from 'react-native';
import { ProductCard } from '../components/productCard'; // Asegúrate de importar tu componente de tarjeta
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const Main = () => {
    const products = [
        { title: 'Producto 1', image: require('../assets/images/lightexample.png'), description: 'Descripción' },
        { title: 'Producto 2', image: require('../assets/images/lightexample.png'), description: 'Descripción' },
        { title: 'Producto 3', image: require('../assets/images/lightexample.png'), description: 'Descripción' },
        // Agrega más productos según sea necesario
    ];

    // Array para las categorías destacadas
    const categories = [
        { icon: 'lightbulb-o' }, // Icono de bombilla
        { icon: 'lightbulb-o' },        // Icono de configuraciones
        { icon: 'lightbulb-o' }, // Icono de batería
        // Agrega más categorías si es necesario
    ];

    return (
        <ScrollView style={styles.container}>

            <View style={styles.imageContainer}>
                <Image source={require('../assets/images/Home01.png')}></Image>
            </View>

            {/* Productos normales */}
            <View style={styles.section}>
                <View style={styles.row}>
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            title={product.title}
                            image={product.image}
                            description={product.description}
                        />
                    ))}
                </View>
            </View>

            {/* Categorías destacadas */}
            <View style={styles.section}>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText} numberOfLines={1} ellipsizeMode="tail">Categorías destacadas...</Text>
                </Pressable>
                <View style={styles.categoriesRow}>
                    {categories.map((category, index) => (
                        <View key={index} style={styles.categoryCard}>
                            <FontAwesome name={category.icon} size={40} color="#00c400" />
                            <Text>foco led</Text>
                        </View>
                    ))}
                </View>
            </View>

            <View style={styles.imageContainer}>
                <Image source={require('../assets/images/Home02.png')}></Image>
            </View>

            {/* Repetir la sección de productos */}
            <View style={styles.section}>
            <Pressable style={styles.button}>
                    <Text style={styles.buttonText} numberOfLines={1} ellipsizeMode="tail">Seleccionados para vos...</Text>
                </Pressable>
                <View style={styles.row}>
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            title={product.title}
                            image={product.image}
                            description={product.description}
                        />
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        marginVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#00C400',
    },
    sectionTitleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap', // Permite que las tarjetas se muevan a la siguiente línea si es necesario
    },
    categoriesRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    categoryCard: {
        width: 100,
        height: 100,
        backgroundColor: '#f0f0f0',
        borderRadius: 50, // Hace que la tarjeta sea circular
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
        // Estilos del botón de categorías destacadas
    button: {
        marginLeft:10,
        backgroundColor: '#00C400', // Color del botón
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        marginVertical: 10,
        alignSelf: 'flex-start', // Alinea el botón a la izquierda
    },
    buttonText: {
        color: 'white', // Letras blancas
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        width: '100%',
    },
        // Iconos en Categorías destacadas
    iconButton: {
        backgroundColor: '#2e2e2e', // Fondo del icono
        padding: 10,
        borderRadius: 50, // Bordes redondeados para un estilo circular
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    imageContainer: {
        justifyContent: 'center', // Centra verticalmente el contenido
        alignItems: 'center',     // Centra horizontalmente el contenido
        marginVertical: 20,       // Espaciado vertical entre la imagen y otros elementos
    },
});
