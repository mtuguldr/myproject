import React from 'react'
import { Text, View } from 'react-native'
import colors from '../config/colors'
import { ft, wp } from '../config/const'

function Divider(props) {
	return (
		<View
			style={{
				flexDirection: 'row',
				alignItems: 'center',
			}}
		>
			<View
				style={{
					borderBottomWidth: 1,
					borderColor: colors.light,
					width: '40%', //wp('40%'),
				}}
			/>
			<Text
				style={{
					width: '10%'//wp('10%'),
					fontSize: ft(14),
					color: colors.light,
					textAlign: 'center',
				}}
			>
				or
			</Text>
			<View
				style={{
					borderBottomWidth: 1,
					borderColor: colors.light,
					width: '40%', //wp('40%'),
				}}
			/>
			<View />
		</View>
	)
}

export default Divider
