import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Button } from '../components'
import LikeButton from '../components/LikeButton'
import { ft, hp, wp } from '../config/const'

import defaultStyles from '../config/styles'

function GridDetailsScreen({ route }) {
    const listing = route.params

    return (
        <View>
            <Image
                style={styles.image}
                source={listing.image}
                resizeMode='cover'
            />
            <View style={styles.detailsContainer}>
                <Text
                    style={[
                        defaultStyles.text,
                        defaultStyles.medium,
                        { fontWeight: 'normal' },
                    ]}
                >
                    {listing.title}
                </Text>
                <Text
                    style={[
                        defaultStyles.text,
                        { fontSize: ft(16), fontWeight: 'bold', marginTop: 20 },
                    ]}
                >
                    {'$' + listing.price}
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginVertical: 20,
                    }}
                >
                    <Button
                        title='Add to bag'
                        filled
                        borderTextColor={defaultStyles.colors.white}
                        backgroundColor={defaultStyles.colors.success}
                        style={{ width: '80%' }}
                    />
                    <LikeButton size={30} />
                    {/* <Button
                        title='Add to bag'
                        filled
                        borderTextColor={defaultStyles.colors.white}
                        backgroundColor={defaultStyles.colors.success}
                    /> */}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    detailsContainer: {
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    image: {
        height: hp(50),
        width: '100%',
    },
    price: {
        borderWidth: 1,
        color: defaultStyles.colors.medium,
        fontSize: ft(14),
        fontWeight: 'bold',
        marginVertical: 10,
    },
    // userContainer: {
    //     marginVertical: 40,
    // },
})

export default GridDetailsScreen
