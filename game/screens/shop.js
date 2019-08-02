import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Text>AutoClick: level {this.state.autoClickLvl}</Text>
      </View>
    );
  }
}

export default Shop;
