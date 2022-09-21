import { Text, StyleSheet, View, SafeAreaView, FlatList, Alert, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class index extends Component {
    constructor() {
        super()
        this.state = {
            isRefreshing: false,
            selectedID: null,
            list: [
                {
                    id: '1',
                    title: 'First Item',
                },
                {
                    id: '2',
                    title: 'Second Item',
                },
                {
                    id: '3',
                    title: 'Third Item',
                },
                {
                    id: '4',
                    title: 'Four Item',
                },
                {
                    id: '5',
                    title: 'Five Item',
                },
                {
                    id: '6',
                    title: 'Six Item',
                },
                {
                    id: '7',
                    title: 'Seven Item',
                },
                {
                    id: '8',
                    title: 'Eight Item',
                },
                {
                    id: '9',
                    title: 'Nine Item',
                },
                {
                    id: '10',
                    title: 'Ten Item',
                },
                {
                    id: '11',
                    title: '11 Item',
                },
                {
                    id: '12',
                    title: '12 Item',
                },
                {
                    id: '13',
                    title: '13 Item',
                },
                {
                    id: '14',
                    title: '14 Item',
                },
                {
                    id: '15',
                    title: '15 Item',
                },
            ]
        }
    }

    doRefresh = () => {
        this.setState({
            isRefreshing: true
        })

        setTimeout(() => {
            this.setState({
                isRefreshing: false
            })
            Alert.alert('下拉刷新');
        }, 2000);
    }

    renderItem = ({ item, index }) => {
        console.log(item);
        const backgroundColor = item.id === this.state.selectedID ? '#dfb' : '#f9c2ff';
        return (
            <TouchableOpacity
                style={[styles.item, { backgroundColor }]}
                onPress={()=>{
                    this.setState({
                        selectedID: item.id
                    })
                }}
            >
                <Text style={[styles.title]}>{item.title}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <SafeAreaView style={[styles.container]}>
                <FlatList
                    data={this.state.list}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.id}
                    horizontal={false}
                    ItemSeparatorComponent={() => {
                        return <View style={[{ borderBottomWidth: 1, borderBottomColor: 'red' }]}></View>
                    }}
                    ListEmptyComponent={() => {
                        return <Text>空空如也</Text>
                    }}
                    ListHeaderComponent={() => {
                        return <Text style={[{ fontSize: 40, fontWeight: 'bold' }]}>三國演義</Text>
                    }}
                    ListFooterComponent={() => {
                        return <Text style={[{ fontSize: 40, fontWeight: 'bold' }]}>結束自斷</Text>
                    }}
                    refreshing={this.state.isRefreshing}
                    onRefresh={this.doRefresh}
                    // onEndReachedThreshold={0.1}
                    // onEndReached={()=> {
                    //     Alert.alert('到底了')
                    // }}
                    initialScrollIndex={0}
                    initialNumToRender={4}
                    numColumns={1}
                    inverted={false}
                />

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        backgroundColor: '#f9c2ff',
        margin: 16,
        padding: 20
    },
    title: {
        fontSize: 24
    }
})