import { Text, StyleSheet, View, SafeAreaView } from 'react-native'
import React, { Component } from 'react'
import NavigatorUtil from '../navigator/NavigatorUtil'
import DynamicTabNavigators from '../navigator/DynamicTabNavigators';

export default class HomePage extends Component {
    render() {
        NavigatorUtil.navigation = this.props.navigation;
        return (
            <SafeAreaView style={styles.root}>
                <DynamicTabNavigators />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    container: {
        paddingTop: 50
    }
})
