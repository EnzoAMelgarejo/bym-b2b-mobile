import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Image, Pressable, Text, } from 'react-native';
import ProductCard from '../components/productCard';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import FilterMenu  from '@/components/filterMenu';
import ProductsData from '../data/productData';
import Footer from './footer';


const Products = () => {

    const [showFilters, setShowFilters] = useState(false);
  
    const toggleFilters = () => {
      setShowFilters(!showFilters);
    };
  
  return (
    <ScrollView contentContainerStyle={styles.container}>

        <View style={styles.imageContainer01}>
            <Image source={require('../assets/images/Home01.png')} style={styles.home01} resizeMode='cover' />
        </View>

        <View style={styles.buttonContainer}>

            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Productos</Text>
                <SimpleLineIcons name="options" size={20} color="white" />
            </Pressable>

               {/* Botón de Relevancia */}
            <Pressable style={[styles.button, {backgroundColor:'#FF9C2A'}]}>
                <Text style={styles.buttonText}>Relevancia</Text>
                <MaterialIcons name="keyboard-arrow-down" size={20} color="white" />
            </Pressable>

              {/* Botón de Filtros */}
            <Pressable style={[styles.button, { backgroundColor: '#FF9C2A' }]} onPress={toggleFilters}>
                <Text style={styles.buttonText}>Filtros</Text>
                <Ionicons name="options-sharp" size={20} color="white" />
            </Pressable>

            {showFilters && (
                <FilterMenu />
            )}

        </View>

    
        <View style={styles.grid}>
            {ProductsData.map((product) => (
            <View key={product.id} style={styles.column}>
                <ProductCard title={product.title} image={product.image} />
            </View>
            ))}
        </View>

        <Footer />

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 150,
    paddingBottom: 0,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Para que las tarjetas se ajusten automáticamente a varias líneas
    justifyContent: 'space-between', // Espacio uniforme entre columnas
  },
  column: {
    flexBasis: '48%', // Cada tarjeta ocupará el 48% del ancho para hacer dos columnas
    marginBottom: 15, // Espacio entre filas
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
buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: 10,
},
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
    },
buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
},

});

export default Products;

