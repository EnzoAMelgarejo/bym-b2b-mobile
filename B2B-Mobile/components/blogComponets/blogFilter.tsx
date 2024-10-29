// components/FilterMenu.js
import React from "react";
import { View, Text, Modal, StyleSheet, Pressable, FlatList, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const BlogMenu = ({ modalVisible, toggleModal }) => {
  const categories = ["Elemento 1", "Elemento 2", "Elemento 3"];
  const post = {
    image: require("../../assets/images/Home02.png"),
    date: "2024-10-25",
    title: "Título del Post",
  };
  const popularPosts = [
    { id: 1, image: require("../../assets/images/Home02.png"), title: "Popular Post 1" },
    { id: 2, image: require("../../assets/images/Home02.png"), title: "Popular Post 2" },
    { id: 3, image: require("../../assets/images/Home02.png"), title: "Popular Post 3" },
  ];

  return (
    <Modal
      transparent={true}
      visible={modalVisible}
      animationType="slide"
      onRequestClose={toggleModal}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>

          <Text style={styles.modalTitle}>Browse Categories:</Text>
          <FlatList
            data={categories}
            renderItem={({ item }) => (
              <Text style={styles.categoryItem}>{item}</Text>
            )}
            keyExtractor={(item) => item}
          />
          <View style={styles.separator} />

          <View style={styles.postRow}>
          <Text style={styles.modalTitle}>Post:</Text>
            <View style={styles.navigationIcons}>
              <AntDesign name="left" size={20} color="#333" />
              <AntDesign name="right" size={20} color="#333" />
            </View>
          </View>
          <Image source={post.image} style={styles.postImage} />
            <Text style={styles.postLabel}>Título del Post</Text>
          <Text style={styles.postDetails}>Fecha de Publicación: {post.date}</Text>
          <Text style={styles.postDetails}>{post.title}</Text>
          <View style={styles.separator} />

          <Text style={styles.modalTitle}>Popular Post:</Text>
          {popularPosts.map((popular) => (
            <View key={popular.id} style={styles.popularPostRow}>
              <Image source={popular.image} style={styles.popularImage} />
              <Text style={styles.popularTitle}>{popular.title}</Text>
            </View>
          ))}

          <Pressable onPress={toggleModal} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Cerrar</Text>
          </Pressable>

        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  categoryItem: {
    fontSize: 16,
    color: "#333",
    paddingVertical: 5,
  },
  separator: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 10,
  },
  postRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  postLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  navigationIcons: {
    flexDirection: "row",
    gap: 10,
  },
  postImage: {
    width: "100%",
    height: 150,
    marginVertical: 10,
    borderRadius: 8,
  },
  postDetails: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  popularPostRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  popularImage: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 5,
  },
  popularTitle: {
    fontSize: 16,
    color: "#333",
  },
  closeButton: {
    backgroundColor: "#FF9C2A",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: "center",
  },
  closeButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default BlogMenu;
