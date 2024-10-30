// app/auth/Register.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Pressable, ScrollView } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import Footer from './footer';

const FormRequest= () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Validaciones
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Las contraseñas no coinciden");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert("Error", "Correo electrónico inválido");
      return;
    }

    // Lógica para registrar al usuario (conectarse al backend)
    Alert.alert("Registro exitoso", `Bienvenido, ${name}`);
  };

  return (
    <ScrollView>
    <View style={styles.container}>
        <Pressable style={styles.buttonTitle}>
            <Text style={{color: '#ffff', fontSize: 16,}}>Solicitud de formularios</Text>
            <SimpleLineIcons name="options" size={20} color="white" />
        </Pressable>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="Confirmar contraseña"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
        <View style={styles.buttonContainer}>
            <Pressable style={[styles.button, {backgroundColor:'#FF9C2A'}]} onPress={handleRegister}>
                <Text style={{color: '#ffff', fontSize: 14,}}>
                    Descarga tu formulario
                </Text>
            </Pressable>
            <Pressable style={styles.button} onPress={handleRegister}>
                <Text style={{color: '#ffff', fontSize: 14,}}>
                   Carga tu formulario
                </Text>
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
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    marginVertical: 150,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000000'
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#00C400',  
    width: '50%',
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
    },
    buttonTitle: {
        display: 'flex',
        gap: 25,
        width: 250,
        height: 40,
        backgroundColor: '#00C400', 
        padding: 10, 
        borderRadius: 8,
        marginVertical: 15,
        flexDirection: 'row', 
        alignItems: 'center', 
        alignSelf: 'flex-start', 
    }
});

export default FormRequest;
