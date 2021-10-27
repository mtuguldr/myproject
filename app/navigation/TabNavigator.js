import * as React from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import ProfileScreen from '../screens/ProfileScreen'
import AntDesign from 'react-native-vector-icons/AntDesign'
import ProfileEditScreen from '../screens/ProfileEditScreen'
import { createStackNavigator } from '@react-navigation/stack'
import Button from '../components/Button'
import colors from '../config/colors'

function HomeScreen() {
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <Text>Home!</Text>
        </View>
    )
}

function SearchScreen() {
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <Text>Search!</Text>
        </View>
    )
}

function ProfileStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
            <Stack.Screen name='ProfileEdit' component={ProfileEditScreen} />
        </Stack.Navigator>
    )
}

function CategoryScreen({ navigation }) {
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <Text>Category!</Text>
            <Button
                title='Go to Home'
                onPress={() => {
                    navigation.navigate('Home')
                }}
            />
        </View>
    )
}

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

function TabNavigator() {
    return (
        <Tab.Navigator>
            {/* screenOptions={{ headerShown: false }}> */}
            <Tab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <AntDesign name='home' size={size} color={color} />
                    ),
                    // tabBarActiveTintColor: colors.primary,
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
                name='Profile'
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
