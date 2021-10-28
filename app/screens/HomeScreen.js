import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

function HomeScreen(props) {
    return (
        <View style={styles.container}>
            <Text>Home!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
})

export default HomeScreen
