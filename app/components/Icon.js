import React from 'react'
import IconAD from 'react-native-vector-icons/AntDesign'
import IconEN from 'react-native-vector-icons/Entypo'
import IconFA from 'react-native-vector-icons/FontAwesome'
import IconFE from 'react-native-vector-icons/Feather'
import IconIO from 'react-native-vector-icons/Ionicons'
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons'
import IconMI from 'react-native-vector-icons/MaterialIcons'

export const Icon = (props) => {
    const renderIcon = () => {
        switch (props.iconFamily) {
            case 'AD':
                return (
                    <IconAD size={props.size} {...props} style={props.style} />
                )
            case 'EN':
                return (
                    <IconEN size={props.size} {...props} style={props.style} />
                )
            case 'FA':
                return (
                    <IconFA size={props.size} {...props} style={props.style} />
                )
            case 'FE':
                return (
                    <IconFE size={props.size} {...props} style={props.style} />
                )
            case 'IO':
                return (
                    <IconIO size={props.size} {...props} style={props.style} />
                )
            case 'MC':
                return (
                    <IconMC size={props.size} {...props} style={props.style} />
                )
            case 'MI':
                return (
                    <IconMI size={props.size} {...props} style={props.style} />
                )
        }
    }
    return renderIcon()
}
