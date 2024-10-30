// Footer.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import FooterSection from './footerComponents/footerSection';
import Newsletter from './footerComponents/newsLetter';
import SocialIcons from './footerComponents/socialIcons';

// Secciones del footer
const sections = [
  {
    title: 'CONTACTO',
    items: [{ label: 'Información', path: '/contact/informacion' }],
  },
  {
    title: 'CATÁLOGO',
    items: [
      { label: 'Dónde comprar', path: '/findUs' },
      { label: 'Formularios', path: '/forms' },
      { label: 'Garantías', path: '/garanty' },
      { label: 'Blog', path: '/blog' },
    ],
  },
  {
    title: 'NOSOTROS',
    items: [
      { label: 'Nuestra Historia', path: '/nosotros/historia' },
      { label: 'Trabaja con nosotros', path: '/nosotros/trabaja' },
    ],
  },
];

// Componente principal del footer
const Footer: React.FC = () => (
  <View style={styles.footerContainer}>
    <View style={styles.row}>
      {sections.map((section, index) => (
        <FooterSection key={index} title={section.title} items={section.items} />
      ))}
    </View>
    <View style={styles.row}>
      <SocialIcons />
      <Newsletter />
    </View>
  </View>
);

// Estilos
const styles = StyleSheet.create({
  footerContainer: {
    width: '100%',
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
});

export default Footer;
