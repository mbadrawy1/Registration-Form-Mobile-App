import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome</Text>
      {/* <Button
        title="Move to users screen"
        onPress={() => props.navigation.navigate("Users")}
      /> */}
      <Image source={require("../assets/fra.gif")} style={styles.image} />
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "blue" }]}
        onPress={() => props.navigation.navigate("SignUp")}
      >
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "green" }]}
        onPress={() => props.navigation.navigate("SignIn")}
      >
        {/* <Button
        title="Sign up"
        onPress={() => props.navigation.navigate("SignUp")}
      /> */}
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
      {/* <Button
        title="Move to SignIn screen"
        onPress={() => props.navigation.navigate("SignIn")}
      /> */}
      {/* <Button
        title="Move to Registration form screen"
        onPress={() => props.navigation.navigate("RegistrationForm")}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebebeb",
    alignItems: "center",
    //a style to split the buttons
    justifyContent: "space-around",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 50,
  },
  image: {
    width: 200, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    resizeMode: "contain",
    //image centered
    alignSelf: "center",
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
});

export default HomeScreen;
