import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import { SCREENS } from "../constants";
import { AuthSession } from "expo";

function Register(props) {
  const { navigation } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function register(username, password) {
    fetch("https://hohoho-backend.herokuapp.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        if (responseJson.success) {
          navigation.navigate(SCREENS.LOGIN);
        } else {
          console.log("register unsuccessful!");
        }
      })
      .catch(err => {
        console.log("Error fetching post request for register", err);
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textBig}>Register</Text>

      <TextInput
        style={styles.textinput}
        placeholder="Enter your username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.textinput}
        placeholder="Enter your password"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity
        onPress={() => register(username, password)}
        style={styles.button}
      >
        <Text style={styles.buttonLabel}>Tap to Register</Text>
      </TouchableOpacity>
    </View>
  );
}

Register.navigationOptions = {
  title: "Register"
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textBig: {
    fontSize: 36,
    textAlign: "center",
    margin: 10
  },
  button: {
    backgroundColor: 'skyblue',
    alignSelf: "stretch",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    width: "80%",
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: 10
  },
  buttonLabel: {
    textAlign: "center",
    fontSize: 16,
    color: "white"
  },
  textinput: {
    borderColor: "red",
    paddingLeft: 10,
    backgroundColor: "white",
    borderRadius: 5,
    borderBottomWidth: 1,
    width: "80%",
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center"
  }
});