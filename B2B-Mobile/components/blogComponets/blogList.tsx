// components/BlogList.tsx
import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import BlogCard from "./blogCards";
import { posts } from "@/data/dataPost";

const BlogList = () => {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <BlogCard post={item} />}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexGrow: 1,    // Asegura que el contenido sea visible
  },
});

export default BlogList;
