// Main.tsx
import React from 'react';
import { StyleSheet, View, Text, ScrollView, Pressable, Image } from 'react-native';
import ProductList from '../components/productList'; // Importa el componente
import { MaterialIcons } from '@expo/vector-icons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import ProductsData from '../data/productData';
import Footer from '../components/footer';

export const Main = () => {

    const categories = [
        { icon: 'lightbulb-outline' },
        { icon: 'lightbulb-outline' },
        { icon: 'lightbulb-outline' },
    ];

    return (
        <ScrollView style={styles.container}>

            <View style={styles.imageContainer01}>
                <Image source={require('../assets/images/Home01.png')} style={styles.home01} resizeMode='cover' />
            </View>

            {/* Productos normales */}
            <View style={styles.section}>
            <ProductList products={ProductsData} />
            </View>

            {/* Categorías destacadas */}
            <View style={styles.section}>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText} numberOfLines={1} ellipsizeMode="tail">Categorias</Text>
                    <SimpleLineIcons name="options" size={24} color="white" />
                </Pressable>
                <View style={styles.categoriesRow}>
                    {categories.map((category, index) => (
                        <View key={index} style={styles.categoryCard}>
                            {/*@ts-ignore*/}
                            <MaterialIcons name={category.icon} size={40} color="#00c400" />
                            <Text>foco led</Text>
                        </View>
                    ))}
                </View>
            </View>

            <View style={styles.imageContainer02}>
                <Image source={require('../assets/images/Home02.png')} style={styles.home02} resizeMode='cover' />
            </View>

            {/* Productos seleccionados para vos */}
            <View style={[styles.section, {marginBottom: 130,}]}>
                <ProductList title="Seleccionados para vos" products={ProductsData} />
            </View>

            <Footer />

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingVertical: 130,
    },
    section: {
        paddingVertical: 20,
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
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    // Estilos del botón de secciones
    button: {
        marginLeft: 10,
        backgroundColor: '#00C400', 
        paddingVertical: 10, 
        paddingHorizontal: 10, 
        borderRadius: 8,
        marginVertical: 10,
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
    // Iconos en Categorías destacadas
    iconButton: {
        backgroundColor: '#2e2e2e',
        padding: 10,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    imageContainer01: {
        width: '100%',
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer02: {
        width: '100%', 
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 0,
        position: 'relative',
    },
    home01: {
        width: '100%',
        height: '100%',
        marginBottom: 30,
    },
    home02: {
        width: '100%',
        height: '70%',
    }
});
