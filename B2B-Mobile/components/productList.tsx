// ProductList.tsx
import React from 'react';
import { View, FlatList, Text, Pressable, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import ProductCard from './productCard';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface Props {
  title?: string;
  products: { title: string; image: any }[]; // Cambia según tu estructura
}

export const ProductList: React.FC<Props> = ({ title, products }) => {

  const route = useRoute()
  const isProductsPage = route.name === 'products'

    return (
        <View>
          {title &&
          <View>

            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>{title}</Text>
              <SimpleLineIcons name="options" size={24} color="white" />
            </Pressable>

          </View>}

          <FlatList
            data={products}
            renderItem={({ item }) => (
            <ProductCard
              title={item.title}
              image={item.image}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
            horizontal={!isProductsPage} // Cambia entre horizontal o vertical
            numColumns={isProductsPage ? 2 : 1} // Muestra 2 columnas si es la página de productos, 1 en otras rutas
            nestedScrollEnabled // Habilita el scroll anidado dentro de ScrollView

          />
        </View>
    );
  };

  const styles = StyleSheet.create(
    {
      button: {
        marginLeft: 10,
        backgroundColor: '#00C400', 
        paddingVertical: 5, 
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
    }
  )

export default ProductList;

