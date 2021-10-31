import React from 'react'
import { View, Text, FlatList } from 'react-native'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from '@react-navigation/drawer'

import { getFocusedRouteNameFromRoute } from '@react-navigation/core'
// import CustomHeader from '../components/CustomHeader'
import AntDesign from 'react-native-vector-icons/AntDesign'
import ListItem from '../components/ListItem'
import TabNavigator from './TabNavigator'
import { ListItemSeparator } from '../components'

const Drawer = createDrawerNavigator()

const drawerItems = [
    {
        title: 'Home',
        icon: {
            name: 'home',
        },
        targetScreen: 'Home',
    },
    {
        title: 'Orders',
        icon: {
            name: 'bars',
        },
        targetScreen: 'Orders',
    },

    {
        title: 'Wishlist',
        icon: {
            name: 'staro',
        },
        targetScreen: 'Wishlist',
    },
    {
        title: 'Payment',
        icon: {
            name: 'setting',
        },
        targetScreen: 'Payment',
    },
]

const CustomDrawer = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <ListItem
                    title='User'
                    image={require('../assets/avatar.png')}
                    onPress={() => {
                        props.navigation.navigate('Profile')
                    }}
                />
                <DrawerItem
                    label='Home'
                    icon={({ focused, color, size }) => (
                        <AntDesign color={color} size={size} name='home' />
                    )}
                    focused={
                        props.state.index ===
                        props.state.routes.findIndex((e) => e.name === 'TabNav')
                    }
                    onPress={() => {
                        console.log(`props.state.index`, props.state.index)
                        console.log(`props.state.routes`, props.state.routes)
                        props.navigation.navigate('Home')
                    }}
                />
                <DrawerItem
                    label='Orders1'
                    focused={
                        props.state.index ===
                        props.state.routes.findIndex(
                            (e) => e.name === 'Orders1'
                        )
                    }
                    icon={({ focused, color, size }) => (
                        <AntDesign color={color} size={size} name='bars' />
                    )}
                    onPress={() => props.navigation.navigate('Orders1')}
                />
                <DrawerItem
                    label='Orders'
                    icon={({ focused, color, size }) => (
                        <AntDesign color={color} size={size} name='bars' />
                    )}
                    onPress={() => props.navigation.navigate('Orders')}
                />
                <DrawerItem
                    label='WishList'
                    icon={({ focused, color, size }) => (
                        <AntDesign color={color} size={size} name='hearto' />
                    )}
                    onPress={() => props.navigation.navigate('Wishlist')}
                />
                <DrawerItem
                    label='Payment'
                    icon={({ focused, color, size }) => (
                        <AntDesign
                            color={color}
                            size={size}
                            name='creditcard'
                        />
                    )}
                    onPress={() => props.navigation.navigate('Payment')}
                />
            </DrawerContentScrollView>
        </View>
    )
}

function getHeaderTitle(route) {
    // If the focused route is not found, we need to assume it's the initial screen
    // This can happen during if there hasn't been any navigation inside the screen
    // In our case, it's "Feed" as that's the first screen inside the navigator
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

function DrawerNavigator() {
    return (
        <Drawer.Navigator
            screenOptions={({ route }) => ({
                headerTitle: getHeaderTitle(route),
            })}
            drawerContent={(props) => <CustomDrawer {...props} />}
        >
            <Drawer.Screen name='TabNav' component={TabNavigator} />
            <Drawer.Screen name='Orders1' component={OrdersScreen1} />
        </Drawer.Navigator>
    )
}

function OrdersScreen1() {
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

export default DrawerNavigator
