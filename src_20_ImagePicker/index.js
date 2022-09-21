import { Text, StyleSheet, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'

export default class index extends Component {
    constructor() {
        super()
        this.state = {
            avatar: 'https://reactnative.dev/img/tiny_logo.png'
        }
    }

    changeImage = async () => {
        await launchCamera(
            {
                saveToPhotos: true,
                mediaType: 'photo',
                cameraType: 'back'
            },
            (res) => {
                console.log(res);
            }
        )
    }

    render() {
        return (
            <SafeAreaView style={[styles.container]}>
                <TouchableOpacity
                    onPress={this.changeImage}
                >
                    <View style={[styles.avatar]}>
                        <Image
                            style={[styles.avatar]}
                            source={{ uri: this.state.avatar }}
                        />
                    </View>
                </TouchableOpacity>
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
    avatar: {
        height: 200,
        width: 200
    }
})