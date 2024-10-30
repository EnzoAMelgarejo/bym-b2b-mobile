// components/BlogList.tsx
import React from "react";
import { View, StyleSheet } from "react-native";
import BlogCard from "./blogCards";
import { posts } from "@/data/dataPost";

const BlogList = () => {
  return (
    <View style={styles.listContainer}>
      {posts.map((item) => (
        <BlogCard key={item.id.toString()} post={item} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});

export default BlogList;
