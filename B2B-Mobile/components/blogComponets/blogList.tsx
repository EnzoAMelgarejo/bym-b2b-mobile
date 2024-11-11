// components/BlogList.tsx
import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import { environment } from "@/configuration/environment";
import BlogCard from "./blogCards";

const BlogList = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  // Fetch posts from the API
  useEffect(() => {
    const fetchPosts = async () => {
      const baseUrl = `${environment.SERVER_URL}/api/controller/blog`;
      const params = new URLSearchParams({
        one: "false",
      });

      const url = `${baseUrl}?${params.toString()}`;

      setLoading(true);
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        console.log("Response status:", response.status);
        console.log("Response headers:", response.headers);
        const data = await response.json();
        console.log("Datos recibidos:", data);

        // Verifica si data es un array y maneja las propiedades opcionales
        if (Array.isArray(data)) {
          const formattedData = data.map((item) => ({
            ...item,
            category: item.category || { name: "Sin categoría" },
            commentsCount: item.comments ? item.comments.length : 0,
            likesCount: item.likesCount || 0,
          }));
          setPosts(formattedData);
        } else {
          setPosts([]);
        }
      } catch (error: any) {
        setError("Error al cargar los posts");
        console.error("Error al cargar los posts:", error);
      } finally {
        setLoading(false);
      }
      console.log("URL de la API:", url);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#00C400" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.listContainer}>
      {posts.map((item) => {
        console.log("Item del post:", item);
        return <BlogCard key={item.id.toString()} post={item} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});

export default BlogList;
