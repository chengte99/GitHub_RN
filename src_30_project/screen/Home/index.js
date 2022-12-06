import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../../redux/action/Counter'

const HomeScreen = () => {
    const dispatch = useDispatch();
    const num = useSelector((state) => state.counter.num);

    return (
        <View style={[styles.container]}>
            <Button title='-' onPress={() => { dispatch(decrement(1)) }} />
            <Text> {num} </Text>
            <Button title='+' onPress={() => { dispatch(increment(1)) }} />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})