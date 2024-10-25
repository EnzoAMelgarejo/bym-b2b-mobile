import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import filterCategoriesData from '../data/categoryFilter';

const FiltersMenu = () => {
  const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: boolean }>({});

  const handleCheckboxChange = (category: string, element: string) => {
    const key = `${category}-${element}`;
    setSelectedFilters({
      ...selectedFilters,
      [key]: !selectedFilters[key],  // Alterna entre seleccionado y no seleccionado
    });
  };

  return (

    <ScrollView style={styles.menu} nestedScrollEnabled={true} contentContainerStyle={{ flexGrow: 1 }}>
      {filterCategoriesData.map((category, index) => (
        <View key={category.id} style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>{category.name}</Text>
          {category.elements.map((element) => {
            const key = `${category.name}-${element}`;
            return (
              <View key={key} style={styles.elementItem}>
                {/* Agregar las CheckBox PENDIENTE*/}
                <Text style={styles.elementText}>{element}</Text>
              </View>
            );
          })}

          {index < filterCategoriesData.length - 1 && (
            <View style={styles.separator} />  //Separadores
          )}

        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#707070',
    marginVertical: 10, // Espaciado vertical
  },
  menu: {
    padding: 10,
    position: 'absolute',
    zIndex: 10,
    backgroundColor: '#ffff',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#707070',
    left: 120,
    top: 45,
    maxHeight: 400,
  },
  categoryContainer: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  elementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  elementText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default FiltersMenu;
