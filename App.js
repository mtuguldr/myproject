import React from 'react'
import {
    FlatList,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native'

import { Icon } from './app/components/Icon'
import { wp } from './app/config/const'

const listings = [
    {
        id: 1,
        title: 'Red jacket for sale',
        price: 100,
        image: require('./app/assets/product1.jpg'),
    },
    {
        id: 2,
        title: 'Couch in great condition',
        price: 1000,
        image: require('./app/assets/product2.jpg'),
    },
]

function App() {
    const [liked, setLiked] = React.useState(false)
    return (
        <View style={styles.screen}>
            <ImageBackground
                source={listings[0].image}
                resizeMode='contain'
                style={{
                    height: 1215 / 5,
                    width: 952 / 5,
                    // borderWidth: 1,
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                }}
            >
                <TouchableOpacity
                    style={{
                        height: wp(10),
                        width: wp(10),
                        backgroundColor: '#ffffffcc',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: wp(10) / 2,
                    }}
                    onPress={() => {
                        setLiked(!liked)
                    }}
                >
                    <Icon
                        iconFamily='AD'
                        name={liked ? 'heart' : 'hearto'}
                        size={wp(5)}
                        color='black'
                    />
                </TouchableOpacity>
            </ImageBackground>

            <ImageBackground
                source={listings[1].image}
                resizeMode='contain'
                style={{
                    height: 1215 / 5,
                    width: 952 / 5,
                    // borderWidth: 1,
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                }}
            >
                <TouchableOpacity
                    style={{
                        height: wp(10),
                        width: wp(10),
                        backgroundColor: '#ffffffcc',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: wp(10) / 2,
                    }}
                    onPress={() => {
                        setLiked(!liked)
                    }}
                >
                    <Icon
                        iconFamily='AD'
                        name={liked ? 'heart' : 'hearto'}
                        size={wp(5)}
                        color='black'
                    />
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',
    },
    image: {
        flex: 1,
    },
})

export default App
