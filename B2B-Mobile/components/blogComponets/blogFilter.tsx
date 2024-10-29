// components/BlogMenu/BlogMenu.tsx
import React from "react";
import { View, Modal, ScrollView, FlatList, StyleSheet, Pressable, Image, Text } from "react-native";
import PopularPost from "./popularPost";
import SubscribeSection from "./subscribe";
import InstagramSection from "./instagramSection";
import { AntDesign } from "@expo/vector-icons";

interface BlogMenuProps {
  modalVisible: boolean;
  toggleModal: () => void;
}

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
const instagramImages = [
  require("../../assets/images/Home02.png"),
  require("../../assets/images/Home02.png"),
  require("../../assets/images/Home02.png"),
  require("../../assets/images/Home02.png"),
];

const BlogMenu: React.FC<BlogMenuProps> = ({ modalVisible, toggleModal }) => (
  <Modal transparent={true} visible={modalVisible} animationType="slide" onRequestClose={toggleModal}>
    <ScrollView>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Browse Categories:</Text>
          <FlatList
            data={categories}
            renderItem={({ item }) => <Text style={styles.categoryItem}>{item}</Text>}
            keyExtractor={(item) => item}
          />
          <View style={styles.separator} />

          <View style={styles.titleContainer}>
            <Text style={styles.modalTitle}>Post:</Text>
            <AntDesign name="left" size={20} color="#555" style={styles.icon} />
            <AntDesign name="right" size={20} color="#555" style={styles.icon} />
          </View>
          <Image source={post.image} style={styles.postImage} />
          <Text style={styles.postDetails}>Fecha de Publicación: {post.date}</Text>
          <Text style={styles.postLabel}>{post.title}</Text>
          <View style={styles.separator} />

          <Text style={styles.modalTitle}>Popular Post:</Text>
          {popularPosts.map((popular) => (
            <PopularPost key={popular.id} image={popular.image} title={popular.title} />
          ))}

          <SubscribeSection />

          <View style={styles.separator} />

          <InstagramSection instagramImages={instagramImages} />

          <Pressable onPress={toggleModal} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Cerrar</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  </Modal>
);

// Estilos
const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    width: "90%",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  icon: {
    left: 200,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginVertical: 15,
  },
  postImage: {
    width: "100%",
    height: 200,
    borderRadius: 5,
    marginBottom: 10,
  },
  postDetails: {
    fontSize: 14,
    color: "#555",
  },
  postLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  closeButton: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  closeButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  categoryItem: {
    fontSize: 16,
    color: "#333",
    paddingVertical: 5,
  },
});

export default BlogMenu;
