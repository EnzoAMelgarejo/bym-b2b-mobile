// app/auth/Register.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Pressable, ScrollView } from 'react-native';
import { SimpleLineIcons, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Footer from '../components/footer';

const FormRequest = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [productType, setProductType] = useState('');
  const [documentNumber, setDocumentNumber] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [ruc, setRuc] = useState('');
  const [serialNumber, setSerialNumber] = useState('');

  const handleRegister = () => {
    if (!firstName || !lastName || !email || !phone || !productType || !documentNumber || !invoiceNumber || !ruc || !serialNumber) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert("Error", "Correo electrónico inválido");
      return;
    }
    if (!/^\d+$/.test(phone)) {
      Alert.alert("Error", "Teléfono inválido. Solo se permiten números.");
      return;
    }

    router.push("/activateGaranty");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Pressable style={styles.buttonTitle}>
          <Text style={{ color: '#ffff', fontSize: 16 }}>Datos de garantía</Text>
          <SimpleLineIcons name="options" size={20} color="white" />
        </Pressable>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Nombre</Text>
          <TextInput
            style={styles.input}
            value={firstName}
            onChangeText={setFirstName}
          />

          <Text style={styles.label}>Apellido</Text>
          <TextInput
            style={styles.input}
            value={lastName}
            onChangeText={setLastName}
          />

          <Text style={styles.label}>Mail</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          
          <Text style={styles.label}>Teléfono</Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />

          <Text style={styles.label}>Tipo de producto</Text>
          <TextInput
            style={styles.input}
            value={productType}
            onChangeText={setProductType}
          />

          <Text style={styles.label}>Número de documento</Text>
          <TextInput
            style={styles.input}
            value={documentNumber}
            onChangeText={setDocumentNumber}
          />

          <Text style={styles.label}>Número de factura</Text>
          <TextInput
            style={styles.input}
            value={invoiceNumber}
            onChangeText={setInvoiceNumber}
          />

          <Text style={styles.label}>RUC de compra</Text>
          <TextInput
            style={styles.input}
            value={ruc}
            onChangeText={setRuc}
          />

          <Text style={styles.label}>Número de serie</Text>
          <TextInput
            style={styles.input}
            value={serialNumber}
            onChangeText={setSerialNumber}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Pressable style={[styles.button, { backgroundColor: '#FF9C2A' }]} onPress={handleRegister}>
            <Text style={{ color: '#ffff', fontSize: 14 }}>Adjuntar factura</Text>
          </Pressable>

          <Pressable style={[styles.button, { backgroundColor: '#00C400' }]} onPress={handleRegister}>
            <View style={styles.cameraButton}>
              <Ionicons name="camera" size={20} color="white" />
              <Text style={{ color: '#ffff', fontSize: 14, marginLeft: 5 }}>Tomar fotografía</Text>
            </View>
          </Pressable>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Pressable style={[styles.button, { backgroundColor: '#00C400' }]} onPress={handleRegister}>
            <Text style={{ color: '#ffff', fontSize: 16, marginLeft: 5 }}>Enviar</Text>
          </Pressable>
        </View>

        <Footer />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#fff',
    marginVertical: 130,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000000'
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    height: 30,
    backgroundColor: '#f0f0f0',
    borderColor: '#ddd',
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  formContainer: {
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#00C400',  
    width: '45%',
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  buttonTitle: {
    display: 'flex',
    gap: 25,
    width: 'auto',
    height: 40,
    backgroundColor: '#00C400', 
    padding: 10, 
    borderRadius: 8,
    marginVertical: 15,
    flexDirection: 'row', 
    alignItems: 'center', 
    alignSelf: 'flex-start', 
  },
  cameraButton: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export default FormRequest;
