import { Text, StyleSheet, View, ScrollView, TouchableOpacity, Dimensions, Alert, Image, FlatList } from 'react-native'
import React, { Component } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Swiper from 'react-native-swiper'
import Geolocation from '@react-native-community/geolocation'
import { getCityInfo, getThreeDays, getWeatherInfo } from '../../utils/api'
import LinearGradient from 'react-native-linear-gradient'

export default class HomeScreen extends Component {
    constructor() {
        super();
        this.state = {
            city: {},
            indices: {},
            threeDays: []
        }
    }

    componentDidMount() {
        // Geolocation.getCurrentPosition((info) => {
        //     console.log(info);
        //     //成功後調用天氣接口

        // }, (err) => {
        //     console.log(err);
        // })

        const coords = {
            longitude: 112.333,
            latitude: 39.444
        }
        getCityInfo(coords).then((res) => {
            // console.log(res[0].country);
            this.setState({
                city: res[0]
            })
        }).catch((err) => {
            console.log(err);
        })

        getWeatherInfo(coords).then((res) => {
            // console.log(res);
            this.setState({
                indices: res
            })
        }).catch(err => {
            console.log(err);
        })

        getThreeDays(coords).then((res) => {
            console.log(res);
            this.setState({
                threeDays: res
            })
        }).catch(err => {
            console.log(err);
        })
    }

    indicesItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                key={'index' + item.type}
                onPress={() => {
                    Alert.alert(item.type)
                }}
            >
                <View style={[styles.indices]}>
                    <Text style={[styles.indicesText]}> {item.name} </Text>
                    <Text style={[styles.indicesText]}> {item.category} </Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={[{ flex: 1 }]}>
                <ScrollView>
                    <View style={[styles.container]}>
                        <TouchableOpacity onPress={() => {
                            Alert.alert('我是掃一掃')
                        }}>
                            <View style={[styles.itemBase]}>
                                <Ionicons name='scan-outline' size={40} color={'white'} />
                                <Text style={[styles.fontBase]}>掃一掃</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={[styles.itemBase]}>
                                <Ionicons name='qr-code-outline' size={40} color={'white'} />
                                <Text style={[styles.fontBase]}>付款碼</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={[styles.itemBase]}>
                                <Ionicons name='trail-sign-outline' size={40} color={'white'} />
                                <Text style={[styles.fontBase]}>出行</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={[styles.itemBase]}>
                                <Ionicons name='card-outline' size={40} color={'white'} />
                                <Text style={[styles.fontBase]}>卡包</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <Swiper
                        style={[styles.wrapper]}
                        autoplay={true}
                    >
                        <Image style={[styles.slideImage]} source={require("../../images/1.jpg")} />
                        <Image style={[styles.slideImage]} source={require("../../images/2.jpg")} />
                        <Image style={[styles.slideImage]} source={require("../../images/3.jpg")} />
                        <Image style={[styles.slideImage]} source={require("../../images/4.jpg")} />
                    </Swiper>

                    <View style={[styles.city]}>
                        <Text style={[styles.cityText]}> {this.state.city.country} {this.state.city.adm1} {this.state.city.adm2} </Text>
                    </View>

                    <View style={[styles.weather]}>
                        <FlatList
                            data={this.state.indices}
                            renderItem={this.indicesItem}
                            keyExtractor={(item, index) => item.type}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>

                    <View style={[styles.dailyContainer]}>
                        {this.state.threeDays.map((item, index) => {
                            return (
                                <LinearGradient
                                    colors={['#ddd', '#333']}
                                    style={[styles.dailyItem]}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    key={'weather' + index}
                                >
                                    <Text style={[styles.dailyItemTitle]}>{item.fxDate}</Text>
                                    <View style={[styles.dailyItemContent]}>
                                        <View style={[{ flexDirection: 'row' }]}>
                                            <Text>{item.textDay}</Text>
                                            <Text>{item.tempMax}˚</Text>
                                        </View>
                                        <View style={[{ flexDirection: 'row' }]}>
                                            <Text>{item.tempMin}˚</Text>
                                            <Text>{item.textNight}</Text>
                                        </View>
                                    </View>

                                </LinearGradient>
                            )
                        })}
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    itemBase: {
        width: Dimensions.get('window').width / 4,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00b38a'
    },
    fontBase: {
        color: '#fff',
        fontSize: 16
    },
    wrapper: {
        height: 200
    },
    slideImage: {
        height: 200,
        width: Dimensions.get('window').width
    },
    city: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cityText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    weather: {
        flex: 1,
        flexDirection: 'row',
    },
    indices: {
        backgroundColor: '#deb',
        height: 80,
        width: Dimensions.get('window').width / 3 - 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 10,
        marginRight: 10
    },
    indicesText: {
        fontSize: 15,
        color: '#00b38a'
    },
    dailyContainer: {
        flex: 1,
        justifyContent: 'space-between',
        marginHorizontal: 10
    },
    dailyItem: {
        borderRadius: 20,
        width: Dimensions.get('window').width - 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10
    },
    dailyItemTitle: {
        color: '#fff',
        fontSize: 18,
        marginTop: 10
    },
    dailyItemImage: {
        width: 50,
        height: 50
    },
    dailyItemContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: Dimensions.get('window').width - 40,
        alignItems: 'center',
        marginBottom: 10
    }
})