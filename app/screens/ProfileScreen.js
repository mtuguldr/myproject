import React from 'react'
import { View, StyleSheet, SafeAreaView, FlatList, Text } from 'react-native'

import { ft, hp, wp } from '../config/const'
import AntDesign from 'react-native-vector-icons/AntDesign'
import colors from '../config/colors'
import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeperator'
import Logo from '../components/Logo'
import Background from '../components/Background'

const menuItems = [
    {
        title: 'Orders',
        icon: {
            name: 'bars',
        },
    },
    {
        title: 'Wishlist',
        icon: {
            name: 'staro',
        },
    },
    {
        title: 'Payment',
        icon: {
            name: 'wallet',
        },
    },
]

function ProfileScreen({ navigation }) {
    return (
        <Background style={styles.background}>
            <ListItem
                title='User'
                subTitle='user@mail.com'
                image={require('../assets/avatar.png')}
                onPress={() => {
                    navigation.navigate('ProfileEdit')
                }}
            />
            <View style={styles.container}>
                <Text style={styles.title}>Account</Text>
                <FlatList
                    scrollEnabled={false}
                    data={menuItems}
                    keyExtractor={(menuItem) => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <AntDesign
                                    name={item.icon.name}
                                    size={20}
                                    color={colors.black}
                                />
                            }
                            // onPress={() =>
                            //     navigation.navigate(item.targetScreen)
                            // }
                        />
                    )}
                />
            </View>
            <ListItem
                title='Log Out'
                IconComponent={
                    <AntDesign color={colors.black} name='logout' size={20} />
                }
            />
        </Background>
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
    },
})

export default ProfileScreen
