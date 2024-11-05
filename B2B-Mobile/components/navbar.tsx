// Navbar.tsx
import React, { useState } from 'react';
import { View, Pressable, StyleSheet, Image, Text } from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import { Menu } from './menu';
import { useUser } from './userContext';

export default function Navbar() {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const router = useRouter();
  const { userName, role } = useUser(); // Obtener el nombre y rol del usuario

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  const handlePress = (section: string) => {
    setActiveSection(section);
    router.push(section);
  };

  const getUserRoleLabel = () => {
    switch (role) {
      case 'cliente':
        return 'Cliente';
      case 'vendedor':
        return 'Vendedor';
      case 'vendedorRepresentante':
        return 'Vendedor (Representante)';
      default:
        return '';
    }
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
            <FontAwesome name="user-circle" size={30} color="#00c400" />
            <View>
              <Text style={styles.textStyle}>{userName}</Text>
              <Text style={styles.roleStyle}>{getUserRoleLabel()}</Text>
            </View>
          </Pressable>
        </Link>

        <Link href="/cart" asChild>
          <Pressable>
            <Image source={require('../assets/images/cart.png')} style={styles.icon} />
          </Pressable>
        </Link>

        <Pressable onPress={toggleMenu}>
          <FontAwesome name="bars" size={30} color="#00c400" />
        </Pressable>
      </View>

      <Menu menuVisible={menuVisible} activeSection={activeSection} handlePress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    paddingTop: Constants.statusBarHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    shadowColor: '#000',
    position: 'absolute',
    zIndex: 1,
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
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  textStyle: {
    marginLeft: 5,
    fontWeight: 'bold',
    color: '#333',
  },
  roleStyle: {
    fontSize: 12,
    color: '#888',
    marginLeft: 5,
  },
});
