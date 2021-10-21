import React from 'react'
import { Platform, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import colors from '../config/colors'
import { ft, hp, wp } from '../config/const'

import Background from './Background'

const MARGIN_HORIZONTAL = wp('5%')
const MARGIN_VERTICAL_TALL = hp('6%')
const MARGIN_VERTICAL_SHORT = hp('3%')
const ICON_SIZE = wp('5%')

function AuthContainer({ title, children }) {
	return (
		<Background>
			<View style={{ flex: 1 }}>
				{Platform.OS === 'ios' && (
					<FontAwesome
						color={colors.white}
						name='chevron-left'
						size={ICON_SIZE}
						style={styles.backButton}
						onPress={() => {
							navigation.goBack()
						}}
					/>
				)}
				<Text style={styles.title}>{title}</Text>
			</View>
			<View style={styles.overlay}>
				<View style={styles.container}>{children}</View>
			</View>
		</Background>
	)
}

const styles = StyleSheet.create({
	backButton: {
		//position: 'absolute',
		top: MARGIN_VERTICAL_TALL,
		left: MARGIN_HORIZONTAL,
	},
	container: {
		justifyContent: 'center',
		marginHorizontal: MARGIN_HORIZONTAL,
		marginBottom:
			Platform.OS === 'ios'
				? MARGIN_VERTICAL_TALL
				: MARGIN_VERTICAL_SHORT,
	},

	overlay: {
		backgroundColor: colors.white,
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
	},
	title: {
		color: colors.white,
		fontSize: ft(28),
		marginTop: DeviceInfo.hasNotch()
			? MARGIN_VERTICAL_TALL * 2
			: MARGIN_VERTICAL_SHORT,
		left: MARGIN_HORIZONTAL,
	},
})

export default AuthContainer
