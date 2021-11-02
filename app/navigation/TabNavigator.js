import * as React from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import AntDesign from 'react-native-vector-icons/AntDesign'
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import CategoryScreen from '../screens/CategoryScreen'
import ProfileScreen from '../screens/ProfileStack/ProfileScreen'
import colors from '../config/colors'

const Tab = createBottomTabNavigator()
function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.primary,
                // tabBarActiveBackgroundColor: colors.lightest,
                // tabBarInactiveTintColor: colors.white,
                // tabBarInactiveBackgroundColor: colors.lightest,
            }}
        >
            <Tab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <AntDesign name='home' size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name='Search'
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <AntDesign name='search1' size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name='Category'
                component={CategoryScreen}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <AntDesign
                            name='appstore-o'
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name='Profile'
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <AntDesign name='user' size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator
