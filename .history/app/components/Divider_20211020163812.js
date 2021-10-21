import React from 'react'
import { Text, View } from 'react-native'
import colors from '../config/colors'
import { ft } from '../config/const'

function Divider(props) {
	return (
		<View style={{ flexDirection: 'row' }}>
			<View style={{ borderTopWidth: 1, alignItems: 'center' }} />
			<Text style={{ fontSize: ft(14), color: colors.light }}>
				or
			</Text>
			<View />
		</View>
	)
}

export default Divider
