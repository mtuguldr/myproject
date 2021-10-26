import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Background from '../components/Background'
import FormInput from '../components/FormInput'

function ProfileEditScreen(props) {
    return (
        <Background>
            <Text>Profile Edit Screen</Text>
            <FormInput placeholder='Name' />
            <FormInput placeholder='Email' />
            <FormInput placeholder='Password' />
            <FormInput placeholder='' />
        </Background>
    )
}

const styles = StyleSheet.create({
    container: {},
})

export default ProfileEditScreen
