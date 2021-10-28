import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import CategoryScreen from '../screens/CategoryScreen'
import DrawerNavigator from './DrawerNavigator'
import HomeScreen from '../screens/HomeScreen'
import ProfileEditScreen from '../screens/ProfileEditScreen'
import ProfileScreen from '../screens/ProfileScreen'
import SearchScreen from '../screens/SearchScreen'

const Stack = createStackNavigator()

function ProfileStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Profile' component={ProfileScreen} />
            <Stack.Screen name='Profile Edit' component={ProfileEditScreen} />
        </Stack.Navigator>
    )
}

function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Drawer' component={DrawerNavigator} />
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Search' component={SearchScreen} />
            <Stack.Screen name='Category' component={CategoryScreen} />
            <Stack.Screen name='Profile' component={ProfileStack} />
        </Stack.Navigator>
    )
}

export default StackNavigator
