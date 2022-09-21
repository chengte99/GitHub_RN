import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, Alert } from "react-native";

const DATA = [
    {
        title: "Main dishes",
        data: ["Pizza", "Burger", "Risotto"]
    },
    {
        title: "Sides",
        data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    },
    {
        title: "Drinks",
        data: ["Water", "Coke", "Beer"]
    },
    {
        title: "Desserts",
        data: ["Cheese Cake", "Ice Cream"]
    }
];

const Item = ({ title }) => (
    <View style={[styles.item]}>
        <Text style={[styles.title]}>{title}</Text>
    </View>
)

class App extends Component {
    constructor(){
        super()
        this.state={
            isRefreshing: false
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

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <SectionList
                    sections={DATA}
                    renderItem={({ item }) => (
                        <Item title={item} />
                    )}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={[styles.header]}>{title}</Text>
                    )}
                    keyExtractor={(item, index) => item + index}
                    ItemSeparatorComponent={()=>{
                        return <View style={[{borderBottomWidth: 1, borderBottomColor: 'red'}]}></View>
                    }}
                    ListEmptyComponent={()=> {
                        return <Text>空空如也</Text>
                    }}
                    ListHeaderComponent={()=>{
                        return <Text>三國演義</Text>
                    }}
                    ListFooterComponent={()=>{
                        return <Text>結束自斷</Text>
                    }}
                    refreshing={this.state.isRefreshing}
                    onRefresh={this.doRefresh}
                    onEndReachedThreshold={0.1}
                    onEndReached={()=> {
                        Alert.alert('到底了');
                    }}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16
    },
    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8
    },
    header: {
        fontSize: 32,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 24
    }
});

export default App;