import React from 'react'
import { View, Text } from 'react-native'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer'

import { getHeaderTitle } from '@react-navigation/elements'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import ListItem from '../components/ListItem'
import HomeScreen from '../screens/HomeScreen'
import ProfileStack from '../screens/ProfileStack/ProfileStack'
import SearchScreen from '../screens/SearchScreen'
import CategoryScreen from '../screens/CategoryScreen'
import CustomHeader from '../components/CustomHeader'
import { Button } from '../components'
import { DrawerActions } from '@react-navigation/routers'
import TabNavigator from './TabNavigator'

const Drawer = createDrawerNavigator()

function OrdersScreen({ navigation }) {
    return (
        <>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text>Orders!</Text>
                <Button
                    onPress={() => {
                        navigation.dispatch(DrawerActions.toggleDrawer())
                    }}
                    title='drawer'
                />
            </View>
        </>
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

const CustomDrawer = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <ListItem
                    title='User'
                    image={require('../assets/avatar.png')}
                    onPress={() => {
                        props.navigation.navigate('ProfileEdit')
                    }}
                />
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </View>
    )
}

function DrawerNavigator() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: 'black',
                },
                headerTitleContainerStyle: {
                    backgroundColor: 'blue',
                },
                headerBackgroundContainerStyle: {
                    color: 'red',
                },
                headerStyle: {
                    backgroundColor: 'red',
                },
                headerTintColor: 'white',

                // title: 'AppName',
                // header: ({ navigation, route, options }) => {
                //     const title = getHeaderTitle(options, route.name)

                //     return (
                //         <CustomHeader
                //             title='wwater'
                //             titleStyle={options.headerTitleStyle}
                //             headerLeft={
                //                 <FontAwesome
                //                     name='bars'
                //                     size={20}
                //                     color='black'
                //                     onPress={() => {
                //                         navigation.dispatch(
                //                             DrawerActions.toggleDrawer()
                //                         )
                //                     }}
                //                 />
                //             }
                //             headerRight={
                //                 <FontAwesome
                //                     color='black'
                //                     name='shopping-cart'
                //                     size={20}
                //                 />
                //             }
                //         />
                //     )
                // },
            }}
        >
            <Drawer.Screen
                name='TabNav'
                component={TabNavigator}
                options={
                    {
                        // drawerLabel: () => null,
                        // title: null,
                        // drawerIcon: () => null,
                    }
                }
            />
            <Drawer.Screen name='Orders' component={OrdersScreen} />
            <Drawer.Screen name='WishList' component={WishListScreen} />
            <Drawer.Screen name='Payment' component={PaymentScreen} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator
