import { Text, StyleSheet, View, TouchableOpacity, Alert } from 'react-native'
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

function HomeScreen(props) {
    return (
        <View style={[styles.container]}>
            <TouchableOpacity
                style={[styles.touchView]}
                onPress={() => {
                    props.navigation.navigate('News')
                }}
            >
                <Text style={[styles.touchText]}>HomeScreen</Text>
            </TouchableOpacity>
        </View>
    )
}

function NewsScreen(props) {
    return (
        <View style={[styles.container]}>
        <TouchableOpacity
            style={[styles.touchView]}
            onPress={() => {
                props.navigation.navigate('Home')
            }}
        >
            <Text style={[styles.touchText]}>NewsScreen</Text>
        </TouchableOpacity>
    </View>
    )
}

const Stack = createNativeStackNavigator()

export default class index extends Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name='Home' component={HomeScreen} 
                    options={{
                        title: '首頁',
                        headerStyle: {
                            backgroundColor: 'tomato'
                        },
                        headerRight: ()=> (
                            <TouchableOpacity onPress={()=>{
                                Alert.alert('Hello')
                            }}>
                                <Text>Hello</Text>
                            </TouchableOpacity>
                        )
                    }}
                />
                <Stack.Screen name='News' component={NewsScreen} />
            </Stack.Navigator>
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
        backgroundColor: 'dodgerblue',
        padding: 20
    },
    touchText: {
        fontSize: 32
    }
})