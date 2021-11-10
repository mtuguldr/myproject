import React, { useState } from 'react'
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { ft, hp, wp } from '../config/const'
import TabNavigator from './TabNavigator'
import defaultStyles from '../config/styles'
import HeaderDrawer from '../components/HeaderDrawer'
import DrawerItemCustom from '../components/DrawerItemCustom'
import deviceInfoModule from 'react-native-device-info'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { ListItem, Separator } from '../components'
import { Icon } from '../components/Icon'

const Drawer = createDrawerNavigator()
const ICON_SIZE = wp(7)

const DrawerHeadLogin = (props) => {
    return (
        <View
            style={{
                paddingBottom: 10,
                paddingHorizontal: 10,
            }}
        >
            <Text style={[defaultStyles.text, defaultStyles.medium]}>
                shoppr
            </Text>
            <Text style={[defaultStyles.text, defaultStyles.small]}>
                Buy everything you need!
            </Text>
            <TouchableOpacity
                style={{
                    marginTop: 15,
                    padding: 5,
                    borderRadius: defaultStyles.borderRadius,
                    backgroundColor: defaultStyles.colors.primary,
                    width: 100,
                    alignSelf: 'center',
                }}
                onPress={() => {
                    props.navigation.navigate('AuthNav')
                }}
            >
                <Text
                    style={
                        (defaultStyles.text,
                        defaultStyles.small,
                        {
                            textAlign: 'center',
                            color: defaultStyles.colors.white,
                        })
                    }
                >
                    sign in
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const DrawerHeadProfile = (props) => (
    <ListItem
        title='John Doe'
        image={require('../assets/avatar.jpeg')}
        onPress={() => {
            props.navigation.navigate('Profile')
        }}
    />
)

const drawerItems = [
    { title: 'home', icon: 'home-outline', targetScreen: 'Home' },
    { title: 'my account', icon: 'person-outline', targetScreen: 'Profile' },
    { title: 'orders', icon: 'cart-outline', targetScreen: 'Orders' },
    { title: 'wishlist', icon: 'heart-outline', targetScreen: 'Wishlist' },
    { title: 'payment', icon: 'card-outline', targetScreen: 'Payment' },
]

const DrawerContent = (props) => {
    const [darkMode, setDarkMode] = useState(false)
    return (
        <View style={styles.background}>
            <View
                style={{
                    // backgroundColor: defaultStyles.colors.primary,
                    paddingTop: deviceInfoModule.hasNotch()
                        ? getStatusBarHeight()
                        : 10,
                }}
            >
                <DrawerHeadLogin {...props} />
                {/* <DrawerHeadProfile {...props} /> */}
                <View style={[styles.container, { paddingVertical: 10 }]}>
                    {drawerItems.map((item, index) => {
                        return (
                            <View key={index}>
                                <DrawerItemCustom
                                    title={item.title}
                                    Left={
                                        <Icon
                                            color={defaultStyles.colors.medium}
                                            iconFamily='IO'
                                            name={item.icon}
                                            size={ICON_SIZE}
                                        />
                                    }
                                    onPress={() =>
                                        props.navigation.navigate(
                                            item.targetScreen
                                        )
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
                        Left={
                            <Icon
                                color={defaultStyles.colors.medium}
                                iconFamily='IO'
                                name='moon-outline'
                                size={ICON_SIZE}
                            />
                        }
                        title='dark mode'
                        icon='moon-outline'
                        Right={
                            <Switch
                                value={darkMode}
                                onChange={() => {
                                    setDarkMode(!darkMode)
                                }}
                            />
                        }
                    />
                </View>
            </View>

            <View style={styles.container}>
                <DrawerItemCustom
                    title='log out'
                    Left={
                        <Icon
                            color={defaultStyles.colors.medium}
                            iconFamily='IO'
                            name='log-out-outline'
                            size={ICON_SIZE}
                        />
                    }
                />
            </View>
        </View>
    )
}

function DrawerNavigator({ navigation }) {
    return (
        <Drawer.Navigator
            screenOptions={() => ({
                header: ({ route }) => (
                    <HeaderDrawer route={route} navigation={navigation} />
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
        backgroundColor: defaultStyles.colors.screenBg,
        flex: 1,
        justifyContent: 'space-between',
    },
    container: {
        backgroundColor: defaultStyles.colors.white,
        marginBottom: hp(1.5),
    },
})

export default DrawerNavigator
