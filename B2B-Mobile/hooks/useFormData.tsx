// hooks/useFormData.tsx
import { useState } from 'react';
import { Alert } from 'react-native';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  address: string;
  postalCode: string;
  businessName: string;
  annualIncome: string;
  password: string;
  confirmPassword: string;
}

const useFormData = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    address: '',
    postalCode: '',
    businessName: '',
    annualIncome: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const validateForm = () => {
    const { firstName, lastName, email, phone, password, confirmPassword } = formData;
    if (Object.values(formData).some((field) => !field)) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert("Error", "Correo electrónico inválido");
      return false;
    }
    if (!/^\d+$/.test(phone)) {
      Alert.alert("Error", "Teléfono inválido. Solo se permiten números.");
      return false;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Las contraseñas no coinciden");
      return false;
    }
    return true;
  };

  return { formData, handleInputChange, validateForm };
};

export default useFormData;
