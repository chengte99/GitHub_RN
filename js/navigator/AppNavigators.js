import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import HomePage from '../page/HomePage';
import LoginPage from '../page/LoginPage';
import PopularPage from '../page/PopularPage';
import RegisterPage from '../page/RegisterPage';
import WelcomePage from '../page/WelcomePage';


const Stack = createNativeStackNavigator();
export default function AppNavigators() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='WelcomePage'
                    component={WelcomePage}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='LoginPage'
                    component={LoginPage}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='RegisterPage'
                    component={RegisterPage}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='HomePage'
                    component={HomePage}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='PopularPage'
                    component={PopularPage}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

