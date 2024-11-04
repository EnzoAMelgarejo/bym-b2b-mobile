import React, { useEffect } from "react";
import { useRouter, useSegments } from "expo-router";
import { View } from "react-native";
import { Slot } from 'expo-router';
import Navbar from "@/components/navbar";
import { StatusBar } from "react-native";

export default function Layout() {
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    // Redirige automáticamente a la pantalla de inicio de sesión al iniciar la aplicación
    router.replace('/login');
  }, []);

  // Verifica si la ruta actual es '/login' para ocultar el Navbar
  const isLoginScreen = segments[0] === 'login' || segments[0] === 'register';

  return (
    <View style={{ flex: 1 }}> 
      <StatusBar barStyle={'dark-content'} translucent={false} />
      {/* Solo muestra el Navbar si no estás en la pantalla de inicio de sesión */}
      {!isLoginScreen && <Navbar />}
      <Slot />
    </View>
  );
}
