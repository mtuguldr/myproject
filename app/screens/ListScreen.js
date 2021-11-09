import React, { useRef } from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'

import { hp, wp } from '../config/const'
import CardList from '../components/CardList'
import defaultStyles from '../config/styles'
import ListItemDeleteAction from '../components/ListItemDeleteAction'
import { Icon } from '../components/Icon'
import ModalInput from '../components/ModalInput'

let data = [
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

function ListScreen() {
    const [categories, setCategories] = React.useState(data)
    const [modalVisible, setModalVisible] = React.useState(false)

    const [error, setError] = React.useState('')
    const [value, setValue] = React.useState('')

    const handleDelete = (category) => {
        setCategories(categories.filter((val) => val.title !== category.title))
    }

    const handleAdd = (value) => {
        for (let i = 0; i < data.length; i++) {
            if (categories[i].title === value.toLowerCase()) {
                console.log(`data[i].title`, data[i].title)
                setError('Category already exists')
                return
            }
        }
        data.push({ title: value })
        setCategories(data)
        setModalVisible(false)
    }

    const scrollViewRef = useRef()

    return (
        <View style={styles.background}>
            <ModalInput
                title='Add new category'
                placeholderText='Category'
                modalVisible={modalVisible}
                onChangeText={(val) => {
                    setError('')
                    setValue(val)
                }}
                onPressCancel={() => {
                    setModalVisible(false)
                    setError('')
                }}
                onPressSave={() => {
                    handleAdd(value)
                }}
                error={error}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ width: '100%' }}
                ref={scrollViewRef}
                onContentSizeChange={() =>
                    scrollViewRef.current.scrollToEnd({ animated: true })
                }
            >
                {categories.map((item, index) => {
                    return (
                        <CardList
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
                    )
                })}
                <CardList
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

export default ListScreen
