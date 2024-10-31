// components/PasswordInput.tsx
import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface PasswordInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ label, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.passwordContainer}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChange}
        secureTextEntry={!showPassword}
        placeholder={label}
      />
      <Pressable onPress={() => setShowPassword(!showPassword)} style={styles.iconContainer}>
        <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="gray" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  passwordContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  input: {
    height: 50,
    backgroundColor: '#f0f0f0',
    borderColor: '#ddd',
    paddingHorizontal: 10,
    flex: 1,
  },
  iconContainer: { position: 'absolute', right: 10, top: 13 },
});

export default PasswordInput;
