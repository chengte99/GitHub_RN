import { Text, StyleSheet, View, SafeAreaView, Dimensions } from 'react-native'
import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <SafeAreaView style={[styles.container]}>
                <View style={[styles.itemBase]}>
                    <Text style={[styles.h3]}>掃一掃</Text>
                </View>
                <View style={[styles.itemBase]}>
                    <Text style={[styles.h3]}>付款碼</Text>
                </View>
                <View style={[styles.itemBase]}>
                    <Text style={[styles.h3]}>卡包</Text>
                </View>
                <View style={[styles.itemBase]}>
                    <Text style={[styles.h3]}>出行</Text>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    itemBase: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#7fffd4",
        width: Dimensions.get('window').width / 3,
        height: 90,
        borderWidth: 1,
        borderColor: 'yellow',
        fontSize: 20
    },
    h3: {
        fontSize: 22
    }
})