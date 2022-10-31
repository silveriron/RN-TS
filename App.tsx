import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import CategoryScreen from './screens/CategoryScreen'

type Props = {}

const App = (props: Props) => {
  return (
    <>
    <SafeAreaView>
      <CategoryScreen/>
    </SafeAreaView>
    <StatusBar 
    barStyle={'dark-content'}
    />
    </>
  )
}

export default App

const styles = StyleSheet.create({})