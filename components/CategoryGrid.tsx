import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    title: string,
    color: string,
}

const CategoryGrid = ({title, color}: Props) => {
  return (
    <View style={{backgroundColor: color}}>
            <Text>{title}</Text>
        </View>
  )
}

export default CategoryGrid

const styles = StyleSheet.create({})