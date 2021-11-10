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

function CategoryScreen() {
    const [categories, setCategories] = React.useState(data)
    const [modalVisible, setModalVisible] = React.useState(false)

    const [error, setError] = React.useState('')
    const [value, setValue] = React.useState('')

    const handleDelete = (category) => {
        setCategories(categories.filter((val) => val.title !== category.title))
    }

    const handleAdd = (value) => {
        console.log(`categories`, categories)
        for (let i = 0; i < categories.length; i++) {
            if (categories[i].title === value.toLowerCase()) {
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
        <View style={styles.container}>
            <ScrollView
                ref={scrollViewRef}
                onContentSizeChange={() =>
                    scrollViewRef.current.scrollToEnd({ animated: true })
                }
            >
                <View style={[styles.container, { padding: wp(5) }]}>
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
                    {categories.map((item, index) => {
                        return (
                            <View style={{ marginBottom: hp(3) }} key={index}>
                                <CardList
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
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.white,
    },
})

export default CategoryScreen
