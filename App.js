import React from 'react'
import { View, StyleSheet } from 'react-native'
import ModalInput from './app/components/ModalInput'
import { LoginScreen } from './app/screens/auth'
import CategoryScreen from './app/screens/CategoryScreen'

function App() {
    return (
        <View style={styles.container}>
            <CategoryScreen />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'white' },
})

export default App
