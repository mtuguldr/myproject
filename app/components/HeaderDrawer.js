import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { DrawerActions } from '@react-navigation/routers'
import { getFocusedRouteNameFromRoute } from '@react-navigation/core'

import { ft, wp } from '../config/const'
import { Icon } from './Icon'
import defaultStyles from '../config/styles'
import Header from './Header'

// function getHeaderTitle(route) {
//     const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home'

//     switch (routeName) {
//         case 'Home':
//             return 'Home'
//         case 'Search':
//             return 'Search'
//         case 'Category':
//             return 'Category'
//         case 'Profile':
//             return 'Profile'
//     }
// }

const ICON_SIZE = wp(6)
const ICON_COLOR = defaultStyles.colors.primary
function HeaderDrawer({ route, navigation }) {
    return (
        <Header
            left={
                <Icon
                    iconFamily='IO'
                    color={ICON_COLOR}
                    name='menu'
                    size={ICON_SIZE}
                    style={styles.padding}
                    onPress={() => {
                        navigation.dispatch(DrawerActions.openDrawer())
                    }}
                />
            }
            center={
                <Text style={[defaultStyles.text, defaultStyles.medium]}>
                    {/* {getHeaderTitle(route)} */}
                    shoppr
                </Text>
            }
            right={
                <View style={{ flexDirection: 'row' }}>
                    <Icon
                        iconFamily='IO'
                        color={ICON_COLOR}
                        name='heart-outline'
                        size={ICON_SIZE}
                        style={styles.padding}
                        onPress={() => {
                            navigation.navigate('Wishlist')
                        }}
                    />
                    <Icon
                        iconFamily='IO'
                        color={ICON_COLOR}
                        name='cart-outline'
                        size={ICON_SIZE}
                        style={styles.padding}
                        onPress={() => {
                            navigation.navigate('Orders')
                        }}
                    />
                </View>
            }
        />
    )
}

const styles = StyleSheet.create({
    padding: {
        paddingHorizontal: 12,
    },
})

export default HeaderDrawer
