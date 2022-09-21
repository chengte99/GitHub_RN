import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
    Button,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Home() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home</Text>
        </View>
    )
}

function Settings({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Settings</Text>
            <Button
                title='go to Root'
                onPress={()=>{
                    navigation.navigate('Root');
                }}
            />
            <Button
                title='go to Root Profile'
                onPress={()=>{
                    navigation.navigate('Root', {screen: 'Profile'});
                }}
            />
        </View>
    )
}

function Profile() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Profile</Text>
        </View>
    )
}

function Root() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name='Home'
                component={Home}
            />
            <Drawer.Screen
                name='Profile'
                component={Profile}
            />
            <Stack.Screen
                name='Settings'
                component={Settings}
            />
        </Drawer.Navigator>
    )
}

export default MyApp2 => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Feed'
                    component={Settings}
                />
                <Stack.Screen
                    name='Root'
                    component={Root}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
});




