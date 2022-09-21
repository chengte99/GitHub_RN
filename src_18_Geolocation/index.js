import { Text, StyleSheet, View, SafeAreaView } from 'react-native'
import React, { Component } from 'react'
import Geolocation from '@react-native-community/geolocation'

export default class index extends Component {
    componentDidMount() {
        Geolocation.getCurrentPosition((info) => {
            console.log(info);
        })
    }

    render() {
        return (
            <SafeAreaView style={[styles.container]}>
                <View>
                    <Text>index</Text>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})