import React from "react";
import { View } from "react-native";
import { Slot } from 'expo-router';
import Navbar from "@/components/navbar";

export default function Layout() {
    return (
        <View>
            <Navbar />
            <Slot />
        </View>
    );
}
