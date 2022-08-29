/**
 * 全局導航跳轉工具
 */

import { StackActions } from "@react-navigation/native";

export default class NavigationUtil {
    /**
     * 跳至指定頁面
     * @param {*} params 要傳遞的參數
     * @param {*} page 要跳轉的頁面
     */
    static goPage(params, page) {
        const navigation = NavigationUtil.navigation || (params || {}).navigation;
        if (!navigation) {
            console.log('NavigationUtil.navigation can not be null!');
            return;
        }
        navigation.navigate(page, {
            ...params,
            navigation: undefined
        })
    }

    static goBack(navigation) {
        navigation.goBack();
    }

    static resetToHomePage(params) {
        const { navigation } = params;
        navigation.dispatch(StackActions.replace('HomePage', {}));
    }

    static resetToLoginPage(params = {}) {
        if (!navigation) {
            navigation = NavigationUtil.navigation;
        }
        navigation.dispatch(StackActions.replace('LoginPage', {}));
    }
};
