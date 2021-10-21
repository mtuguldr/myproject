import { Dimensions, Platform, PixelRatio } from 'react-native'
import colors from './colors'

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320

export function ft(size) {
	const newSize = size * scale
	if (Platform.OS === 'ios') {
		return Math.round(PixelRatio.roundToNearestPixel(newSize))
	} else {
		return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
	}
}

export {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

export function nameValidator(text) {
	if (text == '') return "Name can't be empty"
}

export function emailValidator(text) {
	let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
	if (!reg.test(text)) return 'Email is incorrect'
	else return ''
}
export function passwordValidator(text) {
	if (text.length < 4) return 'Password must be at least 4 characters long'
}

export function highlightInput(text) {
	const color = text.length > 0 ? colors.primary : colors.light
	return color
}
