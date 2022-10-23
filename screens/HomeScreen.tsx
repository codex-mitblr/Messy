import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'

function HomeScreen() {
  return (
    <View style={styles.container}>
       <Button onPress={()=>{}} mode="contained" style={styles.MessButtons}>Veg Mess</Button>
       <Button onPress={()=>{}} mode="contained" style={styles.MessButtons}>Non-Veg Mess</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
padding:20
  },
  MessButtons:{
    margin:10
  }
})
export default HomeScreen