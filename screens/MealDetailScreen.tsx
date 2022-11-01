import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../types/RootStackParamList'
import { MEALS } from '../data/dummy-data'
import MealDetail from '../components/MealDetail'
import Subtitle from '../components/Subtitle'

type Props = {}

const MealDetailScreen = (props: Props) => {
    const route = useRoute<NativeStackNavigationProp<RootStackParamList, "MealDetailScreen">>()
    const id = route.params.mealId

    const meal = MEALS.find(meal => meal.id === id)

    if (meal) {        
        return (
            <ScrollView>
                <View>
                    <Image source={{uri: meal.imageUrl}} style={styles.image} />
                </View>
                <Text style={styles.title}>{meal.title}</Text>
                <MealDetail duration={meal.duration} complexity={meal.complexity} affordability={meal.affordability}/>
                <Subtitle title="Ingredients" data={meal.ingredients} />
                <Subtitle title="Steps" data={meal.steps} />
            </ScrollView>
            )
}
}

export default MealDetailScreen

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300,
        marginBottom: 12,
    },
    title: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 24,
        marginVertical: 8,
    }
})