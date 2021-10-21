import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Background from './app/components/Background';
import Button from './app/components/Button';
import Logo from './app/components/Logo';
import { ft, hp, wp } from './app/config/const';

const MARGIN_HORIZONTAL = wp('5%');
const MARGIN_VERTICAL = hp('5%');

function WelcomeScreen() {
    return (
        <Background style={{ justifyContent: 'flex-end' }}>
            <Logo style={styles.logo} />
            <View style={styles.container}>
                <Text style={styles.title}>Water Delivery</Text>
                <Text style={[styles.title, {}]}>
                    We deliver water at any point of the Earth in 30 minutes
                </Text>

                <Button
                    title="Login"
                    onPress={() => {
                        console.log();
                    }}
                />
                <Button
                    title="Sign up"
                    color="white"
                    filled
                    onPress={() => {}}
                />
            </View>
        </Background>
    );
}

const styles = StyleSheet.create({
    description: {
        fontSize: ft(14),
        marginBottom: MARGIN_VERTICAL,
    },
    container: {
        justifyContent: 'center',
        marginHorizontal: MARGIN_HORIZONTAL,
    },
    logo: {
        position: 'absolute',
        top: hp('3%'),
        left: MARGIN_HORIZONTAL,
    },
    title: {
        color: 'white',
        fontSize: ft(28),
    },
});

export default WelcomeScreen;
