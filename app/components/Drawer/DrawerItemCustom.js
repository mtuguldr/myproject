import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { ft } from '../../config/const'

import defaultStyles from '../../config/styles'
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
            <Icon
                color={defaultStyles.colors.dark}
                iconFamily='AD'
                name={icon}
                size={24}
            />
            <Text
                style={[
                    defaultStyles.text,
                    {
                        flex: 1,
                        marginHorizontal: 20,
                        textTransform: 'uppercase',
                        fontSize: ft(12),
                    },
                ]}
            >
                {title}
            </Text>
            {switchComponent}
        </TouchableOpacity>
    )
}

export default DrawerItemCustom
