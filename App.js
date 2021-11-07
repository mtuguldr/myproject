import React from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'

import { hp } from './app/config/const'
import Card from './app/components/Card'
import defaultStyles from './app/config/styles'
import ListItemDeleteAction from './app/components/ListItemDeleteAction'

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

function App(props) {
    const [messages, setMessages] = React.useState(categories)

    const handleDelete = (message) => {
        // Delete the message from messages
        setMessages(messages.filter((m) => m.title !== message.title))
    }

    return (
        <View style={styles.background}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ width: '100%' }}
            >
                {messages.map((item, index) => {
                    return (
                        <View
                            style={{
                                marginVertical: hp(1),
                            }}
                        >
                            <Card
                                key={index}
                                title={item.title}
                                renderRightActions={() => (
                                    <ListItemDeleteAction
                                        onPress={() => handleDelete(item)}
                                    />
                                )}
                            />
                        </View>
                    )
                })}
                <Card title='+' />
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

export default App
