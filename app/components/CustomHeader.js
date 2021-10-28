import React from 'react'
import { View, StyleSheet, SafeAreaView, Text } from 'react-native'
import { ft, hp } from '../config/const'

function CustomHeader({
    backgroundStyle,
    headerLeft,
    headerRight,
    title,
    titleStyle,
}) {
    return (
        <SafeAreaView
            style={[
                {
                    backgroundColor: 'white',
                    height: hp(10),
                    backgroundColor: 'skyblue',
                    flexDirection: 'row',
                    alignItems: 'center',
                },
                backgroundStyle,
            ]}
        >
            <View style={[styles.container, {}]}>{headerLeft}</View>
            {/* <View>{headerLeft}</View> */}
            <View style={[styles.container, { alignItems: 'center' }]}>
                <Text
                    style={[
                        {
                            // alignSelf: 'center',
                            fontSize: ft(20),
                            color: 'white',
                        },
                        titleStyle,
                    ]}
                >
                    {title}
                </Text>
            </View>
            <View style={[styles.container, { alignItems: 'flex-end' }]}>
                {headerRight}
            </View>
            {/* {headerRight} */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
})

export default CustomHeader
