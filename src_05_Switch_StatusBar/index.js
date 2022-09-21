import { Text, StyleSheet, View, SafeAreaView, StatusBar, Switch } from 'react-native'
import React, { Component } from 'react'

export default class index extends Component {
    constructor() {
        super()
        this.state = {
            hiddenStatusBar: false
        }
    }

    toggleStatusBar = ()=> {
        this.setState({
            hiddenStatusBar: !this.state.hiddenStatusBar
        })
    }

    render() {
        return (
            <SafeAreaView style={[styles.container]}>
                <StatusBar
                    hidden={this.state.hiddenStatusBar}
                    backgroundColor={'red'}
                    barStyle='dark-content'
                />
                <Switch
                    trackColor={{false: '#999', true: '#666'}}
                    thumbColor={this.state.hiddenStatusBar ? 'blue' : 'green'}
                    value={this.state.hiddenStatusBar}
                    onValueChange={this.toggleStatusBar}
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})