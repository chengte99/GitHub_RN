import { Text, StyleSheet, View, FlatList, TouchableOpacity, Alert, Image, Dimensions } from 'react-native'
import React, { Component } from 'react'
import Loading from '../../components/Loading'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { getNewsList, getNewsChannelList } from '../../utils/api'

export default class NewsScreen extends Component {
    constructor() {
        super()
        this.state = {
            newsID: 46,
            newslist: [],
            channellist: [
                {
                    "colid": 46,
                    "name": "新浪宠物",
                    "nameid": "petnews",
                    "jianjie": "宠物及相关产业新闻资讯"
                },
                {
                    "colid": 45,
                    "name": "电竞资讯",
                    "nameid": "esports",
                    "jianjie": "电子竞技新闻资讯接口"
                },
                {
                    "colid": 43,
                    "name": "女性新闻",
                    "nameid": "woman",
                    "jianjie": "新浪女性新闻频道"
                },
                {
                    "colid": 42,
                    "name": "垃圾分类新闻",
                    "nameid": "lajifenleinews",
                    "jianjie": "垃圾分类新闻资讯接口"
                },
                {
                    "colid": 41,
                    "name": "环保资讯",
                    "nameid": "huanbao",
                    "jianjie": "人民网环保新闻资讯"
                },
                {
                    "colid": 40,
                    "name": "影视资讯",
                    "nameid": "film",
                    "jianjie": "影视资讯新闻接口"
                },
            ]
        }
    }

    componentDidMount() {
        // this.getChannelList();
        this.getList();
    }

    getChannelList = () => {
        getNewsChannelList().then(res => {
            // console.log(res[0]);
            this.setState({
                channellist: res,
                newsID: res[0].colid
            }, () => {
                this.getList();
            })
        }).catch(err => {
            console.log(err);
        })
    }

    getList = () => {
        getNewsList(this.state.newsID).then(res => {
            // console.log(res);
            this.setState({
                newslist: res
            })
        }).catch(err => {
            console.log(err);
        })
    }

    newsItem = ({ item, index }) => {
        // if(item.pic2 && item.pic3) {
        //     return this.newsItemThreeImages({item, index})
        // }else {
        //     return this.newsItemSingleImages({item, index})
        // }

        return this.newsItemSingleImages({ item, index })
    }

    newsItemSingleImages = ({ item, index }) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    this.props.navigation.navigate('Detail', {
                        url: item.url
                    })
                }}
            >
                <View style={[styles.newsItem1Container]}>
                    <View style={[styles.newsItem1Text]}>
                        <Text
                            numberOfLines={2}
                            style={[styles.newsItem1Title]}>
                            {item.title}
                        </Text>
                        <View style={[styles.newsItem1Footer]}>
                            <Text style={[styles.newsItem1Meta]}>
                                {item.ctime}
                            </Text>
                            <Ionicons name={'heart-outline'} size={18} />
                        </View>
                    </View>
                    <Image
                        source={{ uri: item.picUrl }}
                        style={[styles.newsItem1Image]}
                    />
                </View>
            </TouchableOpacity>
        )
    }

    newsItemChannel = ({ item, index }) => {
        let isActive = item.colid == this.state.newsID;
        return (
            <TouchableOpacity
                onPress={() => {
                    this.setState({
                        newsID: item.colid
                    }, () => {
                        this.getList()
                    })
                }}
            >
                <View style={[styles.newsChannel, { backgroundColor: isActive ? '#dfb' : '#fff' }]}>
                    <Text
                        style={[styles.newsChannelText, { color: isActive ? 'red' : '#333' }]}
                    >
                        {item.name}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <>
                {
                    this.state.newslist.length
                        ?
                        <FlatList
                            data={this.state.newslist}
                            renderItem={this.newsItem}
                            keyExtractor={item => item.id}
                            ListHeaderComponent={() => {
                                return (
                                    <FlatList
                                        horizontal={true}
                                        data={this.state.channellist}
                                        renderItem={this.newsItemChannel}
                                        keyExtractor={(item, index) => item + index}
                                    />
                                )
                            }}
                            ListFooterComponent={() => {
                                return (
                                    <Text style={[{ fontSize: 20, textAlign: 'center', marginVertical: 40 }]}>---- 沒有更多了 ----</Text>
                                )
                            }}
                            ItemSeparatorComponent={() => {
                                return (
                                    <View style={[{
                                        borderBottomWidth: 1,
                                        borderBottomColor: '#ccc',
                                        marginVertical: 5
                                    }]}></View>
                                )
                            }}
                        />
                        :
                        <Loading />
                }
            </>
        )
    }
}

const styles = StyleSheet.create({
    newsItem1Container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    newsItem1Text: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: Dimensions.get('window').width * 2 / 3 - 20
    },
    newsItem1Title: {
        paddingHorizontal: 10,
        fontSize: 18,
        width: Dimensions.get('window').width * 2 / 3,
        marginBottom: 20
    },
    newsItem1Footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    newsItem1Meta: {
        fontSize: 13
    },
    newsItem1Image: {
        height: 90,
        width: Dimensions.get('window').width / 3,
        marginVertical: 5,
        marginHorizontal: 10
    },
    newsChannel: {
        height: 46,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    newsChannelText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})