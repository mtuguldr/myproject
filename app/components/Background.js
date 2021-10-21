import React, { Children } from 'react'
import { View, StyleSheet } from 'react-native'
import colors from '../config/colors'
import { wp } from '../config/const'

function Background({ children, style }) {
	return <View style={[styles.container, style]}>{children}</View>
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.primary,
		paddingHorizontal: wp('5%'),
	},
})

export default Background
