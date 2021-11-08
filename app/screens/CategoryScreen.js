import React from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'

import { hp, wp } from '../config/const'
import Card from '../components/Card'
import defaultStyles from '../config/styles'
import ListItemDeleteAction from '../components/ListItemDeleteAction'
import { Icon } from '../components/Icon'
import ModalInput from '../components/ModalInput'

const categories = [
    {
        title: 'new in',
    },
    {
        title: 'topshop',
    },
    {
        title: 'clothing',
    },
    {
        title: 'shoes',
    },
    {
        title: 'accessories',
    },
    {
        title: 'gifts',
    },
    {
        title: 'face + body',
    },
    {
        title: 'sportswear',
    },
    {
        title: 'brands',
    },
    {
        title: 'outlets',
    },
]

function CategoryScreen() {
    const [messages, setMessages] = React.useState(categories)
    const [modalVisible, setModalVisible] = React.useState(false)
    const [error, setError] = React.useState('')

    const handleDelete = (message) => {
        // Delete the message from messages
        setMessages(messages.filter((m) => m.title !== message.title))
    }

    const handleAdd = (category) => {
        setMessages((categories) => [...categories, { title: 'AA' }])
        setModalVisible(false)
    }

    return (
        <View style={styles.background}>
            <ModalInput
                title='Add new category'
                placeholderText='Category'
                modalVisible={modalVisible}
                onChangeText={() => setError('')}
                onPressCancel={() => {
                    setModalVisible(false)
                    setError('')
                }}
                onPressSave={() => {
                    handleAdd('New')
                    // setError('Category already exists')
                }}
                error={error}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ width: '100%' }}
            >
                {messages.map((item, index) => {
                    return (
                        <View style={{ marginVertical: hp(1) }}>
                            <Card
                                key={index}
                                Title={
                                    <Text
                                        style={[
                                            defaultStyles.text,
                                            defaultStyles.medium,
                                            { textTransform: 'uppercase' },
                                        ]}
                                    >
                                        {item.title}
                                    </Text>
                                }
                                renderRightActions={() => (
                                    <ListItemDeleteAction
                                        onPress={() => handleDelete(item)}
                                    />
                                )}
                            />
                        </View>
                    )
                })}
                <Card
                    Title={
                        <Icon
                            iconFamily='AD'
                            size={wp(5)}
                            name='plus'
                            color={defaultStyles.colors.dark}
                        />
                    }
                    onPress={() => {
                        setModalVisible(true)
                    }}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        alignItems: 'center',
        backgroundColor: defaultStyles.colors.white,
        flex: 1,
        justifyContent: 'center',
        padding: defaultStyles.backgroundPadding,
    },
})

export default CategoryScreen
