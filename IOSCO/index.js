import "expo-router/entry";
import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/Home.js";
import UsersScreen from "./screens/Users.js";
import SignUpScreen from "./screens/SignUp.js";
import SignInScreen from "./screens/SignIn.js";
import RegistrationFormScreen from "./screens/RegistrationForm.js";

const Stack = createStackNavigator();

export default function Index() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Users" component={UsersScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen
          name="RegistrationForm"
          component={RegistrationFormScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
