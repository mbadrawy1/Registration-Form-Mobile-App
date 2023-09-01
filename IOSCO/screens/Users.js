import React from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableNativeFeedback,
  AsyncStorage,
} from "react-native";
import withHeader from "../hoc/withHeader";
import axios from "../config/axios";
import Loader from "../components/Loader";
import Input from "../components/Input";
import { DOCTORS_URL } from "../config/urls";
import { transformName, debounce } from "../config/helpers";
//import styles from './styles/doctorsStyles';
import UserDetails from "./UserDetails";

class UsersScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      Users: [],
      selectedUser: null,
    };
  }

  componentDidMount() {
    this._getUsers();
  }

  search = debounce((value) => {
    this._getUsers(value);
  }, 1000);

  _getUsers = async (query) => {
    this.setState({ isLoading: true });
    try {
      const token = await AsyncStorage.getItem("accessToken");
      axios.defaults.headers.common.Authorization = `JWT ${token}`;
      const response = await axios.get(USERS_URL, {
        params: { q: query ? query : "" },
      });
      this.setState({ USERS: response.data, isLoading: false });
    } catch (e) {
      this.setState({
        alert: { messages: e.response.data.message, type: "danger" },
        isLoading: false,
      });
    }
  };

  itemPressHandler = (itemId) => {
    this.setState((prevState) => {
      return {
        selectedUser: prevState.user.find((user) => user.id === itemId),
      };
    });
  };

  _renderItem = ({ item }) => (
    <TouchableNativeFeedback onPress={() => this.itemPressHandler(item.id)}>
      <View>
        <View>
          <Text>{transformName(item.name)}</Text>
        </View>
        <View>
          <Text>{item.name}</Text>
          <Text>{item.profile.specialization}</Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );

  _keyExtractor = (item) => item.id.toString();

  render() {
    const { Users, selectedUser, isLoading } = this.state;
    return (
      <View>
        <Loader title="Get users" loading={isLoading} />
        <View>
          <View>
            <Input
              placeholder="Look for a user"
              icon="md-search"
              onChangeText={this.search}
            />
          </View>
        </View>

        <UserDetails
          selectedUser={selectedUser}
          closeModal={() => this.setState({ selectedUser: null })}
        />

        <ScrollView>
          {Users.length !== 0 ? (
            <FlatList
              data={Users}
              renderItem={this._renderItem}
              keyExtractor={this._keyExtractor}
            />
          ) : (
            <Text>There are no users</Text>
          )}
        </ScrollView>
      </View>
    );
  }
}

export default withHeader(UsersScreen, "Users");
