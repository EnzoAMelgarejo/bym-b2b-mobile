import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

interface FilterMenuProps {
  onSelectFilter?: (filter: string) => void;
}

const FilterMenu: React.FC<FilterMenuProps> = ({ onSelectFilter }) => {
    
  return (
    <View style={styles.filterMenu}>
      <Pressable onPress={() => onSelectFilter?.('Precio ascendente')}>
        <Text style={styles.filterOption}>Precio ascendente</Text>
      </Pressable>
      <Pressable onPress={() => onSelectFilter?.('Precio descendente')}>
        <Text style={styles.filterOption}>Precio descendente</Text>
      </Pressable>
      <Pressable onPress={() => onSelectFilter?.('Más vendido')}>
        <Text style={styles.filterOption}>Más vendido</Text>
      </Pressable>
      <Pressable onPress={() => onSelectFilter?.('Mejor valorado')}>
        <Text style={styles.filterOption}>Mejor valorado</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    filterMenu: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        position: 'absolute',
        zIndex: 10,
        top: 45,
        left: 200,
   },
    
  filterOption: {
    paddingVertical: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});

export default FilterMenu;
