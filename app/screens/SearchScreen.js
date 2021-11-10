import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    KeyboardAvoidingView,
    Platform,
} from 'react-native'
import { TextInput } from '../components'

import { Icon } from '../components/Icon'
import { hp, wp } from '../config/const'
import defaultStyles from '../config/styles'

function SearchScreen(props) {
    const ICON_SIZE = wp(5)

    const SearchIcon = () => (
        <Icon
            iconFamily='IO'
            color={defaultStyles.colors.light}
            name='search-outline'
            size={ICON_SIZE}
            style={defaultStyles.inputIcon}
        />
    )
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <View
                style={{ marginBottom: Platform.OS === 'ios' ? hp(4) : hp(8) }}
            >
                <TextInput
                    Left={<SearchIcon />}
                    placeholder='Search...'
                    color={defaultStyles.colors.dark}
                    placeholderTextColor={defaultStyles.colors.light}
                />
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.white,
        flex: 1,
        justifyContent: 'flex-start',

        padding: wp(5),
    },
})

export default SearchScreen
