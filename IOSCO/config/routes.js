import React from "react";
import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer,
} from "react-navigation";
import HomeScreen from "../screens/Home";
import UsersScreen from "../screens/UsersScreen";
import Drawer from "../components/Drawer";
import SignUpScreen from "../screens/SignUp";
import SignInScreen from "../screens/SignIn";
//import ProfileScreen from '../screens/Profile';

const UsersStack = createStackNavigator({
  UsersScreen: { screen: UsersScreen },
});

const DrawerNavigation = createDrawerNavigator(
  {
    Users: {
      screen: UsersStack,
      navigationOptions: {
        drawerLabel: "Users",
      },
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        drawerLabel: "الملف الشخصي",
      },
    },
  },
  {
    contentOptions: {
      itemStyle: {
        flexDirection: "row-reverse",
      },
      labelStyle: {
        fontSize: 18,
        marginRight: 5,
      },
      activeTintColor: "#fff",
      activeBackgroundColor: "#007bff",
    },
    drawerPosition: "right",
    drawerWidth: 300,
    contentComponent: (props) => <Drawer drawerProps={props} />,
  }
);

export default createAppContainer(
  createStackNavigator(
    {
      Main: HomeScreen,
      SignUp: SignUpScreen,
      SignIn: SignInScreen,
      DrawerNav: DrawerNavigation,
    },
    {
      headerMode: "none",
    }
  )
);
