import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { getBoarding } from '../utils/BoardingUtils'
import NavigatorUtil from '../navigator/NavigatorUtil';

export default class WelcomePage extends Component {
    componentDidMount() {
        this.doLunch();
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    async doLunch() {
        const boarding = await getBoarding();
        const { navigation } = this.props;
        this.timer = setTimeout(() => {
            if (boarding) {
                NavigatorUtil.resetToHome({ navigation });
            } else {
                NavigatorUtil.login({ navigation });
            }
        }, 200);
    }

    render() {
        return (
            <View>
                <Text>WelcomePage</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
