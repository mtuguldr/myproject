import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import DeviceInfo from 'react-native-device-info'

import Background from '../components/Background'
import Button from '../components/Button'
import Logo from '../components/Logo'
import defaultStyles from '../config/styles'
import { ft, hp, wp } from '../config/const'

const MARGIN_HORIZONTAL = wp(5)
const MARGIN_VERTICAL_TALL = hp(6)
const MARGIN_VERTICAL_SHORT = hp(3)

function Dashboard({ navigation }) {
    const [user, setUser] = useState({})

    React.useEffect(() => {
        getUser()
    }, [])

    const getUser = async () => {
        try {
            let users = JSON.parse(await AsyncStorage.getItem('users'))

            for (let i = 0; i < users.length; i++) {
                if (users[i].loggedIn === true) {
                    setUser(users[i])
                }
            }
        } catch (err) {
            console.log(err)
        }
    }

    const onSignoutPress = async () => {
        try {
            let users = JSON.parse(await AsyncStorage.getItem('users'))

            for (let i = 0; i < users.length; i++) {
                if (users[i].loggedIn === true) {
                    users[i].loggedIn = false
                    await AsyncStorage.setItem('users', JSON.stringify(users))

                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Start' }],
                    })
                }
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Background>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Logo style={styles.logo} />
                <Text style={styles.title}>
                    Hello{'\n'}
                    {user.name}
                </Text>
            </View>
            <View style={styles.container}>
                <Button title='Sign out' onPress={onSignoutPress} />
            </View>
        </Background>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginBottom:
            Platform.OS === 'ios'
                ? MARGIN_VERTICAL_TALL
                : MARGIN_VERTICAL_SHORT,
    },
    logo: {
        position: 'absolute',
        top: DeviceInfo.hasNotch()
            ? MARGIN_VERTICAL_TALL
            : MARGIN_VERTICAL_SHORT,
    },
    title: {
        color: defaultStyles.colors.white,
        fontSize: ft(28),
        marginBottom: MARGIN_VERTICAL_SHORT,
    },
})

export default Dashboard
