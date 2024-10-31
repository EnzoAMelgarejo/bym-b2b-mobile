import React from "react";
import { View } from "react-native";
import { Slot } from 'expo-router';
import Navbar from "@/components/navbar";
import { StatusBar } from "react-native";

export default function Layout() {
    return (
        <View> 
            <StatusBar barStyle={'dark-content'}/>
            <Navbar />
            <Slot />
        </View>
    );
}