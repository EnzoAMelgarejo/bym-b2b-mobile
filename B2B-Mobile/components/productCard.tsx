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
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        elevation: 3,
        flexDirection: 'row', // Asegurarse de que la dirección sea fila
        alignItems: 'center', // Alinear verticalmente
        overflow: 'hidden', // Asegurarse de que nada se salga del borde
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%', // Asegurarse de que ocupe todo el ancho
    },
    image: {
        width: 70, // Ajustar el tamaño de la imagen
        height: 70, // Ajustar el tamaño de la imagen
        borderRadius: 8,
        resizeMode: 'contain', // Asegurarse de que la imagen se ajuste sin recortes
    },
    descriptionContainer: {
        marginLeft: 10,
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 2,
    },
    description: {
        fontSize: 12,
        color: '#555',
        marginTop: 2,
    },
});
