import { Text, StyleSheet, View, SafeAreaView, ScrollView } from 'react-native'
import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <SafeAreaView>
                <ScrollView
                    horizontal={true}
                    backgroundColor='#dfb'
                    showsHorizontalScrollIndicator={false}
                >
                    <Text style={[styles.nav]}>新聞</Text>
                    <Text style={[styles.nav]}>科技</Text>
                    <Text style={[styles.nav]}>娛樂</Text>
                    <Text style={[styles.nav]}>八卦</Text>
                    <Text style={[styles.nav]}>體育</Text>
                    <Text style={[styles.nav]}>財經</Text>
                    <Text style={[styles.nav]}>政治</Text>
                </ScrollView>
                <ScrollView
                    style={[styles.scrollView]}
                    showsVerticalScrollIndicator={true}
                    contentContainerStyle={[
                        {
                            // margin: 30
                        }
                    ]}
                >
                    <Text style={[styles.text]}>One of the principal functions of the Federal Reserve is to supervise and regulate various financial entities. In response t
                        o the events related to COVID-19 or 
                        the coronavirus, the Federal Reserve Boa
                        rd's Supervision and Regulation function ha
                        s issued the following statements, guidance, and r
                        ules to support financial institutions and the economy.Su
                        pervisory ActionsCapital assessment and actions: The Federal R
                        eserve Board on Thursday released the results of its annual bank 
                        tress tests, which showed that large banks continue to have strong c
                        apital levels and could continue lending to households and business
                        es during a severe recession. All 23 large banks tested remained well above their risk-based minimum capital 
                        requirements and as laid out previously by the Board, the additional 
                        restrictions put in place during the COVID event will end. All large 
                        banks will be subject to the normal restrictions of the Board's 
                        stress capital buffer, or SCB, framework. (June 24, 2021)Press 
                        releaseCapital assessment and actions: The Federal Reserve Board 
                        announced that the temporary and additional restrictions on bank 
                        holding company dividends and share repurchases currently in place 
                        will end for most firms after completion of the current round of 
                        stress tests on June 30. Firms with capital levels above those 
                        required by the stress test will no longer be subject to the 
                        additional restrictions as of that date. Firms with capital l
                        evels below those required by the stress test will remain subject t
                        o the restrictions. (March 25, 2021)Press releaseShared nativeOne 
                        of the principal functions of the Federal Reserve is to supervise
                         and regulate various financial entities. In response to the even
                         ts related to COVID-19 or the coronavirus, the Federal Reserve 
                         Board's Supervision and Regulation function has issued the follo
                         wing statements, guidance, and rules to support financial institu
                         tions and the economy.Supervisory Actions
                         o the restrictions. (March 25, 2021)Press releaseShared nativeOne 
                        of the principal functions of the Federal Reserve is to supervise
                         and regulate various financial entities. In response to the even
                         ts related to COVID-19 or the coronavirus, the Federal Reserve 
                         Board's Supervision and Regulation function has issued the follo
                         wing statements, guidance, and rules to support financial institu
                         tions and the economy.Supervisory Actions
                         o the restrictions. (March 25, 2021)Press releaseShared nativeOne 
                        of the principal functions of the Federal Reserve is to supervise
                         and regulate various financial entities. In response to the even
                         ts related to COVID-19 or the coronavirus, the Federal Reserve 
                         Board's Supervision and Regulation function has issued the follo
                         wing statements, guidance, and rules to support financial institu
                         tions and the economy.Supervisory Actions</Text>
                    <View style={[{height: 100}]}></View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    scrollView: {
        backgroundColor: '#ddd',
    },
    text: {
        fontSize: 20
    },
    nav: {
        margin: 10,
        height: 50,
        fontSize: 30,
        borderColor: 'black',
        borderWidth: 1
    }
})