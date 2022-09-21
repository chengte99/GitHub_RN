import { Text, StyleSheet, View, SafeAreaView, Image, Dimensions, ScrollView } from 'react-native'
import React, { Component } from 'react'
import Swiper from 'react-native-swiper'

export default class index extends Component {
    render() {
        return (
            <SafeAreaView style={[styles.container]}>
                <ScrollView>
                    <Swiper
                        style={[styles.wrapper]}
                        autoplay={true}
                        // showsButtons={true}
                    >
                        <Image
                            style={[styles.slideImage]}
                            source={require("./images/1.jpg")}
                        />
                        <Image
                            style={[styles.slideImage]}
                            source={require("./images/2.jpg")}
                        />
                        <Image
                            style={[styles.slideImage]}
                            source={require("./images/3.jpg")}
                        />
                        <Image
                            style={[styles.slideImage]}
                            source={require("./images/4.jpg")}
                        />
                    </Swiper>
                </ScrollView>

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        // height: 200
    },
    slideImage: {
        height: 200,
        width: Dimensions.get('window').width
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
})