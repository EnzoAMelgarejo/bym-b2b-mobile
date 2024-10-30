// Footer.tsx
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Link } from "expo-router";
import Icon from 'react-native-vector-icons/FontAwesome';

type Section = {
  title: string;
  items: { label: string; path: string }[];
};

const sections: Section[] = [
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

const FooterSection: React.FC<Section> = ({ title, items }) => (
  <View style={styles.column}>
    <Text style={styles.title}>{title}</Text>
    {items.map((item, index) => (
      <Link href={item.path} key={index} style={styles.label}>
        {item.label}
      </Link>
    ))}
  </View>
);

const SocialIcons: React.FC = () => (
  <View style={styles.iconRow}>
    <Link href="https://facebook.com">
      <Icon name="facebook" size={24} color="#3b5998" style={styles.icon} />
    </Link>
    <Link href="https://twitter.com">
      <Icon name="twitter" size={24} color="#00acee" style={styles.icon} />
    </Link>
    <Link href="https://instagram.com">
      <Icon name="instagram" size={24} color="#C13584" style={styles.icon} />
    </Link>
    <Link href="https://youtube.com">
      <Icon name="youtube" size={24} color="#ff0000" style={styles.icon} />
    </Link>
  </View>
);

const NewsletterSection: React.FC = () => (
  <View style={styles.newsletter}>
    <Text style={styles.title}>Newsletter</Text>
    <TextInput style={styles.input} placeholder="Enter your email" placeholderTextColor="#666" />
    <View style={styles.paymentIcons}>
      <Icon name="cc-visa" size={24} color="#1a1f71" style={styles.icon} />
      <Icon name="cc-mastercard" size={24} color="#eb001b" style={styles.icon} />
      <Icon name="cc-amex" size={24} color="#007bc1" style={styles.icon} />
    </View>
  </View>
);

const Footer: React.FC = () => (
  <View style={styles.footerContainer}>
    <View style={styles.row}>
      {sections.map((section, index) => (
        <FooterSection
          key={index}
          title={section.title}
          items={section.items}
        />
      ))}
    </View>
    <View style={styles.row}>
      <SocialIcons />
      <NewsletterSection />
    </View>
  </View>
);

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
  column: {
    flex: 1,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#fff',
    paddingVertical: 6,
    borderRadius: 4,
    marginTop: 8,
    fontSize: 14,
    borderBottomWidth: 1,
    borderColor: '#000',
  },
  iconRow: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  icon: {
    marginRight: 12,
  },
  newsletter: {
    flex: 2,
    paddingHorizontal: 25,
  },
  paymentIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
});

export default Footer;
