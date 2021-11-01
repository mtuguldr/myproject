import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import DrawerNavigator from './DrawerNavigator'
import ProfileEditScreen from '../screens/ProfileStack/ProfileEditScreen'
import { Icon } from '../components/Icon'
import Header from '../components/Header'
import colors from '../config/colors'
import { ft, wp } from '../config/const'

const Stack = createStackNavigator()
function MainNavigator() {
    const mainStackHeader = (props) => {
        return (
            <Header
                left={
                    <Icon
                        iconFamily='AD'
                        color={colors.primary}
                        name='back'
                        size={wp(6)}
                        style={{
                            paddingHorizontal: 12,
                        }}
                        onPress={() => {
                            props.navigation.goBack()
                        }}
                    />
                }
                center={
                    <Text
                        style={{
                            fontSize: ft(14),
                            fontWeight: 'bold',
                            color: 'black',
                        }}
                    >
                        {props.route.name}
                    </Text>
                }
                {...props}
            />
        )
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={() => ({
                    header: (props) => mainStackHeader(props),
                })}
            >
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

export default MainNavigator
