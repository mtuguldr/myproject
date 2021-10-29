import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { Background, Button, FormInput } from '../../components'
import colors from '../../config/colors'
import { ft, hp, wp } from '../../config/const'

function ProfileEditScreen(props) {
    return (
        <Background color='#f2f2f2' style={styles.background}>
            <View style={{ alignItems: 'center' }}>
                {/* <Text style={styles.title}>Edit Profile</Text> */}
                <Image
                    style={{
                        width: wp(20),
                        height: wp(20),
                        borderRadius: wp(20) / 2,
                    }}
                    source={require('../../assets/avatar.png')}
                />
            </View>
            <View>
                <FormInput color={colors.black} placeholder='Name' />
                <FormInput color={colors.black} placeholder='Email' />
                <FormInput color={colors.black} placeholder='Password' />
            </View>
            <View>
                <Button title='Save changes' borderTextColor={colors.black} />
            </View>
        </Background>
    )
}

const styles = StyleSheet.create({
    background: {
        paddingHorizontal: wp(5),
        justifyContent: 'space-around',
    },
    title: {
        fontSize: ft(16),
        marginBottom: 20,
    },
    container: {
        // marginVertical: hp(2),
    },
})

export default ProfileEditScreen
