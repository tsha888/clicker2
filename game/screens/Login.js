
import React , { useState, useEffect } from 'react';
import { AsyncStorage, StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { SCREENS } from '../constants';

function Login(props) {
  const { navigation } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  function login(username, password) {
    fetch("https://hohoho-backend.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      redirect: "follow",
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        if (responseJson.success) {
          navigation.navigate("Main");
          setPassword("");
          setUsername("");
        } else {
          console.log("Login unsuccessful!");
          setStatus("Oops! Unsuccessful login");
        }
      })
      .catch(err => {
        console.log("Error fetching post request for login", err);
      });
  }

  function register() {
    navigation.navigate(SCREENS.REGISTER);
  }

  async function getSavedUser() {
    const userJson = await AsyncStorage.getItem("user");
    if (!userJson) {
      return;
    }
    const user = JSON.parse(userJson);
    login(user.username, user.password);
  }

  useEffect(() => {
    getSavedUser();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.textBig}> CLICKER GAME </Text>
      <Text style={{ color: "red" }}>{status}</Text>
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
        onPress={() => login(username, password)}
        style={[styles.button, styles.button2]}
      >
        <Text style={styles.buttonLabel}>Tap to Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.button1]}
        onPress={register}
      >
        <Text style={styles.buttonLabel}>Tap to Register</Text>
      </TouchableOpacity>
    </View>
  );
}

Login.navigationOptions = {
  title: "Login"
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textBig: {
    fontSize: 36,
    textAlign: "center",
    margin: 10
  },
  button: {
    alignSelf: "stretch",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    width: "80%",
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: 20
  },
  button1: {
    backgroundColor: "skyblue"
  },
  button2: {
    backgroundColor: "gold"
  },
  buttonLabel: {
    textAlign: "center",
    fontSize: 16,
    color: "white"
  },
  textinput: {
    borderColor: "blue",
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
