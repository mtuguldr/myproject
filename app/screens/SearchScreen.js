import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

function SearchScreen(props) {
    return (
        <View style={styles.container}>
            <Text>Search!</Text>
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

export default SearchScreen
