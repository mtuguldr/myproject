import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { ft } from '../../config/const'
import AntDesign from 'react-native-vector-icons/AntDesign'
import colors from '../../config/colors'
import ListItem from '../../components/ListItem'
import ListItemSeparator from '../../components/ListItemSeperator'

import Background from '../../components/Background'
import CustomHeader from '../../components/CustomHeader'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DrawerActions } from '@react-navigation/routers'

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
        <Background color='#f2f2f2' style={styles.background}>
            <ListItem
                title='User'
                subTitle='user@mail.com'
                image={require('../../assets/avatar.png')}
                onPress={() => {
                    navigation.navigate('ProfileEdit')
                }}
            />
            <View style={styles.container}>
                {/* <Text style={styles.title}>Account</Text> */}
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
    background: {},
    container: {
        marginVertical: 20,
    },
    title: {
        fontSize: ft(12),
        paddingHorizontal: 15,
    },
})

export default ProfileScreen
