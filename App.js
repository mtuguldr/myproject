import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native'
import { TextInput } from './app/components'
import { Icon } from './app/components/Icon'

import { hp, wp } from './app/config/const'
import MainNavigator from './app/navigation/MainStackNavigator'

import defaultStyles from './app/config/styles'
import NewProductButton from './app/components/NewProductButton'

function App() {
    return (
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
        // <View
        //     style={{
        //         flex: 1,
        //         backgroundColor: 'gray',
        //         justifyContent: 'center',
        //         alignItems: 'center',
        //     }}
        // >
        //     <NewProductButton />
        // </View>
    )
}

export default App
