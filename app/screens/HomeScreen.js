import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import ProductListScreen from '../screens/ProductListScreen'

const listings = [
    {
        id: 1,
        title: 'Brogue shoes in tan leather with faux crepe sole',
        price: 100,
        image: require('../assets/product1.jpg'),
    },
    {
        id: 2,
        title: 'Selected Homme nubuk chelsea boots with chunky sole in black',
        price: 300,
        image: require('../assets/product2.jpg'),
    },
    {
        id: 3,
        title: 'Nike React Vision Summer of Sport trainers in white',
        price: 200,
        image: require('../assets/product3.jpg'),
    },

    {
        id: 4,
        title: 'Base London monte lace up boots in pebble brown leather',
        price: 250,
        image: require('../assets/product4.jpg'),
    },
    {
        id: 5,
        title: 'Base London monte lace up boots in pebble brown leather',
        price: 200,
        image: require('../assets/product5.jpg'),
    },
    {
        id: 6,
        title: 'Base London monte lace up boots in pebble brown leather',
        price: 150,
        image: require('../assets/product1.jpg'),
    },
    {
        id: 7,
        title: 'Base London monte lace up boots in pebble brown leather',
        price: 350,
        image: require('../assets/product2.jpg'),
    },
    {
        id: 8,
        title: 'Base London monte lace up boots in pebble brown leather',
        price: 400,
        image: require('../assets/product3.jpg'),
    },
    {
        id: 9,
        title: 'Base London monte lace up boots in pebble brown leather',
        price: 300,
        image: require('../assets/product4.jpg'),
    },
]

function HomeScreen({ navigation }) {
    return <ProductListScreen listings={listings} navigation={navigation} />
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
})

export default HomeScreen
