import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Pressable, Text, Image } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import Footer from "../components/footer";
import CheckoutSummary from "@/components/cartComponents/checkoutSummary";
import CartList from "@/components/cartComponents/cartList";
import { environment } from "@/configuration/environment";

type Product = {
  id: number;
  title: string;
  number: number;
  total: number;
  image: string;
};

const Cart: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [subtotal, setSubtotal] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch token from your auth context or a cookie
  const token = "YOUR_AUTH_TOKEN"; // Reemplaza con tu lógica para obtener el token

  const baseUrl = `${environment.SERVER_URL}/api/controller`; // Cambia esto a tu URL base

  // Reusable fetch function
  const fetchData = async (endpoint: string, options: RequestInit = {}) => {
    const url = `${baseUrl}/${endpoint}`;
    setLoading(true);
  
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          ...options.headers,
          "Content-Type": "application/json",
          token,
        },
      });
  
      // Verifica si la respuesta es exitosa (código de estado 200-299)
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
  
      try {
        // Intenta parsear la respuesta como JSON
        const data = await response.json();
        setLoading(false);
        return data;
      } catch (parseError) {
        // Si ocurre un error de parseo, asume que el contenido no es JSON
        throw new Error("La respuesta no es un JSON válido.");
      }
    } catch (error) {
      // Muestra un mensaje de error detallado en la consola
      console.error("Error fetching data:", error);
  
      // Establece un mensaje de error más detallado para ayudar al usuario a entender el problema
      if (error instanceof SyntaxError) {
        setError("Error al analizar la respuesta del servidor. El formato de los datos no es válido.");
      } else if (error.message.includes("NetworkError")) {
        setError("Error de red. No se pudo conectar con el servidor.");
      } else {
        setError(`Error al obtener los datos: ${error.message}`);
      }
  
      setLoading(false);
      return null;
    }
  };
  

  // Fetch cart items on component mount
  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    const data = await fetchData("order", { method: "GET" });
    if (data?.itemsOrder) {
      setProducts(data.itemsOrder);
      calculateSubtotal(data.itemsOrder);
    } else {
      setError("Error al obtener los datos del carrito.");
    }
  };

  const handleIncrement = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, quantity: product.number + 1 } : product
      )
    );
    calculateSubtotal();
  };

  const handleDecrement = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id && product.number > 1
          ? { ...product, quantity: product.number - 1 }
          : product
      )
    );
    calculateSubtotal();
  };

  const calculateSubtotal = (updatedProducts = products) => {
    const newSubtotal = updatedProducts.reduce(
      (acc, product) => acc + product.total * product.number,
      0
    );
    setSubtotal(newSubtotal);
    setTotal(newSubtotal); // Add shipping calculation if needed
  };

  const handleRemoveProduct = async (id: number) => {
    const data = await fetchData("itemsOrder", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
    if (data) {
      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
      calculateSubtotal();
    } else {
      setError("Error al eliminar el producto del carrito.");
    }
  };

  const handleCheckout = async () => {
    const data = await fetchData("order", {
      method: "POST",
      body: JSON.stringify({
        total,
        items: products,
      }),
    });
    if (data) {
      // Reset cart or show success message
      setProducts([]);
      setSubtotal(0);
      setTotal(0);
    } else {
      setError("Error al procesar la compra.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {error && <Text style={styles.error}>{error}</Text>}
      {loading && <Text style={styles.loading}>Cargando...</Text>}
      <CartList
        products={products}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onRemove={handleRemoveProduct}
      />
      <CheckoutSummary subtotal={subtotal} total={total} onCheckout={handleCheckout} />
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    padding: 10,
    backgroundColor: "#fff",
  },
  error: {
    color: "red",
    marginBottom: 16,
  },
  loading: {
    color: "gray",
    marginBottom: 16,
  },
});

export default Cart;
