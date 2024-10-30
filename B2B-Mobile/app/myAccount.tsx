// app/auth/Register.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Pressable, ScrollView } from 'react-native';
import { SimpleLineIcons, Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import Footer from '../components/footer';

const FormRequest = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [annualIncome, setAnnualIncome] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = () => {
    if (!firstName || !lastName || !email || !phone || !country || !address || !postalCode || !businessName || !annualIncome || !password || !confirmPassword) {
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
    if (password !== confirmPassword) {
      Alert.alert("Error", "Las contraseñas no coinciden");
      return;
    }

    Alert.alert("Registro exitoso", `Bienvenido, ${firstName} ${lastName}`);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Pressable style={styles.buttonTitle}>
          <Text style={{ color: '#ffff', fontSize: 16 }}>Solicitud de formularios</Text>
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

          <Text style={styles.label}>País</Text>
          <Picker
            selectedValue={country}
            style={styles.input}
            onValueChange={(itemValue) => setCountry(itemValue)}>
            <Picker.Item label="Selecciona un país" value="" />
            <Picker.Item label="Argentina" value="argentina" />
            <Picker.Item label="Chile" value="chile" />
            <Picker.Item label="Colombia" value="colombia" />
          </Picker>

          <Text style={styles.label}>Dirección</Text>
          <TextInput
            style={styles.input}
            value={address}
            onChangeText={setAddress}
          />

          <Text style={styles.label}>Código Postal</Text>
          <TextInput
            style={styles.input}
            value={postalCode}
            onChangeText={setPostalCode}
            keyboardType="numeric"
          />

          <Text style={styles.label}>Nombre de Empresa/Razón Social</Text>
          <TextInput
            style={styles.input}
            value={businessName}
            onChangeText={setBusinessName}
          />

          <Text style={styles.label}>Ingresos Anuales Registrados</Text>
          <TextInput
            style={styles.input}
            value={annualIncome}
            onChangeText={setAnnualIncome}
            keyboardType="numeric"
          />

          <Text style={styles.label}>Contraseña</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              placeholder="Contraseña"
            />
            <Pressable onPress={() => setShowPassword(!showPassword)} style={styles.iconContainer}>
              <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="gray" />
            </Pressable>
          </View>

          <Text style={styles.label}>Confirmar Contraseña</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showPassword}
              placeholder="Confirmar contraseña"
            />
            <Pressable onPress={() => setShowPassword(!showPassword)} style={styles.iconContainer}>
              <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="gray" />
            </Pressable>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Pressable style={[styles.button, { backgroundColor: '#00C400' }]} onPress={handleRegister}>
            <Text style={{ color: '#ffff', fontSize: 14 }}>
              Registrar Usuario
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
    height: 50,
    backgroundColor: '#f0f0f0',
    borderColor: '#ddd',
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
    flex: 1, // Para que el TextInput tome el ancho disponible
  },
  formContainer: {
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#00C400',
    width: '90%',
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
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    position: 'relative', // Permite que los hijos se posicionen en relación a este contenedor
  },
  iconContainer: {
    position: 'absolute', // Posiciona el ícono en el mismo lugar del input
    right: 10, // Ajusta el espaciado a la derecha
    top: 13, // Centra verticalmente el ícono
  }
});

export default FormRequest;
