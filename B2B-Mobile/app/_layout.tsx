import React from "react";
import { View } from "react-native";
import { Slot } from 'expo-router';
import Navbar from "@/components/navbar";
import { StatusBar } from "expo-status-bar";
export default function Layout() {
    return (
        <View>
            <StatusBar backgroundColor="#00000" />
            <Navbar />
            <Slot />
        </View>
    );
}
