import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import colors from '../../config/colors'
import { Icon } from '../Icon'

function DrawerItemCustom({ title, icon, onPress, switchComponent }) {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 20,
                paddingVertical: 10,
            }}
            onPress={onPress}
        >
            <Icon color={colors.black} iconFamily='AD' name={icon} size={24} />
            <Text
                style={{
                    flex: 1,
                    marginHorizontal: 20,
                    color: colors.black,
                    textTransform: 'uppercase',
                }}
            >
                {title}
            </Text>
            {switchComponent}
        </TouchableOpacity>
    )
}

export default DrawerItemCustom
