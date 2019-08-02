import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

class Shop extends Component {

  render() {
    return (
      <View>
        <Text>
            AutoClick: level {this.state.autoClickLvl}

        </Text>
      </View>
    );
  }
}

export default Shop;
