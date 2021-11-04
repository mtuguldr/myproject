import React from 'react'
import { View, Text } from 'react-native'
import { DrawerActions } from '@react-navigation/routers'
import { getFocusedRouteNameFromRoute } from '@react-navigation/core'

import { ft, wp } from '../../config/const'
import { Icon } from '../Icon'
import defaultStyles from '../../config/styles'
import Header from '../Header'

function getHeaderTitle(route) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home'

    switch (routeName) {
        case 'Home':
            return 'Home'
        case 'Search':
            return 'Search'
        case 'Category':
            return 'Category'
        case 'Profile':
            return 'Profile'
    }
}

const ICON_SIZE = wp(6)
const ICON_COLOR = defaultStyles.colors.primary
function DrawerHeader({ route, navigation }) {
    return (
        <Header
            left={
                <Icon
                    iconFamily='AD'
                    color={ICON_COLOR}
                    name='bars'
                    size={ICON_SIZE}
                    style={{
                        paddingHorizontal: 12,
                    }}
                    onPress={() => {
                        navigation.dispatch(DrawerActions.openDrawer())
                    }}
                />
            }
            center={
                <Text style={defaultStyles.titleNav}>
                    {/* {getHeaderTitle(route)} */}
                    shoppr
                </Text>
            }
            right={
                <View style={{ flexDirection: 'row' }}>
                    <Icon
                        iconFamily='AD'
                        color={ICON_COLOR}
                        name='hearto'
                        size={ICON_SIZE}
                        style={{
                            paddingHorizontal: 12,
                        }}
                        onPress={() => {
                            navigation.navigate('Wishlist')
                        }}
                    />
                    <Icon
                        iconFamily='AD'
                        color={ICON_COLOR}
                        name='shoppingcart'
                        size={ICON_SIZE}
                        style={{
                            paddingHorizontal: 12,
                        }}
                        onPress={() => {
                            navigation.navigate('Orders')
                        }}
                    />
                </View>
            }
        />
    )
}

export default DrawerHeader
