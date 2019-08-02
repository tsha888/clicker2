import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { connect } from 'react-redux'
class CounterApp extends Component {


    render() {
        return (
            <TouchableOpacity style={{flex:1, justifyContent: 'center', alignItems: 'center' }} onPress={() => this.props.increaseCounter()}>
                <View style={styles.container}>
                    <Text style={{ fontSize: 20 }}>{this.props.counter}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});