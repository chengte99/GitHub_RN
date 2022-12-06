import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { increment, decrement, selectNum } from '../../redux/reducers/counter'
import { useDispatch, useSelector } from 'react-redux'

const HomeScreen = () => {
    const num = useSelector(selectNum);
    const dispatch = useDispatch();

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