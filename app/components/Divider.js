import React from 'react'
import { Text, View } from 'react-native'
import colors from '../config/colors'
import { ft, wp } from '../config/const'

function Divider(props) {
    const Line = () => {
        return (
            <View
                style={{
                    borderBottomWidth: 1,
                    borderColor: colors.light,
                    width: '25%',
                }}
            />
        )
    }

    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Line />
            <Text
                style={{
                    width: '25%', //wp('10%'),
                    fontSize: ft(14),
                    color: colors.light,
                    textAlign: 'center',
                }}
            >
                or
            </Text>
            <Line />
        </View>
    )
}

export default Divider
