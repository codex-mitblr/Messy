import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import { RootStackParamList } from '../types';



const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Button onPress={() => {
        navigation.navigate('messPage', { mess: "veg mess" })
      }} mode="contained" style={styles.MessButtons}>Veg Mess</Button>
      <Button onPress={() => { navigation.navigate('messPage',{mess:"Non-veg mess"})}} mode="contained" style={styles.MessButtons}>Non-Veg Mess</Button>
      <Button onPress={()=>{ navigation.navigate("GroupPage",{groupID:"groupA001"})}}>
       Group A
      </Button>
    
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  MessButtons: {
    margin: 10
  }
})
export default HomeScreen