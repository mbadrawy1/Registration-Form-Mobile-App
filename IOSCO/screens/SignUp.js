import React from "react";
import { Location } from "expo";
import {
  ScrollView,
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  AsynvStorage,
} from "react-native";
//import styles from "./styles/authStyles";
import ScreenTitle from "../components/ScreenTitle";
import Button from "../components/Button";
import Loader from "../components/Loader";
import Alert from "../components/Alert";
import axios from "../config/axios";
import { SIGNUP_URL } from "../config/urls";
import { StyleSheet } from "react-native";

class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
    (this.state = {
      name: "",
      email: "",
      password: "",
      location: null,
      isLoading: false,
      alert: {
        messages: null,
        type: "",
      },
    }),
      (this._signUp = this._signUp.bind(this));
  }

  componentWillMount() {
    this._getLocation();
  }

  _getLocation = async () => {
    try {
      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest,
      });
      this.setState({ location });
    } catch (e) {
      this.setState({ location: null });
    }
  };

  componentDidUpdate() {
    if (this.state.alert.messages) {
      setTimeout(() => {
        this.setState({ alert: { messages: null } });
      }, 3000);
    }
  }

  componentWillUnmount() {
    clearTimeout();
  }

  changeNameHandler = (value) => {
    this.setState({ name: value });
  };

  changeEmailHandler = (value) => {
    this.setState({ email: value });
  };

  changePasswordHandler = (value) => {
    this.setState({ password: value });
  };

  validate() {
    const { name, email, password } = this.state;
    let validationErrors = [];
    let passed = true;
    if (!name) {
      validationErrors.push("Please enter your name");
      passed = false;
    }

    if (!email) {
      validationErrors.push("Please enter your email");
      passed = false;
    }

    if (!password) {
      validationErrors.push("Please enter your password");
      passed = false;
    }

    if (validationErrors.length > 0) {
      this.setState({ alert: { messages: validationErrors, type: "danger" } });
    }
    return passed;
  }

  _signUp = async () => {
    console.log("Sign-up function called");
    if (!this.validate()) return;
    this.setState({ isLoading: true });
    const { name, email, password } = this.state;
    console.log("Sign-up function called");
    const body = {
      name,
      email,
      password,
    };

    try {
      console.log("before axios");
      // const response = await axios.post(SIGNUP_URL, body);
      // this.setState({
      //   name: "",
      //   email: "",
      //   password: "",
      //   isLoading: false,
      // });
      console.log("after set state");
      console.log("Sign-up function called");

      this.props.navigation.navigate("SignIn", {
        alert: {
          messages: "Your account was created successfully",
          type: "success",
        },
      });
    } catch (e) {
      this.setState({
        alert: { messages: e.response, type: "danger" },
        isLoading: false,
      });
    }
  };

  render() {
    const { name, email, password, isLoading, alert } = this.state;
    return (
      <ScrollView contentContainerStyle={{ paddingVertical: 40 }}>
        <Loader title="Creating your account" loading={isLoading} />
        <Alert messages={alert.messages} type={alert.type} />
        <View style={styles.alignment}>
          <ScreenTitle title="Register a new account" icon="md-person-add" />
          <KeyboardAvoidingView behavior="padding" enabled>
            <View>
              <TextInput
                onChangeText={this.changeNameHandler}
                value={name}
                placeholder="Name"
                style={styles.input}
              />
            </View>
            <TextInput
              onChangeText={this.changeEmailHandler}
              value={email}
              placeholder="E-mail"
              style={styles.input}
            />
            <TextInput
              onChangeText={this.changePasswordHandler}
              value={password}
              secureTextEntry
              placeholder="Password"
              style={styles.input}
            />
            {/* <View style={{ flexDirection: "row" }}>
              <CheckBox
                value={userType}
                onChange={this.changeUserTypeHandler}
                style={{ margin: 10 }}
              />
              <Text>طبيب</Text>
            </View> */}
            {
              <React.Fragment>
                {/* <Input
                  onChangeText={this.changeSpeializationHandler}
                  value={speialization}
                  placeholder="Job Title/ Position"
                />
                <Input
                  onChangeText={this.changeWorkingHoursHandler}
                  value={workingHours}
                  placeholder="Working Hours"
                />
                <Input
                  onChangeText={this.changeAddressHandler}
                  value={address}
                  placeholder="Address"
                />
                <Input
                  onChangeText={this.changePhoneHandler}
                  value={phone}
                  placeholder="Phone"
                />
                <Input
                  onChangeText={this.changePhoneHandler}
                  value={phone}
                  placeholder="City"
                />
                <Input
                  onChangeText={this.changePhoneHandler}
                  value={phone}
                  placeholder="Jurisdiction"
                /> */}
              </React.Fragment>
            }

            <Button text="Create" onPress={this._signUp} />
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 10,
    borderRadius: 100,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginBottom: 10,
    fontSize: 16,
    width: 300,
    textAlign: "center",
  },
  alignment: {
    alignItems: "center",
  },
});

export default SignUpScreen;
