import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import MainNavigator from './app/navigation/MainStackNavigator'
import AuthNavigator from './app/navigation/AuthNavigator'

function App() {
    return (
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    )
}

export default App
