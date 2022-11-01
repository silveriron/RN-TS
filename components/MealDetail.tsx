import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    duration: number,
    complexity: string,
    affordability: string,
    boxStyle?: Object,
    textStyle?: Object
}

const MealDetail = ({duration, complexity, affordability, boxStyle, textStyle}: Props) => {
  return (
    <View style={styles.detailBox}>
        <Text style={styles.detailItem}>{duration}m</Text>
        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
        <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
      </View>
  )
}

export default MealDetail

const styles = StyleSheet.create({
    detailBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center"
      },
      detailItem: {
        fontSize: 12,
        marginHorizontal: 4
      }
})