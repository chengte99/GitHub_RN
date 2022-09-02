import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet, Text, View
} from 'react-native';
import { tabNav } from '../navigator/NavigationDelegate';
import keys from "../res/data/keys.json";

export default class PopularPage extends Component {
    render() {
        // const TabNavigator = keys.length ? 
        //     tabNav({Component: PopularTab, keys, theme: {themeColor: '#2196f3'}}) : null;
        return (
            <View>
                <Text>PopularPage</Text>
            </View>
        );
    }
}
class PopularTab extends Component {
    render() {
        const { tabLabel } = this.props;
        return (<Text>{tabLabel}</Text>)
    }
}
const styles = StyleSheet.create({
    root: {
        flex: 1
    }
})