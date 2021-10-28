import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import ListItem from '../components/ListItem'
import TabNavigator from './TabNavigator'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { hp } from '../config/const'
import colors from '../config/colors'
import { DrawerActions } from '@react-navigation/routers'

const Drawer = createDrawerNavigator()

function OrdersScreen() {
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
            </View>
            {/* <TabNavigator /> */}
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

function Profile() {
    return (
        <ListItem
            title='User'
            subTitle='user@mail.com'
            image={require('../assets/avatar.png')}
            onPress={() => {
                navigation.navigate('ProfileEdit')
            }}
        />
    )
}

const CustomDrawer = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <Profile />
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </View>
    )
}

const CustomHeader = (props) => {
    return (
        <View>
            <Text>Title</Text>
            <FontAwesome name='user-o' size={30} />
        </View>
    )
}

const HeaderButton = ({ props, navigation }) => {
    return (
        <View style={{ flexDirection: 'row' }} {...props}>
            <FontAwesome
                name='shopping-cart'
                color={colors.primary}
                size={25}
                // onPress={() => {navigation.DrawerActions.openDrawer()}}
                {...props}
            />
            <FontAwesome
                name='shopping-cart'
                color={colors.primary}
                size={25}
                onPress={() => {
                    navigation.DrawerActions.openDrawer()
                }}
                {...props}
            />
        </View>
    )
}

function DrawerNavigator({ navigation }) {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerTitleStyle: {
                    // color: colors.primary,
                },
                // header:(props) => <Image src={require('../assets/avatar.jpeg') />,
                headerLeft: (props) => <HeaderButton {...props} />,
                headerRight: (props) => <HeaderButton {...props} />,
            }}
            drawerContent={(props) => (
                <CustomDrawer navigation={navigation} {...props} />
            )}
        >
            <Drawer.Screen name='Orders' component={OrdersScreen} />
            <Drawer.Screen name='WishList' component={WishListScreen} />
            <Drawer.Screen name='Payment' component={PaymentScreen} />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {},
})

export default DrawerNavigator
