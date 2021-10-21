import React from 'react'
import { Text, View } from 'react-native'

function Divider(props) {
	return (
		<View style={{ flexDirection: 'row' }}>
			<View />
			<Text>or</Text>
			<View />
		</View>
	)
}

export default Divider
