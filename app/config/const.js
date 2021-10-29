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

export const wp = (widthPercent) => {
    const screenWidth = Dimensions.get('window').width
    const elemWidth = parseFloat(widthPercent)
    return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100)
}

export const hp = (heightPercent) => {
    const screenHeight = Dimensions.get('window').height
    const elemHeight = parseFloat(heightPercent)
    return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100)
}

export function nameValidator(text) {
    if (text === '') return "Name can't be empty"
    else return ''
}

export function emailValidator(text) {
    if (text === '') return "Email can't be empty"
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
    if (!reg.test(text)) return 'Email is incorrect'
    else return ''
}
export function passwordValidator(text) {
    if (text.length < 4) return 'Password must be at least 4 characters long'
    else return ''
}
