import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import InfoBlock from '../components/InfoBlock'
import PointerBlock from '../components/PointerBlock'
const image = require('../assets/Icon.png')
export default function MessPage() {
  return (
    <View style={styles.container}>
        <Text>Number of people in the mess: {}</Text>
        <InfoBlock name='Chole Bhature' src={image} rating={45}/>
        <InfoBlock name='Shahi Paneer' src={image} rating={43}/>
        <InfoBlock name='Bhindi' src={image} mess="veg"/>
        <Text>Pointers on food</Text>
        <PointerBlock message='the text and username (baisically a tweet kinda interface)' rating={52}/>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center'
    }
})
