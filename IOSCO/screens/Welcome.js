import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Carousel from "../Carousel";

const textPassages = [
  {
    text: "Welcome to our app! ",
  },
];

export default function App(props) {
  return (
    <View style={styles.container}>
      <ScrollView style={{ marginTop: 30 }}>
        <Text style={{ marginTop: 30, fontWeight: "bold", fontSize: 20 }}>
          Beautiful Egypt:
        </Text>
        <Carousel
          style="slide"
          items={[
            {
              source: require("../assets/photo1.jpg"),
            },
            {
              source: require("../assets/photo2.jpg"),
            },
            {
              source: require("../assets/photo3.jpg"),
            },
          ]}
        />
        {/* <Image
          source={require("../assets/ChairmanBanner.jpg")}
          style={styles.image}
        /> */}
        <View style={{ marginBottom: 30 }}></View>
        <View style={styles.circularFrame}>
          <Image
            source={require("../assets/ChairmanBanner.jpg")}
            style={styles.circularImage}
          />
        </View>

        <Text style={{ color: "red", fontWeight: "bold", marginTop: 5 }}>
          Welcome message from the chairman:
        </Text>
        <Carousel style="text" items={textPassages} />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "blue", marginTop: 30 }]}
          onPress={() => props.navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  button: {
    width: "40%",
    height: 50,
    alignSelf: "center",
    margin: 0,
    color: "red",
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  image: {
    width: 300, // Adjust the width as needed
    height: 300, // Adjust the height as needed
    resizeMode: "contain",
    //image centered
    alignSelf: "center",
  },
  circularFrame: {
    width: 150, // Adjust the size of the circular frame
    height: 150, // Adjust the size of the circular frame
    borderRadius: 75, // Set borderRadius to half the width/height to create a circle
    overflow: "hidden", // Clip the content to the circular frame
    marginBottom: 10, // Add spacing below the circular frame
  },
  circularImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
