import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import Background from '../components/Background'
import colors from '../config/colors'
import { ft, hp, wp } from '../config/const'

function ProfileScreen() {
    return (
        <Background style={styles.background}>
            <View
                style={{
                    backgroundColor: '#f3f3f3',
                    height: hp('20%'),
                    width: wp('100%'),
                    marginHorizontal: -wp('5%'),
                    borderBottomLeftRadius: 40,
                    borderBottomRightRadius: 40,
                }}
            >
                <SafeAreaView>
                    <Text
                        style={{
                            fontSize: ft(20),
                            fontWeight: 'bold',
                            textAlign: 'center',
                            color: colors.secondary,
                        }}
                    >
                        John Doe
                    </Text>
                    <Text>johndoe@mail.com</Text>
                </SafeAreaView>
            </View>
        </Background>
    )
}

const styles = StyleSheet.create({
    background: {
        justifyContent: 'flex-start',
    },
})

export default ProfileScreen
