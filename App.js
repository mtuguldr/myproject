import React from 'react'
import { View, StyleSheet } from 'react-native'
import CategoryScreen from './app/screens/CategoryScreen'

function App() {
    return (
        <View style={styles.container}>
            <CategoryScreen />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1 },
})

export default App
