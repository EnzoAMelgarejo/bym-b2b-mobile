import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface props {
    contact: string,
    catalog: string,
    ourStory: string,
}

export const Footer: React.FC<props> ({contact, catalog, ourStory}) => {
    <View style={styles.footer}>
        <View style={styles.contentContainer}>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        </View>
        <View style={styles.letterContainer}>
            <View></View>
        </View>
    </View>
}

const styles = StyleSheet.create(
    {
        footer: {
            marginTop:10,
            display: 'flex',
            flexDirection: 'row'
        },
        contentContainer: {
            display: 'flex',
            flexDirection: 'row',
        },
        title:{

        },
        text:{
        },
        letterContainer: {
            display: 'flex',
            flexDirection: 'column',
            marginBottom: 5,
        }
    }
)