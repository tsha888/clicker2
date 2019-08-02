import React, { Component } from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput } from "react-native";
import { connect } from "react-redux";

class Cookies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      username: ''
    };
  }  
  

  render() {
    if (this.state.isClicked) {
      return (
        <View style={styles.container}>
          <View style={styles.clickerContainer}>
          <TextInput
            style={styles.clickerCount}
            placeholder="Enter your username"
            value={this.state.username}
            onChangeText={setUsername.bind(this)}
            />
            <TouchableOpacity
        onPress={()=> this.props.highscore(this.state.username)}
        style={[styles.button, styles.button2]}
      ></TouchableOpacity>
            <Text style={styles.clickerCount}> {this.props.cookies} </Text>
            

          </View>
          {/* Touching the bottom to get to specific part */}
          <View style={styles.shopContainer}>
            <TouchableOpacity style={styles.bottomIcons}>
              <Text>The Shop</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomIcons}>
              <Text>Highest Score</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bottomIcons}
              onPress={toggleSwitch.bind(this)}
            >
              <Text>My Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    return (
      // The entire screen
      <View style={styles.container}>
        <View style={styles.clickerContainer}>
          <Text style={styles.count}> {this.props.cookies} </Text>
          <TouchableOpacity onPress={() => this.props.increaseCookies()}>
            <Image
              source={{
                uri:
                  "https://www.stickpng.com/assets/images/580b57fbd9996e24bc43c0fc.png"
              }}
              style={{ width: 200, height: 200 }}
            />
          </TouchableOpacity>
        </View>
        {/* Touching the bottom to get to specific part */}
        <View style={styles.shopContainer}>
          <TouchableOpacity style={styles.bottomIcons}>
            <Text>The Shop</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomIcons}>
            <Text>Highest Score</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomIcons}
            onPress={toggleSwitch.bind(this)}
          >
            <Text>My Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function setUsername(user){
    this.setState({
        username: user
    })
}
function toggleSwitch() {
  this.setState({ isClicked: !this.state.isClicked });
}

function mapStateToProps(state) {
  return {
    cookies: state.cookies,
    highscore: state.highscore
  };
}

function mapDispatchToProps(dispatch) {
  return {
    highscore: () => dispatch({type:""}),
    increaseCookies: () => dispatch({ type: "INCREASE_COOKIES" })
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cookies);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  count:{
    fontSize: 40
  },
  clickerContainer: {
    flex: 9 / 10,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center"
  },
  clickerCount: {
    fontSize: 40,
    paddingBottom: 200
  },
  shopContainer: {
    flex: 1 / 10,
    backgroundColor: "blue",
    flexDirection: "row"
  },
  bottomIcons: {
    backgroundColor: "white",
    flex: 1 / 3,
    alignItems: "center",
    justifyContent: "center"
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
  button2: {
    backgroundColor: "gold"
  },
});
