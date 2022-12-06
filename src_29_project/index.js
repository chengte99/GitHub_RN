import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import Main from './routes'
import { connect } from 'react-redux'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './screen/NoAuth/Login'
import RegisterScreen from './screen/NoAuth/Register'

const mapStateToProps = state => {
  return {
    isLogin: state.User.isLogin
  }
}

const Stack = createNativeStackNavigator()

class index extends Component {
  render() {
    return (
      <>
        {
          this.props.isLogin
            ?
            (
              <Main />
            )
            :
            (
              <Stack.Navigator
                screenOptions={
                  {
                    headerShown: false
                  }
                }
                initialRouteName={'Login'}
              >
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='Register' component={RegisterScreen} />
              </Stack.Navigator>
            )
        }
      </>
    )
  }
}

export default connect(mapStateToProps)(index)

const styles = StyleSheet.create({})