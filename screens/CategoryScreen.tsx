import { StyleSheet, FlatList, View, Text, ListRenderItem } from 'react-native'
import React from 'react'
import {CATEGORIES} from '../data/dummy-data'
import Category from '../models/category'
import CategoryGrid from '../components/CategoryGrid'

type Props = {}


const CategoryScreen = (props: Props) => {
  return (
    <FlatList data={CATEGORIES} renderItem={({item}) => {
        return <CategoryGrid title={item.title} color={item.color} />
    }}
    keyExtractor={(item, index) => item.id}
    />
  )
}

export default CategoryScreen

const styles = StyleSheet.create({})