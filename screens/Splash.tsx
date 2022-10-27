import React from 'react'
import { StyleSheet, View, Image, Text} from 'react-native'
const logo = require('../assets/splash.png')


export default function MessPage() {
  return (
    <View style={styles.container}>
        <Image style={styles.logo} source={logo}/>
        <Text style={styles.text}>Messy</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        height:100,
        width:100,
        elevation:9,
        backgroundColor:'green'
    },
    text:{
        fontSize:20,
    }
})