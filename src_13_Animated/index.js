import { Text, StyleSheet, View, SafeAreaView, Animated, Button, Alert } from 'react-native'
import React, { Component } from 'react'

export default class index extends Component {
    state = {
        fadeAnim: new Animated.Value(0),
        transAnim: new Animated.Value(0)
    }

    fadeIn = () => {
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 1,
                duration: 5000,
                useNativeDriver: true
            }
        ).start(() => {
            Alert.alert('我出來了')
        })
    }

    fadeOut = () => {
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 0,
                duration: 5000,
                useNativeDriver: true
            }
        ).start(() => {
            Alert.alert('我回去了')
        })
    }

    componentDidMount() {
        this.scanMove()
    }

    scanMove = () => {
        this.state.transAnim.setValue(0);
        
        Animated.timing(
            this.state.transAnim,
            {
                toValue: 200,
                duration: 2000,
                useNativeDriver: true
            }
        ).start(()=> {
            this.scanMove()
        })
    }

    render() {
        return (
            <SafeAreaView style={[styles.container]}>
                <View>
                    <Animated.View
                        style={[
                            styles.fadingContainer,
                            {
                                opacity: this.state.fadeAnim
                            }
                        ]}
                    >
                        <Text style={[styles.fadingText]}>Fading Text</Text>
                    </Animated.View>
                </View>
                <View style={[styles.btnContainer]}>
                    <Button title='Fade In' onPress={this.fadeIn} />
                    <Button title='Fade Out' onPress={this.fadeOut} />
                </View>
                <View style={[styles.scanContainer]}>
                    <Animated.View
                        style={[
                            styles.border,
                            {
                                transform: [{
                                    translateY: this.state.transAnim
                                }]
                            }
                        ]}
                    />
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
    },
    fadingContainer: {
        backgroundColor: 'powderblue',
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    fadingText: {
        fontSize: 24
    },
    btnContainer: {
        flexDirection: 'row'
    },
    scanContainer: {
        height: 200,
        width: 200,
        borderColor: 'green',
        borderWidth: 1
    },
    border: {
        borderColor: 'red',
        borderWidth: 1
    }
})