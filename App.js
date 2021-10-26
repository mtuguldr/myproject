import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import AuthNavigator from './app/navigation/AuthNavigator'
import TabNavigator from './app/navigation/TabNavigator'

export default function App() {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    )
}
