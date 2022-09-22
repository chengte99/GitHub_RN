import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

function HomeScreen(props) {
    return (
        <View style={[styles.container]}>
            <Text style={[styles.text]}>HomeScreen</Text>
        </View>
    )
}

function NewsScreen(props) {
    return (
        <View style={[styles.container]}>
            <Text style={[styles.text]}>NewsScreen</Text>
        </View>
    )
}

const Tab = createBottomTabNavigator()

const index = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({focused, color, size})=> {
                    let iconName;
                    if(route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    }else {
                        iconName = focused ? 'newspaper' : 'newspaper-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: 'tomato',
            })}
        >
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='News' component={NewsScreen} />
        </Tab.Navigator>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 32
    }
})