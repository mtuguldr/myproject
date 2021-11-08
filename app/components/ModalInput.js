import React, { useState } from 'react'
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native'
import { FormInput, Button } from '.'
import { hp, wp } from '../config/const'

import defaultStyles from '../config/styles'

function ModalInput({
    error,
    modalVisible,
    onChangeText,
    onPressCancel,
    onPressSave,
    placeholderText,
    title,
}) {
    return (
        <Modal
            animationType='fade'
            transparent={modalVisible}
            visible={modalVisible}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalView}>
                    <Text style={[defaultStyles.text, defaultStyles.medium]}>
                        {title}
                    </Text>
                    <FormInput
                        color={defaultStyles.colors.dark}
                        error={error}
                        focusColor={defaultStyles.colors.primary}
                        maxLength={30}
                        onChangeText={onChangeText}
                        placeholder={placeholderText}
                        placeholderTextColor={defaultStyles.colors.light}
                        style={{ marginTop: hp(2) }}
                    />
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: hp(1),
                        }}
                    >
                        <Button
                            backgroundColor={defaultStyles.colors.white}
                            borderTextColor={defaultStyles.colors.primary}
                            filled
                            onPress={onPressCancel}
                            title='Cancel'
                            style={{ width: '45%' }}
                        />
                        <Button
                            backgroundColor={defaultStyles.colors.primary}
                            borderTextColor={defaultStyles.colors.white}
                            filled
                            onPress={onPressSave}
                            title='Save'
                            style={{ width: '45%' }}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: defaultStyles.colors.shadow,
        flex: 1,
        justifyContent: 'center',
    },
    modalView: {
        backgroundColor: defaultStyles.colors.white,
        borderRadius: defaultStyles.borderRadius,
        marginHorizontal: wp(5),
        padding: wp(5),
    },
})

export default ModalInput
