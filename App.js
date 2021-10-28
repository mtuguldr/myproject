import React from 'react'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { ft, wp } from './app/config/const'
import CustomHeader from './app/components/CustomHeader'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './app/navigation/TabNavigator'
import DrawerNavigator from './app/navigation/DrawerNavigator'

export default function App() {
    return (
        // <View style={{ backgroundColor: 'orange', flex: 1 }}>
        //     {/* <View style={{ backgroundColor: 'red', flex: 1 }} /> */}
        //     <CustomHeader
        //         title='Home'
        //         titleStyle={{
        //             color: 'black',
        //             fontSize: ft(16),
        //             fontWeight: 'bold',
        //         }}
        //         headerLeft={
        //             <FontAwesome
        //                 name='chevron-left'
        //                 size={wp(5)}
        //                 color='black'
        //             />
        //         }
        //         headerRight={
        //             <>
        //                 <FontAwesome
        //                     name='shopping-cart'
        //                     size={wp(5)}
        //                     color='black'
        //                 />
        //                 {/* <FontAwesome
        //                      name='shopping-cart'
        //                      size={wp(5)}
        //                      color='black'
        //                  /> */}
        //             </>
        //         }
        //     />
        // </View>
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
        // <View style={{ backgroundColor: '#f2f2f2', flex: 1 }}>
        //     <CustomHeader
        //         title='Home'
        //         titleStyle={{
        //             color: 'black',
        //             fontSize: ft(16),
        //             fontWeight: 'bold',
        //         }}
        //         // headerLeft={
        //         //     <FontAwesome
        //         //         name='chevron-left'
        //         //         size={wp(5)}
        //         //         color='black'
        //         //     />
        //         // }
        //         headerRight={
        //             <>
        //                 <FontAwesome
        //                     name='shopping-cart'
        //                     size={wp(5)}
        //                     color='black'
        //                 />
        //                 {/* <FontAwesome
        //                     name='shopping-cart'
        //                     size={wp(5)}
        //                     color='black'
        //                 /> */}
        //             </>
        //         }
        //     />
        // </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: wp(2),
    },
})
