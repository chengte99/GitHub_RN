import { Text, StyleSheet, View, SafeAreaView, TouchableHighlight, Alert, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <SafeAreaView style={[styles.container]}>
                <TouchableHighlight
                    onPress={()=>{
                        Alert.alert('觸碰高亮');
                    }}
                >
                    <View style={[styles.touchView]}>
                        <Text style={[styles.touchText]}>觸碰高亮</Text>
                    </View>
                </TouchableHighlight>
                <TouchableOpacity
                    onPress={()=>{
                        Alert.alert('觸碰透明度');
                    }}
                >
                    <View style={[styles.touchView]}>
                        <Text style={[styles.touchText]}>觸碰透明度</Text>
                    </View>
                </TouchableOpacity>
                <TouchableWithoutFeedback
                    onPress={()=>{
                        Alert.alert('觸碰無回饋');
                    }}
                >
                    <View style={[styles.touchView]}>
                        <Text style={[styles.touchText]}>觸碰無回饋</Text>
                    </View>
                </TouchableWithoutFeedback>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    touchView: {
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: 'red',
    },
    touchText: {
        fontSize: 20
    }
})