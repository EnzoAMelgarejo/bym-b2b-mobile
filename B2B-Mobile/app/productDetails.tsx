import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { InfoBox } from "@/components/productDetailComponents/infoBox";
import { InfoNav } from "@/components/productDetailComponents/infoNav";
import { ProductDetailsCard } from "@/components/productDetailComponents/productDetailsCard";

export const ProductDetails = () => {

    return (
        <ScrollView>
        <View style={styles.container}>

            {/*seccion de producto con detalles */}
            <ProductDetailsCard></ProductDetailsCard>
            
            {/*seccion de infoBox*/}
            <InfoBox></InfoBox>

            {/* Barra de navegación horizontal */}
            <InfoNav></InfoNav>
        
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
});

export default ProductDetails;
