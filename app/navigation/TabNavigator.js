import * as React from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import AntDesign from 'react-native-vector-icons/AntDesign'
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import CategoryScreen from '../screens/CategoryScreen'
import ProfileStack from '../screens/ProfileStack/ProfileStack'

const Tab = createBottomTabNavigator()
function TabNavigator({ navigation }) {
    return (
        <Tab.Navigator>
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
                name='ProfileStack'
                component={ProfileStack}
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
