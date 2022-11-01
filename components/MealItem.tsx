import { StyleSheet, Text, View, Image, Platform, Pressable } from 'react-native'
import React from 'react'
import Meal from '../models/meal'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../types/RootStackParamList'
import MealDetail from './MealDetail'

type Props = {
    item: Meal
}

const MealItem = ({item}: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, "MealDetailScreen">>()

  const navigateDetailHandler = () => {
    navigation.navigate("MealDetailScreen", {mealId: item.id})
  }
  return (
    <View style={styles.mealContainer}>
      <Pressable onPress={navigateDetailHandler}>

      <View style={styles.innerContainer} >
      <Image source={{uri: item.imageUrl}} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <MealDetail duration={item.duration} complexity={item.complexity} affordability={item.affordability} />
      </View>
      </Pressable>
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
  mealContainer: {
    margin: 16,
    paddingBottom: 8,
    borderRadius: 8,
    borderColor: '#222222',
    borderWidth: 1,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    elevation: 4,
    shadowColor: "#222222",
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 4},
  },
  innerContainer: {
    borderRadius: 4,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center"
    ,margin: 16
  },
  

})