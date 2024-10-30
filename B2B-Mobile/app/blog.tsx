import React, {useState} from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import BlogList from "@/components/blogComponets/blogList";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import BlogMenu from "@/components/blogComponets/blogFilter";
import Footer from "../components/footer";

const Blog = () => {

    const [modalVisible, setModalVisible] = useState(false);
  
    const toggleModal = () => setModalVisible(!modalVisible);

  return (
    <ScrollView>

        <View style={styles.container}>

            <View style={styles.buttonContainer}>

                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Productos</Text>
                    <SimpleLineIcons name="options" size={20} color="white" />
                </Pressable>

                <Pressable style={[styles.button, { backgroundColor: '#FF9C2A' }]} onPress={toggleModal}>
                    <Text style={styles.buttonText}>Filtros</Text>
                    <Ionicons name="options-sharp" size={20} color="white" />
                </Pressable>

            </View>

            <BlogList />

            <BlogMenu modalVisible={modalVisible} toggleModal={toggleModal} />

            <Footer />

        </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 150,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  button: {
    marginLeft: 15,
    backgroundColor: '#00C400', 
    paddingVertical: 10, 
    paddingHorizontal: 10, 
    borderRadius: 8,
    marginBottom: 25,
    flexDirection: 'row', 
    alignItems: 'center', 
    alignSelf: 'flex-start',
    gap: 25, 
    },
buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
},
});

export default Blog;
