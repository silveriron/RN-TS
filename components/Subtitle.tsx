import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    data: string[],
    title: string
}

const Subtitle = ({data, title}: Props) => {
  return (
    <View style={styles.rootContainer}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
        </View>
        <View>
            {data.map((d) => {
                return <Text style={styles.text} key={d}>{d}</Text>
            })}
        </View>
    </View>
  )
}

export default Subtitle

const styles = StyleSheet.create({
    rootContainer: {
        alignItems: "center"
    },
    title: {
        fontSize: 18,
        textAlign: "center",
    },
    titleContainer: {
        borderBottomColor: "#222222",
        borderBottomWidth: 1,
        marginHorizontal: 8,
        paddingVertical: 8,
        marginVertical: 16,
        width: "80%"
    },
    text: {
        textAlign: "center",
        marginVertical: 4
    }
})