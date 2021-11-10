import { Platform } from 'react-native'

import { ft, wp } from './const'
import colors from './colors'

export default {
    text: {
        color: colors.dark,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    },
    large: {
        fontSize: ft(28),
    },
    medium: {
        fontWeight: 'bold',
        fontSize: ft(18),
    },
    small: {
        fontSize: ft(14),
    },
    inputIcon: {
        width: wp(5),
        textAlign: 'center',
    },
    borderRadius: 25,
    backgroundPadding: wp(5),
    colors,
}
