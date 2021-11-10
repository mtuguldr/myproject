import * as React from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import CategoryScreen from '../screens/CategoryScreen'
import ProfileScreen from '../screens/profile/ProfileScreen'
import defaultStyles from '../config/styles'
import { Icon } from '../components/Icon'
import AddProductScreen from '../screens/AddProductScreen'
import NewProductButton from '../components/NewProductButton'

const Tab = createBottomTabNavigator()
function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: defaultStyles.colors.primary,
                tabBarHideOnKeyboard: true,

                // tabBarActiveBackgroundColor: defaultStyles.colors.lightest,
                // tabBarInactiveTintColor: defaultStyles.colors.white,
                // tabBarInactiveBackgroundColor: defaultStyles.colors.lightest,
            }}
        >
            <Tab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Icon
                            iconFamily='IO'
                            name='home-outline'
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name='Search'
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Icon
                            iconFamily='IO'
                            name='search-outline'
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name='AddProduct'
                component={AddProductScreen}
                options={({ navigation }) => ({
                    tabBarButton: () => (
                        <NewProductButton
                            onPress={() => navigation.navigate('AddProduct')}
                        />
                    ),
                })}
            />
            <Tab.Screen
                name='Category'
                component={CategoryScreen}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Icon
                            iconFamily='IO'
                            name='apps-outline'
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
                        <Icon
                            iconFamily='IO'
                            name='person-outline'
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator
