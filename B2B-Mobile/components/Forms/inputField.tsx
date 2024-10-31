// components/InputField.tsx
import React from 'react';
import { Text, TextInput, StyleSheet, KeyboardTypeOptions } from 'react-native';

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  keyboardType?: KeyboardTypeOptions;
}

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange, keyboardType = "default" }) => (
  <>
    <Text style={styles.label}>{label}</Text>
    <TextInput style={styles.input} value={value} onChangeText={onChange} keyboardType={keyboardType} />
  </>
);

const styles = StyleSheet.create({
  label: { fontSize: 16, color: '#333', marginBottom: 5 },
  input: {
    height: 50,
    backgroundColor: '#f0f0f0',
    borderColor: '#ddd',
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
  },
});

export default InputField;
