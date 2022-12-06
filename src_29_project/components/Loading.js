import { Text, StyleSheet, View, ActivityIndicator } from 'react-native'
import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <View style={[styles.container]}>
                <View style={[styles.loading]}>
                    <ActivityIndicator color={'white'}/>
                    <Text style={[styles.loadingTitle]}>加載中...</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loading: {
        width: 150,
        height: 100,
        backgroundColor: 'gray',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center'
    },
    loadingTitle: {
        color: 'white',
        marginTop: 20
    }
})