import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface PasswordInputProps {
  value: string;
  onChangeText: (text: string) => void;
  showPassword: boolean;
  onToggleShowPassword: () => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ value, onChangeText, showPassword, onToggleShowPassword }) => {
  return (
    <View style={styles.passwordContainer}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={!showPassword}
      />
      <Pressable onPress={onToggleShowPassword} style={styles.eyeIcon}>
        <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="#888" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    color: '#000',
    fontSize: 16,
    marginBottom: 15,
  },
  eyeIcon: {
    position: 'absolute',
    right: 20,
    top: '42%',
    transform: [{ translateY: -12 }],
  },
});

export default PasswordInput;
