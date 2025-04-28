import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
const App = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}> Gabriel Sumual</Text>
        <Text style={styles.Title}>Computer Science</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.info}>
          About Me Hello! My name is Gabriel Sumual, a passionate student
          specializing in Computer Science. I believe that technology is not
          just about innovation, but about creating meaningful solutions that
          connect and empower people. Currently, I am pursuing my studies at
          Universitas Klabat, constantly growing my skills and knowledge to make
          a positive impact in the world of technology.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.info}>Education</Text>
        <Text style={styles.isi}> 2022- Now - Computer Science</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.info}>Personal Skill</Text>
        <Text style={styles.isi}>1. Programming Fundamentals</Text>
        <Text style={styles.isi}>2. Problem-Solving</Text>
        <Text style={styles.isi}>3. Critical Thinking</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#696969",
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 80,
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: "700",
    color: "#DEB887",
  },
  Title: {
    fontSize: 18,
    color: "#BDB76B",
    marginBottom: 20,
  },
  short: {
    fontSize: 14,
    fontFamily: "serif",
    color: "white",
    textAlign: "center",
  },
  section: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#FFFFF0",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "white",
    elevation: 15,
  },
  info: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    color: "#BDB76B",
    marginBottom: 20,
    fontFamily: "serif",
  },
  isi: {
    fontSize: 14,
    color: "black",
    marginBottom: 15,
    fontFamily: "roboto",
  },
});

export default App;
