import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import AuthNavigator from './AuthNavigator'
import DrawerNavigator from './DrawerNavigator'
import ProfileEditScreen from '../screens/profile/ProfileEditScreen'
import GridDetailsScreen from '../screens/GridDetailsScreen'
import HeaderStack from '../components/HeaderStack'

const Stack = createStackNavigator()

function MainNavigator() {
    return (
        <Stack.Navigator
            screenOptions={() => ({
                header: (props) => <HeaderStack {...props} />,
            })}
        >
            <Stack.Screen
                name='MainDrawerNav'
                component={DrawerNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='AuthNav'
                component={AuthNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen name='Orders' component={OrdersScreen} />
            <Stack.Screen name='Payment' component={PaymentScreen} />
            <Stack.Screen name='ProfileEdit' component={ProfileEditScreen} />
            <Stack.Screen name='Wishlist' component={WishListScreen} />
            <Stack.Screen name='ProductDetails' component={GridDetailsScreen} />
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
