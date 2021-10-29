import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import ProfileEditScreen from './ProfileEditScreen'
import ProfileScreen from './ProfileScreen'

const Stack = createStackNavigator()

function ProfileStack({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Profile' component={ProfileScreen} />
            <Stack.Screen name='ProfileEdit' component={ProfileEditScreen} />
        </Stack.Navigator>
    )
}

export default ProfileStack
