import React, { useState } from 'react'
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { ft, hp } from '../config/const'
import TabNavigator from './TabNavigator'
import colors from '../config/colors'
import DrawerHeader from '../components/drawer/DrawerHeader'
import DrawerItemCustom from '../components/drawer/DrawerItemCustom'
import deviceInfoModule from 'react-native-device-info'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { ListItem, Separator } from '../components'

const Drawer = createDrawerNavigator()

const DrawerHeadLogin = (props) => (
    <View
        style={{
            paddingBottom: 10,
            paddingHorizontal: 10,
        }}
    >
        <Text
            style={{
                color: colors.white,
                fontWeight: 'bold',
                fontSize: ft(16),
            }}
        >
            shoppr
        </Text>
        <Text
            style={{
                color: colors.white,
                fontSize: ft(14),
            }}
        >
            Buy everything you need!
        </Text>
        <TouchableOpacity
            style={{
                marginTop: 15,
                padding: 5,
                borderRadius: 5,
                backgroundColor: colors.white,
                width: 100,
                alignSelf: 'center',
            }}
            onPress={() => {
                props.navigation.navigate('AuthNav')
            }}
        >
            <Text
                style={{
                    textAlign: 'center',
                    color: colors.black,
                    fontSize: ft(14),
                }}
            >
                sign in
            </Text>
        </TouchableOpacity>
    </View>
)

const DrawerHeadProfile = (props) => (
    <ListItem
        title='User'
        image={require('../assets/avatar.png')}
        onPress={() => {
            props.navigation.navigate('Profile')
        }}
    />
)

const drawerItems = [
    { title: 'home', icon: 'home', targetScreen: 'Home' },
    { title: 'my account', icon: 'user', targetScreen: 'Profile' },
    { title: 'orders', icon: 'shoppingcart', targetScreen: 'Orders' },
    { title: 'wishlist', icon: 'hearto', targetScreen: 'Wishlist' },
    { title: 'payment', icon: 'creditcard', targetScreen: 'Payment' },
]

const DrawerContent = (props) => {
    const [darkMode, setDarkMode] = useState(false)
    return (
        <View style={styles.background}>
            <View
                style={{
                    backgroundColor: colors.primary,
                    paddingTop: deviceInfoModule.hasNotch()
                        ? getStatusBarHeight()
                        : 10,
                }}
            >
                <DrawerHeadLogin {...props} />
                {/* <DrawerHeadProfile {...props} /> */}
            </View>
            <View style={styles.container}></View>
            <View style={[styles.container, { paddingVertical: 10 }]}>
                {drawerItems.map((item, index) => {
                    return (
                        <View key={index}>
                            <DrawerItemCustom
                                title={item.title}
                                icon={item.icon}
                                onPress={() =>
                                    props.navigation.navigate(item.targetScreen)
                                }
                            />
                            {index !== drawerItems.length - 1 ? (
                                <Separator />
                            ) : null}
                        </View>
                    )
                })}
            </View>
            <View style={styles.container}>
                <DrawerItemCustom
                    title='DARK MODE'
                    icon='eyeo'
                    switchComponent={
                        <Switch
                            value={darkMode}
                            onChange={() => {
                                setDarkMode(!darkMode)
                            }}
                        />
                    }
                />
            </View>
            <View style={styles.container}>
                <DrawerItemCustom title='LOG OUT' icon='logout' />
            </View>
        </View>
    )
}

function DrawerNavigator({ navigation }) {
    return (
        <Drawer.Navigator
            screenOptions={() => ({
                header: ({ route }) => (
                    <DrawerHeader route={route} navigation={navigation} />
                ),
            })}
            drawerContent={(props) => <DrawerContent {...props} />}
        >
            <Drawer.Screen name='TabNav' component={TabNavigator} />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.screenBg,
    },
    container: {
        marginBottom: hp(1),
        backgroundColor: colors.white,
    },
})

export default DrawerNavigator
