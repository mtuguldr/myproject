import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigator from './app/navigation/DrawerNavigator'
import { createStackNavigator } from '@react-navigation/stack'

import { Text, View } from 'react-native'
import ProfileEditScreen from './app/screens/ProfileStack/ProfileEditScreen'

const Stack = createStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='MainDrawer'
                    component={DrawerNavigator}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name='Orders' component={OrdersScreen} />
                <Stack.Screen name='Wishlist' component={WishListScreen} />
                <Stack.Screen name='Payment' component={PaymentScreen} />
                <Stack.Screen
                    name='ProfileEdit'
                    component={ProfileEditScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
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
