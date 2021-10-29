import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { View, StyleSheet, SafeAreaView, Text } from 'react-native'
import { ft, hp } from '../config/const'

function CustomHeader({
    backgroundStyle,
    headerLeft,
    headerRight,
    title = 'Title',
    titleStyle,
    style,
}) {
    return (
        <SafeAreaView
            style={[
                {
                    alignItems: 'center',
                    backgroundColor: 'white',
                    flexDirection: 'row',
                    height: hp(10),
                },
            ]}
        >
            <View style={[styles.container, {}]}>{headerLeft}</View>
            <View style={[styles.container, { alignItems: 'center' }]}>
                <Text
                    style={[
                        {
                            fontSize: ft(20),
                            color: 'black',
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
