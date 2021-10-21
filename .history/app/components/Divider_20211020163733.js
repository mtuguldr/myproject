import React from 'react'
import { Text, View } from 'react-native'

function Divider(props) {
	return (
		<View style={{ flexDirection: 'row' }}>
			<View style={{ borderTopWidth: 1, alignItems: 'center' }} />
			<Text>or</Text>
			<View />
		</View>
	)
}

export default Divider
