// Menu.tsx
import React from 'react';
import { View, Pressable, StyleSheet, Text } from 'react-native';

const sections = [
  { title: 'Productos', path: '/products' },
  { title: 'Donde Comprar', path: '/findUs' },
  { title: 'Garantía', path: '/garanty' },
  { title: 'Formularios', path: '/forms' },
  { title: 'Contactos', path: '/contacts' },
];

interface MenuProps {
    menuVisible: boolean;
    activeSection: string | null;
    handlePress: (path: string) => void;
}

export const  Menu: React.FC<MenuProps> = ({ menuVisible, activeSection, handlePress }) => {
    return menuVisible ? (
    <View style={styles.menu}>
      {sections.map(({ title, path }) => (
        <Pressable key={path} onPress={() => handlePress(path)} style={styles.menuItem}>
          <View style={activeSection === path ? styles.activeUnderline : styles.inactive}>
            <Text style={[styles.text, activeSection === path ? styles.activeText : styles.inactiveText]}>
              {title}
            </Text>
          </View>
        </Pressable>
      ))}
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  menu: {
    top: 60,
    right: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    position: 'absolute',
    },
  menuItem: {
    paddingVertical: 10,
  },
  activeUnderline: {
    borderBottomWidth: 3,
    borderBottomColor: '#ff9c2a',
    borderRadius: 5,
    paddingBottom: 5,
  },
  inactive: {
    paddingBottom: 5,
  },
  text: {
    color: 'black',
  },
  activeText: {
    color: '#ff9c2a',
  },
  inactiveText: {
    color: 'gray',
  },
});