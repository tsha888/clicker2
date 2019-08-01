import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      number: 0
    };
  }

  clicker() {
    this.setState({
      number: this.state.number + 1
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.clickerContainer}
          onPress={this.clicker.bind(this)}
        >
          <Text style={styles.clickerCount}> {this.state.number} Cookies</Text>
        </TouchableOpacity>
        <View style={styles.shopContainer}>
          <TouchableOpacity style={styles.bottomIcons}
            // onPress={this.clicker.bind(this)}
          >
            <Text>The Shop</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  clickerContainer: {
    flex: 9 / 10,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center"
  },
  clickerCount: {
    fontSize: 40
  },
  shopContainer: {
    flex: 1 / 10,
    backgroundColor: "blue",
    flexDirection: "row",
  },
  bottomIcons: {
    backgroundColor: "white", 
    flex: 1 / 3,
    alignItems: "center",
    justifyContent: "center"
  }
});

// function game(props) {
//   const [counter, setCounter] = useState(0)

//   function increaseNumber(e) {
//     counter = this.state.counter + 1;
//   }

//   return (
//   <View style={styles.container}>
//   <TouchableOpacity
//     style={styles.clickerContainer}
//     onPress={e => increaseNumber(e)}
//   >
//     <Text> Clicker: {this.state.counter} </Text>
//   </TouchableOpacity>
//   <View style={styles.shopContainer} />
// </View>
// );
// }
