import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet } from 'react-native'

import { hp } from './app/config/const'
import MainNavigator from './app/navigation/MainStackNavigator'

function App() {
    return (
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    )
}

export default App
