import React, { useState } from 'react'
import { View, Text, StyleSheet, Switch } from 'react-native'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from '@react-navigation/drawer'
import { DrawerActions } from '@react-navigation/routers'
import { getFocusedRouteNameFromRoute } from '@react-navigation/core'

import { ft, hp, wp } from '../config/const'
import { Icon } from '../components/Icon'
import Header from '../components/Header'
import ListItem from '../components/ListItem'
import TabNavigator from './TabNavigator'
import colors from '../config/colors'

const Drawer = createDrawerNavigator()

const Seperator = () => {
    return (
        <View
            style={{
                width: '100%',
                borderBottomColor: '#dcdcdc',
                borderBottomWidth: 1,
                left: 75,
            }}
        />
    )
}

const DrawerContent = (props) => {
    const [darkMode, setDarkMode] = useState(false)
    return (
        <View style={{ flex: 1, backgroundColor: '#dcdcdc' }}>
            <DrawerContentScrollView {...props}>
                <View style={{ backgroundColor: 'red' }}>
                    <ListItem
                        title='User'
                        image={require('../assets/avatar.png')}
                        onPress={() => {
                            props.navigation.navigate('Profile')
                        }}
                    />
                </View>
                <View
                    style={{ marginVertical: hp(1), backgroundColor: 'white' }}
                >
                    <DrawerItem
                        label='HOME'
                        icon={({ focused, color, size }) => (
                            <Icon
                                iconFamily='AD'
                                color={color}
                                size={size}
                                name='home'
                            />
                        )}
                        // focused={
                        //     props.state.index ===
                        //     props.state.routes.findIndex((e) => e.name === 'TabNav')
                        // }
                        onPress={() => {
                            console.log(`props.state.index`, props.state.index)
                            console.log(
                                `props.state.routes`,
                                props.state.routes
                            )
                            props.navigation.navigate('Home')
                        }}
                    />
                    <Seperator />
                    <DrawerItem
                        label='ORDERS'
                        icon={({ focused, color, size }) => (
                            <Icon
                                iconFamily='AD'
                                color={color}
                                size={size}
                                name='shoppingcart'
                            />
                        )}
                        onPress={() => props.navigation.navigate('Orders')}
                    />
                    <Seperator />
                    <DrawerItem
                        label='WISHLIST'
                        icon={({ focused, color, size }) => (
                            <Icon
                                iconFamily='AD'
                                color={color}
                                size={size}
                                name='hearto'
                            />
                        )}
                        onPress={() => props.navigation.navigate('Wishlist')}
                    />
                    <Seperator />
                    <DrawerItem
                        label='PAYMENT'
                        labelStyle={{ borderWidth: 1 }}
                        style={{ borderWidth: 1 }}
                        icon={({ focused, color, size }) => {
                            return (
                                <Icon
                                    style={{ borderWidth: 1 }}
                                    iconFamily='AD'
                                    color={color}
                                    size={size}
                                    name='creditcard'
                                />
                            )
                        }}
                        onPress={() => props.navigation.navigate('Payment')}
                    />
                </View>
                <View
                    style={{ marginVertical: hp(1), backgroundColor: 'white' }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderWidth: 1,
                            marginHorizontal: 10,
                            borderRadius: 5,
                        }}
                    >
                        <Icon
                            color='black'
                            style={{ borderWidth: 1 }}
                            iconFamily='AD'
                            name='eyeo'
                            size={24}
                        />
                        <Text
                            style={{
                                marginHorizontal: 18,
                                borderWidth: 1,
                                color: 'black',
                            }}
                        >
                            DARK MODE
                        </Text>

                        <Switch
                            value={darkMode}
                            onChange={() => {
                                setDarkMode(!darkMode)
                            }}
                        />
                    </View>
                </View>
            </DrawerContentScrollView>
        </View>
    )
}

function getHeaderTitle(route) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home'

    switch (routeName) {
        case 'Home':
            return 'Home'
        case 'Search':
            return 'Search'
        case 'Category':
            return 'Category'
        case 'Profile':
            return 'Profile'
    }
}

function DrawerNavigator({ navigation }) {
    return (
        <Drawer.Navigator
            screenOptions={() => ({
                header: ({ route }) => (
                    <Header
                        left={
                            <Icon
                                iconFamily='AD'
                                color={colors.primary}
                                name='bars'
                                size={wp(6)}
                                style={{
                                    paddingHorizontal: 12,
                                }}
                                onPress={() => {
                                    navigation.dispatch(
                                        DrawerActions.openDrawer()
                                    )
                                }}
                            />
                        }
                        center={
                            <Text
                                style={{
                                    color: colors.black,
                                    fontSize: ft(14),
                                    fontWeight: 'bold',
                                }}
                            >
                                {getHeaderTitle(route)}
                            </Text>
                        }
                        right={
                            <View style={{ flexDirection: 'row' }}>
                                <Icon
                                    iconFamily='AD'
                                    color={colors.primary}
                                    name='hearto'
                                    size={wp(6)}
                                    style={{
                                        paddingHorizontal: 12,
                                    }}
                                    onPress={() => {
                                        navigation.navigate('Wishlist')
                                    }}
                                />
                                <Icon
                                    iconFamily='AD'
                                    color={colors.primary}
                                    name='shoppingcart'
                                    size={wp(6)}
                                    style={{
                                        paddingHorizontal: 12,
                                    }}
                                    onPress={() => {
                                        navigation.navigate('Orders')
                                    }}
                                />
                            </View>
                        }
                    />
                ),
            })}
            drawerContent={(props) => <DrawerContent {...props} />}
        >
            <Drawer.Screen name='TabNav' component={TabNavigator} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator
