import React from 'react'
import { getFocusedRouteNameFromRoute } from '@react-navigation/core'
import { StyleSheet, Text } from 'react-native'

import { wp } from '../config/const'
import { Icon } from './Icon'
import defaultStyles from '../config/styles'
import Header from './Header'

const ICON_SIZE = wp(6)
const ICON_COLOR = defaultStyles.colors.primary

function getHeaderTitle(route) {
    const routeName = route.name //getFocusedRouteNameFromRoute(route) ?? 'Home'
    // console.log(`routeName`, routeName)
    switch (routeName) {
        case 'ForgotPassword':
            return 'Password'
        case 'ProfileEdit':
            return 'Profile'
        case 'ProductDetails':
            return 'Product'
        default:
            return routeName
    }
}

function HeaderStack(props) {
    return (
        <Header
            left={
                <Icon
                    iconFamily='IO'
                    color={ICON_COLOR}
                    name='arrow-back'
                    size={ICON_SIZE}
                    style={styles.icon}
                    onPress={() => {
                        props.navigation.goBack()
                    }}
                />
            }
            center={
                <Text style={[defaultStyles.text, defaultStyles.medium]}>
                    {getHeaderTitle(props.route)}
                    {/* {props.title} */}
                </Text>
            }
            {...props}
        />
    )
}

const styles = StyleSheet.create({
    icon: {
        paddingHorizontal: 12,
    },
})

export default HeaderStack
