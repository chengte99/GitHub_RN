import { ActivityIndicator, Alert, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function index() {
    if(Platform.OS === 'android') {
        Alert.alert(
            '標題',
            '我是安卓'
        )
    }else if(Platform.OS === 'ios'){
        Alert.alert(
            '標題',
            '我是蘋果'
        )
    }

    return (
        <SafeAreaView style={[styles.container]}>
            <View>
                <ActivityIndicator
                    color={'red'}
                    size={'large'}
                />
                <ActivityIndicator
                    color={'green'}
                    size={'small'}
                />
                <ActivityIndicator
                    color={'green'}
                    size={70}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})