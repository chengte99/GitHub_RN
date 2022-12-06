import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function FeedScreen(props) {
    return (
        <View style={[styles.container]}>
            <Text style={[styles.text]}>FeedScreen</Text>
            <Button title='go Profile' onPress={()=>{
                props.navigation.navigate('Profile')
            }} />
            <Button title='go Settings' onPress={()=>{
                props.navigation.navigate('Settings')
            }} />
        </View>
    )
}

function MessagesScreen(props) {
    return (
        <View style={[styles.container]}>
            <Text style={[styles.text]}>MessagesScreen</Text>
        </View>
    )
}

function ProfileScreen(props) {
    return (
        <View style={[styles.container]}>
            <Text style={[styles.text]}>ProfileScreen</Text>
        </View>
    )
}

function SettingsScreen(props) {
    return (
        <View style={[styles.container]}>
            <Text style={[styles.text]}>SettingsScreen</Text>
        </View>
    )
}

function Home() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={FeedScreen} />
            <Tab.Screen name="Messages" component={MessagesScreen} />
        </Tab.Navigator>
    );
}

function App() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
    );
}

const index = () => {
    return (
        <App />
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