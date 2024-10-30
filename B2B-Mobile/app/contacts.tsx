import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Footer from "./footer";

export default function Contacts() {
    return (
        <View style={styles.container}>
            <Text>Contactos</Text>

            <Footer />

        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            marginVertical: 150,
            padding: 10,
        }
    }
)