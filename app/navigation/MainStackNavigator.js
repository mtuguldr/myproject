import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import DrawerNavigator from './DrawerNavigator'
import ProfileEditScreen from '../screens/profileStack/ProfileEditScreen'
import { Icon } from '../components/Icon'
import Header from '../components/Header'
import defaultStyles from '../config/styles'
import { ft, wp } from '../config/const'
import AuthNavigator from './AuthNavigator'
import { getFocusedRouteNameFromRoute } from '@react-navigation/core'

const Stack = createStackNavigator()

const ICON_SIZE = wp(6)
const ICON_COLOR = defaultStyles.colors.primary

function getHeaderTitle(route) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Login'
    console.log(route)
    switch (routeName) {
        case 'Login':
            return 'Login'
        case 'Register':
            return 'Register'
        case 'ForgotPassword':
            return 'Password'
        case 'ProfileEdit':
            return 'Edit'
    }
}

const mainStackHeader = (props) => {
    return (
        <Header
            left={
                <Icon
                    iconFamily='AD'
                    color={ICON_COLOR}
                    name='back'
                    size={ICON_SIZE}
                    style={{
                        paddingHorizontal: 12,
                    }}
                    onPress={() => {
                        props.navigation.pop()
                    }}
                />
            }
            center={
                <Text style={[defaultStyles.titleNav]}>
                    {getHeaderTitle(props.route)}
                </Text>
            }
            {...props}
        />
    )
}

function MainNavigator() {
    return (
        <Stack.Navigator
            screenOptions={() => ({
                header: (props) => mainStackHeader(props),
            })}
        >
            <Stack.Screen
                name='MainDrawerNav'
                component={DrawerNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen name='Orders' component={OrdersScreen} />
            <Stack.Screen name='Wishlist' component={WishListScreen} />
            <Stack.Screen name='Payment' component={PaymentScreen} />
            <Stack.Screen name='ProfileEdit' component={ProfileEditScreen} />
            <Stack.Screen name='AuthNav' component={AuthNavigator} />
        </Stack.Navigator>
    )
}

function OrdersScreen() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text>Orders!</Text>
        </View>
    )
}

function WishListScreen() {
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <Text>WishList!</Text>
        </View>
    )
}

function PaymentScreen() {
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <Text>Payment!</Text>
        </View>
    )
}

export default MainNavigator
