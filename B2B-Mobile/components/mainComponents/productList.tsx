// ProductList.tsx
import React from 'react';
import { View, FlatList, Text, Pressable, StyleSheet } from 'react-native';
import ProductCard from './productCard'; // Asegúrate de importar el componente

interface Props {
  title?: string;
  products: { title: string; image: any }[]; // Cambia según tu estructura
}

export const ProductList: React.FC<Props> = ({ title, products }) => {
    return (
        <View>
          {title &&
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
          </Pressable>}
          <FlatList
            data={products}
            renderItem={({ item }) => (
            <ProductCard
              title={item.title}
              image={item.image}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
            horizontal={true} // Cambiar a false para que las listas sean verticales
          />
        </View>
    );
  };

  const styles = StyleSheet.create(
    {
      button: {
        marginLeft: 10,
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
    }
  )

export default ProductList;

