import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    FlatList,
    TouchableOpacity,
} from 'react-native'

import { ft } from '../../config/const'
import { Icon } from '../../components/Icon'
import Background from '../../components/Background'
import colors from '../../config/colors'
import ListItem from '../../components/ListItem'
import Separator from '../../components/Separator'

const menuItems = [
    // { title: 'edit profile', icon: 'user', targetScreen: 'ProfileEdit' },
    { title: 'orders', icon: 'shoppingcart', targetScreen: 'Orders' },
    { title: 'wishlist', icon: 'hearto', targetScreen: 'Wishlist' },
    { title: 'payment', icon: 'creditcard', targetScreen: 'Payment' },
]

const DrawerHeadLogin = () => (
    <View
        style={{
            paddingVertical: 10,
            backgroundColor: colors.white,
            alignItems: 'center',
        }}
    >
        {/* <Text
            style={{
                color: colors.black,
                fontWeight: 'bold',
                fontSize: ft(16),
            }}
        >
            shoppr
        </Text> */}
        <Text
            style={{
                color: colors.black,
                fontSize: ft(14),
            }}
        >
            Buy everything you need!
        </Text>
        <TouchableOpacity
            style={{
                marginTop: 15,
                padding: 5,
                borderRadius: 5,
                backgroundColor: colors.primary,
                width: 100,
            }}
        >
            <Text
                style={{
                    textAlign: 'center',
                    color: colors.white,
                    fontSize: ft(14),
                }}
            >
                sign in
            </Text>
        </TouchableOpacity>
    </View>
)

function ProfileScreen({ navigation }) {
    return (
        <Background color={colors.screenBg} style={styles.background}>
            <DrawerHeadLogin />
            {/* <View style={{ backgroundColor: colors.white }}>
                <ListItem
                    title='User'
                    subTitle='user@mail.com'
                    image={require('../../assets/avatar.png')}
                    onPress={() => {
                        navigation.navigate('ProfileEdit')
                    }}
                />
            </View> */}
            <View style={styles.container}>
                <FlatList
                    scrollEnabled={false}
                    data={menuItems}
                    keyExtractor={(menuItem) => menuItem.title}
                    ItemSeparatorComponent={Separator}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon
                                    iconFamily='AD'
                                    name={item.icon}
                                    size={20}
                                    color={colors.black}
                                />
                            }
                            onPress={() =>
                                navigation.navigate(item.targetScreen)
                            }
                        />
                    )}
                />
            </View>
            {/* <ListItem
                title='log out'
                IconComponent={
                    <Icon
                        iconFamily='AD'
                        color={colors.black}
                        name='logout'
                        size={20}
                    />
                }
            /> */}
        </Background>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        backgroundColor: colors.white,
    },
    title: {
        fontSize: ft(12),
        paddingHorizontal: 15,
    },
})

export default ProfileScreen
