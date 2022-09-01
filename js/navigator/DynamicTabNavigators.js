
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PopularPage from '../page/PopularPage';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TrendingPage from "../page/TrendingPage";
import FavoritePage from "../page/FavoritePage";
import MyPage from "../page/MyPage";
import React, { Component } from 'react'


const Tab = createBottomTabNavigator();
const TABS = {
    PopularPage: {
        screen: PopularPage,
        navigationOptions: {
            tabBarLabel: '最熱',
            headerShown: false,
            tabBarIcon: ({ focused, color }) => (
                <MaterialIcons
                    name={'whatshot'}
                    size={26}
                    style={{ color: color }}
                />
            )
        }
    },
    TrendingPage: {
        screen: TrendingPage,
        navigationOptions: {
            headerShown: false,
            tabBarLabel: '趨勢',
            tabBarIcon: ({ focused, color }) => (
                <Ionicons
                    name={'trending-up'}
                    size={26}
                    style={{ color: color }}
                />
            )
        }
    },
    FavoritePage: {
        screen: FavoritePage,
        navigationOptions: {
            headerShown: false,
            tabBarLabel: '收藏',
            tabBarIcon: ({ focused, color }) => (
                <MaterialIcons
                    name={'favorite'}
                    size={26}
                    style={{ color: color }}
                />
            )
        }
    },
    MyPage: {
        screen: MyPage,
        navigationOptions: {
            headerShown: false,
            tabBarLabel: '我的',
            tabBarIcon: ({ focused, color }) => (
                <Entypo
                    name={'user'}
                    size={26}
                    style={{ color: color }}
                />
            )
        }
    }
}


export default class DynamicTabNavigators extends Component {
    _tabNavigator() {
        const {PopularPage, TrendingPage, FavoritePage, MyPage} = TABS;
        const tabs = {PopularPage, TrendingPage, FavoritePage, MyPage};
        // PopularPage.navigationOptions.tabBarLabel='很熱1';

        return (
            <Tab.Navigator>
                {Object.entries(tabs).map((item)=> {
                    return(
                        <Tab.Screen
                            key={item[0]}
                            name={item[0]}
                            component={item[1].screen}
                            options={item[1].navigationOptions}
                        />
                    )
                })}
            </Tab.Navigator>
        )
    }

    render() {
        const tabNavi = this._tabNavigator();
        return tabNavi;
    }
}