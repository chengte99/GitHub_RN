import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import store from './src_29_project/redux/store'
// import Index from './src_03_Dimensions'
// import Index from './src_04_Alert_Button'
// import Index from './src_05_Switch_StatusBar'
// import Index from './src_06_ActivityIndicator'
// import Index from './src_07_Image'
// import Index from './src_08_TextInput'
// import Index from './src_09_Touchable'
// import Index from './src_10_ScrollView'
// import Index from './src_11_SectionList'
// import Index from './src_12_FlatList'
// import Index from './src_13_Animated'
// import Index from './src_14_WebView/WebViewUri'
// import Index from './src_14_WebView/WebViewHtml'
// import Index from './src_15_Picker'
// import Index from './src_16_Swiper'
// import Index from './src_17_AsyncStorage'
// import Index from './src_18_Geolocation'
// import Index from './src_19_Camera'
// import Index from './src_20_ImagePicker'
// import Index from './src_21_Loading'
// import Index from './src_22_StackNavigator'
// import Index from './src_23_BottomTabNavigator'
// import Index from './src_24_DrawerNavigator'
// import Index from './src_25_MaterialTopTabNavigator'
// import Index from './src_26_NestingNavigation'
// import Index from './src_27_PassingParamater'
// import Index from './src_28_API'
import Index from './src_29_project'

export default class AppInit extends Component {
    render() {
        return (
            <Provider store={store}>
                <NavigationContainer>
                    <Index />
                </NavigationContainer>
            </Provider>
        )
    }
}

const styles = StyleSheet.create({})