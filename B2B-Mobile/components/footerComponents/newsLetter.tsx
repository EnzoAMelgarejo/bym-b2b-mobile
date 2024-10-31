// NewsletterSection.tsx
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const paymentIcons = [
  { name: 'cc-visa', color: '#1a1f71' },
  { name: 'cc-mastercard', color: '#eb001b' },
  { name: 'cc-amex', color: '#007bc1' },
];

// Sección para el boletín de noticias
const Newsletter: React.FC = () => (
  <View style={styles.newsletter}>
    <Text style={styles.title}>Newsletter</Text>
    <TextInput style={styles.input} placeholder="Enter your email" placeholderTextColor="#666" />
    <View style={styles.paymentIcons}>
      {paymentIcons.map(({ name, color }) => (
        <Icon key={name} name={name} size={24} color={color} style={styles.icon} />
      ))}
    </View>
  </View>
);

// Estilos
const styles = StyleSheet.create({
  newsletter: {
    flex: 2,
    padding: 10,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 8,
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
  paymentIcons: {
    flexDirection: 'row',
    marginTop: 10,
  },
  icon: {
    marginRight: 12,
  },
});

export default Newsletter;
