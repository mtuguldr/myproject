import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AuthNavigator from './app/navigation/AuthNavigator'
import TabNavigator from './app/navigation/TabNavigator'
import Background from './app/components/Background'
import { SafeAreaView, Text, View } from 'react-native'
import colors from './app/config/colors'
import { ft, hp, wp } from './app/config/const'

export default function App() {
    return (
        // <NavigationContainer>
        //     <TabNavigator />
        // </NavigationContainer>
        <View style={{ flex: 1 }}>
            <View
                style={{
                    backgroundColor: colors.primary,
                    height: hp(10),
                    width: wp(100),
                }}
            >
                <SafeAreaView
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        // justifyContent: 'center',
                        width: '100%',
                    }}
                >
                    {/* <FontAwesome
                        name='chevron-left'
                        color='white'
                        size={wp(5)}
                    /> */}

                    <View style={{ flex: 1 }}>
                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize: ft(20),
                                color: 'white',
                            }}
                        >
                            Text
                        </Text>
                    </View>
                </SafeAreaView>
            </View>
        </View>
    )
}
