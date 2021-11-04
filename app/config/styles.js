import { Platform } from 'react-native'

import { ft } from './const'
import colors from './colors'

export default {
    text: {
        color: colors.dark,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    },
    title: {
        color: colors.dark,
        fontSize: ft(28),
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    },
    titleNav: {
        color: colors.dark,
        fontSize: ft(18),
        fontWeight: 'bold',
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    },
    borderRadius: 25,
    colors,
}
