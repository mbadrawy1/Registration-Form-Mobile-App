import "expo-router/entry";
import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/Welcome.js";
import HomeScreen from "../screens/Home.js";
import UsersScreen from "../screens/Users.js";
import SignUpScreen from "../screens/SignUp.js";
import SignInScreen from "../screens/SignIn.js";
import RegistrationFormScreen from "../screens/RegistrationForm.js";

const Stack = createStackNavigator();

export default function Index() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            textAlign: "center",
          },
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Users"
          component={UsersScreen}
          options={{ title: "Users" }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ title: "Sign Up" }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ title: "Sign in" }}
        />
        <Stack.Screen
          name="RegistrationForm"
          component={RegistrationFormScreen}
          options={{ title: "Registration Form" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
