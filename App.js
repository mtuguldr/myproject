import React from 'react'
import { View, StyleSheet, SafeAreaView, FlatList, Text } from 'react-native'

import AntDesign from 'react-native-vector-icons/AntDesign'
import ListItem from './app/components/ListItem'
import Logo from './app/components/Logo'
import colors from './app/config/colors'
import Screen from './app/components/Screen'
import { ft, hp, wp } from './app/config/const'
import ListItemSeparator from './app/components/ListItemSeperator'

const menuItems = [
    {
        title: 'Orders',
        icon: {
            name: 'bars',
            backgroundColor: colors.primary,
        },
    },
    {
        title: 'Returns',
        icon: {
            name: 'shoppingcart',
            backgroundColor: colors.secondary,
        },
    },
    {
        title: 'Wishlist',
        icon: {
            name: 'staro',
            backgroundColor: colors.secondary,
        },
    },
    {
        title: 'Payment',
        icon: {
            name: 'wallet',
            backgroundColor: colors.secondary,
        },
    },
]

function App(props) {
    alert('test2')
    return (
        <Screen style={styles.background}>
            <SafeAreaView style={styles.container}>
                <Logo style={styles.container} color={colors.dark} />
                <ListItem
                    title='User'
                    subTitle='user@user.com'
                    image={require('./app/assets/avatar.jpeg')}
                />
                <FlatList />
                <View style={styles.container}>
                    <Text style={styles.title}>Account</Text>
                    <FlatList
                        data={menuItems}
                        keyExtractor={(menuItem) => menuItem.title}
                        ItemSeparatorComponent={ListItemSeparator}
                        renderItem={({ item }) => (
                            <ListItem
                                title={item.title}
                                IconComponent={
                                    <AntDesign
                                        name={item.icon.name}
                                        backgroundColor={
                                            item.icon.backgroundColor
                                        }
                                    />
                                }
                                onPress={() =>
                                    navigation.navigate(item.targetScreen)
                                }
                            />
                        )}
                    />
                </View>
                <ListItem
                    title='Log Out'
                    IconComponent={
                        <AntDesign name='logout' backgroundColor='#ffe66d' />
                    }
                />
            </SafeAreaView>
        </Screen>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: colors.white,
    },
    container: {
        marginVertical: 20,
    },
    title: {
        fontSize: ft(12),
        paddingHorizontal: 15,
        color: colors.medium,
    },
})

export default App
