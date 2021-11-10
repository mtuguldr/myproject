import React from 'react'
import { View, StyleSheet, ScrollView, Text } from 'react-native'

import Card from '../components/Card'
import { hp, wp } from '../config/const'
import defaultStyles from '../config/styles'

function GridScreen({ listings, navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>
                {listings ? (
                    listings.map((item, index) => {
                        return (
                            <Card
                                key={index}
                                title={item.title}
                                subTitle={'$' + item.price}
                                image={item.image}
                                style={{ width: '47.5%' }}
                                onPress={() =>
                                    navigation.navigate('ProductDetails', item)
                                }
                            />
                        )
                    })
                ) : (
                    <Text style={[defaultStyles.text, defaultStyles.medium]}>
                        None
                    </Text>
                )}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.white,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: wp(5),
    },
})

export default GridScreen
