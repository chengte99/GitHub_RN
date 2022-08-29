
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import HomePage from '../expand/dao/page/HomePage';
import LoginPage from '../expand/dao/page/LoginPage';

const Stack = createNativeStackNavigator();
//除tab頁外其他的頁面
export default function AppNavigators() {
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name='LoginPage'
                component={LoginPage}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='HomePage'
                component={HomePage}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    </NavigationContainer>
};

