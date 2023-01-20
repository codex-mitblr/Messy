import React, { useState } from 'react'
import {Text, Animated, StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

interface Props{
    style?: StyleProp<ViewStyle>,
    onPress: ()=>void,
}

function AddButton({style,onPress}:Props) {
    return (
        <View style={[styles.container,style]}>
            <TouchableOpacity onPress={()=>{onPress()}} onPressIn={()=>{}}>
                <View style={styles.body}>
                    <Text style={styles.text}>+</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
  }

const styles= StyleSheet.create({
    container:{
        backgroundColor:"#eeeeee",
        height:50,
        width:50,
        elevation:5,
        borderRadius:50,
        position:'absolute',
        bottom:30,
        right:30
    },
    body:{
        justifyContent:'center',
        alignItems:'center',
        height:50,
        width:50,
    },
    text:{
        fontSize:20
    }

})

export default AddButton