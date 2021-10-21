import React from 'react'

function AuthContainer(props) {
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
				<Text style={styles.title}>Welcome{'\n'}Back</Text>
			</View>
			<View style={styles.overlay}>
				<View style={styles.container}></View>
			</View>
		</Background>
	)
}

export default AuthContainer
