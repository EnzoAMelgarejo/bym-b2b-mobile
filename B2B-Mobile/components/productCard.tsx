import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

interface PropsCard {
    title: string;
    image: any;
  }
  
export 
const ProductCard: React.FC<PropsCard> = ({ title, image }) => {
    const [rating, setRating] = useState(0);
  
    const handleRating = (newRating: number) => {
      setRating(newRating);
    };
  
    return (
      <Link href='/productDetails' style={styles.card}>
      <View>
        <Image source={image} style={styles.image} />
        <View style={styles.descriptionContainer}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.starsContainer}>
            {Array.from({ length: 5 }, (_, index) => (
              <Pressable key={index} onPress={() => handleRating(index + 1)}>
                <MaterialIcons
                  name={index < rating ? 'star' : 'star-border'}
                  size={24}
                  color={index < rating ? '#00C400' : '#ccc'}
                />
              </Pressable>
            ))}
          </View>
          <Pressable style={styles.buyButton} onPress={() => alert('Producto añadido al carrito')}>
            <Text style={styles.buyButtonText}>Comprar</Text>
          </Pressable>
        </View>
      </View>
      </Link>
    );
  };

  const styles = StyleSheet.create({
    card: {
      backgroundColor: '#f0f0f0',
      padding: 10,
      margin: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      elevation: 3,
      flex: 1, // Para ocupar espacio igual en la columna
      alignItems: 'center',
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 8,
      resizeMode: 'contain',
    },
    descriptionContainer: {
      marginTop: 10,
      alignItems: 'center',
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      marginVertical: 2,
      textAlign: 'center',
    },
    starsContainer: {
      flexDirection: 'row',
      marginVertical: 8,
    },
    buyButton: {
      backgroundColor: '#EF8216',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginTop: 10,
    },
    buyButtonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
    columnWrapper: {
      justifyContent: 'space-between', // Espaciado entre columnas
    },
  });
  
export default ProductCard;