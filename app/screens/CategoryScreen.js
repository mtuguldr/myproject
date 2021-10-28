import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

function CategoryScreen(props) {
    return (
        <View style={styles.container}>
            <Text>Category!</Text>
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

export default CategoryScreen
