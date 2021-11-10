import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Background, Button, FormInput, TextInput } from '../components'
import { hp, wp } from '../config/const'

import defaultStyles from '../config/styles'

function AddProductScreen(props) {
    return (
        <View style={styles.background}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={[defaultStyles.text, defaultStyles.large]}>
                    New Product
                </Text>
            </View>
            <View style={{ flex: 2 }}>
                <FormInput
                    color={defaultStyles.colors.dark}
                    maxLength={30}
                    placeholder='Title'
                    placeholderTextColor={defaultStyles.colors.light}
                    style={styles.container}
                />
                <FormInput
                    color={defaultStyles.colors.dark}
                    maxLength={30}
                    placeholder='Description'
                    placeholderTextColor={defaultStyles.colors.light}
                    style={styles.container}
                />
                <FormInput
                    color={defaultStyles.colors.dark}
                    maxLength={30}
                    placeholder='Price'
                    placeholderTextColor={defaultStyles.colors.light}
                    style={styles.container}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Button
                    backgroundColor={defaultStyles.colors.primary}
                    borderTextColor={defaultStyles.colors.white}
                    filled
                    onPress={() => {}}
                    title='Sign in'
                />
                <Text style={[defaultStyles.text, styles.error]}>Error</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: defaultStyles.colors.white, //'#fcfcfc',
        flex: 1,
        paddingHorizontal: defaultStyles.backgroundPadding,
    },
    container: {
        marginVertical: hp(1.5),
    },
    error: {
        alignSelf: 'center',
        color: defaultStyles.colors.danger,
        height: hp(3),
        marginTop: hp(1),
    },
})

export default AddProductScreen
