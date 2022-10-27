import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

interface Props{
    name:string,
    padding?:string | number,
    height?: number,
    width?: number,
    onPress: ()=> void,
}
function MessButtons({name,padding,height,width,onPress}:Props) {
  return (
    <View style={{padding}}>
    <TouchableOpacity onPress={()=>{onPress()}} onPressIn={()=>{}}>
    <View style={[styles.container,{height,width}]} >
        <Text>{name}</Text>
    </View>
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#EFEFEF",
        padding:15,
        borderRadius:15,
        elevation:5,
        justifyContent:'center',
        alignItems: 'center',
    }
})

export default MessButtons