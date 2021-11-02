import React from 'react'
import { View, StyleSheet } from 'react-native'

import colors from '../config/colors'

function Separator(props) {
    return <View style={styles.seperator} />
}

const styles = StyleSheet.create({
    seperator: {
        backgroundColor: colors.lightest,
        height: 1,
    },
})

export default Separator
