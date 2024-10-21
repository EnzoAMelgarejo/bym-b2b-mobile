// Navbar.tsx
import React, { useState } from 'react';
import { View, Pressable, StyleSheet, Image, Text } from 'react-native';
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Link, useRouter } from 'expo-router';
import Menu from './menu';

export default function Navbar() {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const router = useRouter();

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  const handlePress = (section: string) => {
    setActiveSection(section);
    router.push(section); // Navegar a la sección correspondiente
  };

  return (
    <View style={styles.navbar}>
      <Link href="/" asChild>
        <Pressable>
          <Image source={require('../assets/images/Logo.png')} style={styles.logo} />
        </Pressable>
      </Link>

      <View style={styles.rightSection}>
        <Link href="/myAccount" asChild>
          <Pressable style={styles.userIcon}>
            <Icon name="user-circle" size={30} color="#00c400" />
            <Text style={styles.textStyle}>Mi cuenta</Text>
          </Pressable>
        </Link>

        <Link href="/cart" asChild>
          <Pressable>
            <Image source={require('../assets/images/cart.png')} style={styles.icon} />
          </Pressable>
        </Link>

        <Pressable onPress={toggleMenu}>
          <Icon name="bars" size={30} color="#00c400" />
        </Pressable>
      </View>

      <Menu menuVisible={menuVisible} activeSection={activeSection} handlePress={handlePress} />
    </View>
  );
};

// Resto del código permanece igual...


const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#fff',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Constants.statusBarHeight,
    alignItems: 'center',
    borderWidth: 1,          // Grosor del borde
    borderColor: '#ccc',     // Color del borde (puedes cambiarlo por otro si prefieres)
    borderRadius: 5,         // Bordes redondeados (opcional)
    shadowColor: '#000',
  },
  logo: {
    width: 150,
    height: 60,
    resizeMode: 'contain',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  userIcon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15, // Espacio entre los íconos
  },
  textStyle: {
    marginLeft: 5, // Espacio entre el ícono y el texto
  },
});