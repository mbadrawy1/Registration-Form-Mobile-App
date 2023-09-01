// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Image,
//   FlatList,
// } from "react-native";

// const photos = [
//   require("../assets/iosco.gif"),
//   require("../assets/fra.gif"),
//   require("../assets/conf.gif"),
//   // Add more photo paths here
// ];

// function WelcomeScreen(props) {
//   const renderPhoto = ({ item }) => (
//     <Image source={item} style={styles.image} />
//   );
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={photos}
//         renderItem={renderPhoto}
//         keyExtractor={(item, index) => index.toString()}
//         horizontal
//         pagingEnabled
//       />
//       <Text style={styles.text}>Welcome Screen</Text>
//       <TouchableOpacity
//         style={[styles.button, { backgroundColor: "blue" }]}
//         onPress={() => props.navigation.navigate("Home")}
//       >
//         <Text style={styles.buttonText}>Go to home</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//   },
//   text: {
//     fontSize: 20,
//     textAlign: "center",
//     marginTop: 50,
//   },
//   image: {
//     width: 200, // Adjust the width as needed
//     height: 200, // Adjust the height as needed
//     resizeMode: "contain",
//     alignSelf: "center",
//   },
//   button: {
//     width: "40%",
//     height: 50,
//     alignSelf: "center",
//     margin: 0,
//     color: "red",
//     borderRadius: 5,
//     padding: 10,
//   },
//   buttonText: {
//     color: "white",
//     textAlign: "center",
//     fontWeight: "bold",
//     fontSize: 18,
//   },
// });
// export default WelcomeScreen;
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
    text: "Welcome to our app! Swipe to learn more.bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb Schools minister Nick Gibb says the government must avoid jumping to conclusions over the plane crash in Russia that reportedly killed Wagner chief Yevgeny Prigozhin.This only happened a few hours ago, Gibb tells BBC Radio 4s Today programme.He says the government is monitoring the situation closely and working with its allies. I cant go any further at the moment, he adds. But of course, the government will have more to say once our assessment of it has happened, and conversations with allies reach clear conclusions.Schools minister Nick Gibb says the government must avoid jumping to conclusions over the plane crash in Russia that reportedly killed Wagner chief Yevgeny Prigozhin. This only happened a few hours ago, Gibb tells BBC Radio 4s Today programme. He says the government is monitoring the situation closely and working with its allies.I cant go any further at the moment, he adds. But of course, the government will have more to say once our assessment of it has happened, and conversations with allies reach clear conclusions.",
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
