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
                return <IconAD {...props} />
            case 'EN':
                return <IconEN {...props} />
            case 'FA':
                return <IconFA {...props} />
            case 'FE':
                return <IconFE {...props} />
            case 'IO':
                return <IconIO {...props} />
            case 'MC':
                return <IconMC {...props} />
            case 'MI':
                return <IconMI {...props} />
        }
    }
    return renderIcon()
}
