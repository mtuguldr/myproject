import React from 'react'
import { View, StyleSheet } from 'react-native'

import defaultStyles from '../config/styles'

function Separator() {
    return <View style={styles.seperator} />
}

const styles = StyleSheet.create({
    seperator: {
        backgroundColor: defaultStyles.colors.lightest,
        height: 1,
    },
})

export default Separator
