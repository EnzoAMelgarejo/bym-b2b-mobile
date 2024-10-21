// ProductCard.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface PropsCard {
    title: string;
    image: any; // Cambia de string a any para permitir la importación de imágenes
    description: string;
}

export const ProductCard: React.FC<PropsCard> = ({ title, image, description }) => {
    return (
        <View style={styles.card}>
            <View style={styles.contentContainer}>
                <Image source={image} style={styles.image} />
                <View style={styles.descriptionContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        margin: 10,
        shadowColor: '#000', // Color de la sombra
        shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra
        shadowOpacity: 0.1, // Transparencia de la sombra (ajústalo para hacerlo más suave)
        elevation: 3, // Elevación para sombras en Android
    },
    contentContainer: {
        flexDirection: 'row', // Colocar la imagen y la descripción en fila
        alignItems: 'center', // Alinear verticalmente
    },
    image: {
        width: 100, // Ajusta según tus necesidades
        height: 100, // Ajusta según tus necesidades
        borderRadius: 10,
    },
    descriptionContainer: {
        marginLeft: 10, // Espacio entre la imagen y la descripción
        flex: 1, // Permitir que la descripción ocupe el espacio restante
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    description: {
        fontSize: 12,
        color: '#555',
        marginTop: 5,
    },
});