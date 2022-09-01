import { StackActions } from '@react-navigation/native';
import React from 'react'

export default class NavigatorUtil {
    /**
     * 
     * @param {*} params 
     * @param {*} page 
     */
    static goPage(params, page) {
        const navigation = NavigatorUtil.navigation || (params || {}).navigation;
        if (!navigation) {
            console.log('NavigationUtil.navigation can not be null');
            return;
        }
        navigation.navigate(page, {
            ...params,
            navigation: undefined
        })
    }

    /**
     * 
     * @param {*} navigation 
     */
    static goBack(navigation) {
        navigation.goBack();
    }

    /**
     * 
     * @param {*} params 
     */
    static resetToHome(params) {
        const { navigation } = params;
        navigation.dispatch(StackActions.replace('HomePage', {}));
    }

    static login(params = {}) {
        const { navigation } = params;
        if(!navigation) {
            navigation = NavigatorUtil.navigation;
        }
        navigation.dispatch(StackActions.replace('LoginPage', {}));
    }

    static register(params = {}) {
        const { navigation } = params;
        if(!navigation) {
            navigation = NavigatorUtil.navigation;
        }
        navigation.dispatch(StackActions.replace('RegisterPage', {}));
    }
};
