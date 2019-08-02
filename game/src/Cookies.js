import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

class Cookies extends Component {
  render() {
    return (
      // The entire screen
      <View style={styles.container}>
        {/* Touching the entire top part of screen for increasing cookies */}
        <TouchableOpacity
          style={styles.clickerContainer}
          onPress={() => this.props.increaseCookies()}
        >
          <Text style={styles.clickerCount}> {this.props.cookies} </Text>
        </TouchableOpacity>
        {/* Touching the bottom to get to specific part */}
        <View style={styles.shopContainer}>
          <TouchableOpacity style={styles.bottomIcons}>
            <Text>The Shop</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    cookies: state.cookies
  };
}

function mapDispatchToProps(dispatch) {
  return {
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
    flexDirection: "row"
  },
  bottomIcons: {
    backgroundColor: "white",
    flex: 1 / 3,
    alignItems: "center",
    justifyContent: "center"
  }
});
