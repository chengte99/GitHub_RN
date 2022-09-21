import { Text, StyleSheet, View, SafeAreaView, Image, Dimensions } from 'react-native'
import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <SafeAreaView style={[styles.container]}>
                <Image
                    style={[styles.imageBase]}
                    source={require('./images/3.png')}
                />
                <Image
                    style={styles.tinyLogo}
                    source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                />
                <Image
                    style={styles.logo}
                    source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==' }}
                />
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
    imageBase: {
        height: 200,
        width: Dimensions.get('window').width,
        marginVertical: 20
    },
    tinyLogo: {
        width: 100,
        height: 100,
        marginVertical: 20
    },
    logo: {
        width: 66,
        height: 58,
    },
})