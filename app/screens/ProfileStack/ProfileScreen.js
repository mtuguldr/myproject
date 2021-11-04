import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    FlatList,
    TouchableOpacity,
} from 'react-native'

import defaultStyles from '../../config/styles'
import { Icon } from '../../components/Icon'
import { Background, ListItem, Separator } from '../../components'
import { ft } from '../../config/const'

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
            backgroundColor: defaultStyles.colors.white,
            alignItems: 'center',
        }}
    >
        {/* <Text
            style={{
                color: defaultStyles.colors.black,
                fontWeight: 'bold',
                fontSize: ft(16),
            }}
        >
            shoppr
        </Text> */}
        <Text style={defaultStyles.text}>Buy everything you need!</Text>
        <TouchableOpacity
            style={{
                marginTop: 15,
                padding: 5,
                borderRadius: defaultStyles.borderRadius,
                backgroundColor: defaultStyles.colors.primary,
                width: 100,
            }}
        >
            <Text
                style={{
                    textAlign: 'center',
                    color: defaultStyles.colors.white,
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
        <View style={styles.background}>
            <DrawerHeadLogin />
            <View style={{ backgroundColor: defaultStyles.colors.white }}>
                <ListItem
                    title='John Doe'
                    subTitle='user@mail.com'
                    image={require('../../assets/avatar.png')}
                    onPress={() => {
                        navigation.navigate('ProfileEdit', {
                            name: 'John Doe',
                            email: 'user@mail.com',
                        })
                    }}
                />
            </View>
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
                                    color={defaultStyles.colors.black}
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
                        color={defaultStyles.colors.black}
                        name='logout'
                        size={20}
                    />
                }
            /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    background: { flex: 1 },
    container: {
        marginVertical: 10,
        backgroundColor: defaultStyles.colors.white,
    },
    title: {
        fontSize: ft(12),
        paddingHorizontal: 15,
    },
})

export default ProfileScreen
