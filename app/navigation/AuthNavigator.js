import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Text } from 'react-native'
import Dashboard from '../screens/Dashboard'
import {
    ForgotPasswordScreen,
    LoginScreen,
    RegisterScreen,
    StartScreen,
} from '../screens/Authentication'

const Stack = createStackNavigator()

const AuthNavigator = () => {
    const [isLoggedIn, setLoggedIn] = React.useState(false)

    React.useEffect(() => {
        checkState()
    }, [])

    const checkState = async () => {
        // AsyncStorage.clear()
        try {
            let result = await AsyncStorage.getItem('users')
            if (result === null) {
                setLoggedIn(false)
                console.log('setload')

                return
            }

            let users = JSON.parse(result)
            console.log(`users`, users)
            for (let i = 0; i < users.length; i++) {
                if (users[i].loggedIn === true) {
                    setLoggedIn(true)
                    console.log('setload')
                    return
                }
            }
            console.log('setload')
            setLoggedIn(false)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Start' component={StartScreen} />
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Register' component={RegisterScreen} />
            <Stack.Screen
                name='ForgotPassword'
                component={ForgotPasswordScreen}
            />
            <Stack.Screen name='Dashboard' component={Dashboard} />
        </Stack.Navigator>
    )
}

export default AuthNavigator
