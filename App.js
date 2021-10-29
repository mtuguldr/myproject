import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigator from './app/navigation/DrawerNavigator'
import TabNavigator from './app/navigation/TabNavigator'

export default function App() {
    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    )
}
