import React from 'react'
import {ImageBackground, View, Text, StyleSheet, TouchableOpacity, StyleProp, ViewStyle, ImageBackgroundProps, ImageSourcePropType, TextStyle, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
interface Props{
    name:string,
    padding?:string | number ,
    height?: number,
    gradient?: string[],
    width?: number,
    style?: StyleProp<ViewStyle>,
    src?:ImageSourcePropType,
    text_style?: StyleProp<TextStyle>,
    onPress: ()=> void,
}
function MessButtons({text_style,name,gradient,padding,height,width,style,src,onPress}:Props) {
  if (gradient==undefined){
    gradient=['#EFEFEF',"#EFEFEF"]
  }
  if(src!=undefined){
    return (
    <View style={{padding}}>
    <TouchableOpacity onPress={()=>{onPress()}} onPressIn={()=>{}}>
    <View style={[styles.container,style,{height,width}]} >
      <Image source={src} style={[styles.img,{height,width}]}/>
      <LinearGradient
        colors={gradient}
        style={[styles.background,{height,width}]}
        start={{x:0,y:0}}
        end={{x:1,y:0}}
        />
        <Text style={text_style}>{name}</Text>
    </View>
    </TouchableOpacity>
    </View>
   )
  }else{
    return (
      <View style={{padding}}>
      <TouchableOpacity onPress={()=>{onPress()}} onPressIn={()=>{}}>
      <View style={[styles.container,style,{height,width}]} >
        <LinearGradient
          colors={gradient}
          style={[styles.background,{height,width}]}
          start={{x:0,y:0}}
          end={{x:1,y:0}}
          />
          <Text style={text_style}>{name}</Text>
      </View>
      </TouchableOpacity>
      </View>
     )
  }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#EFEFEF",
        padding:15,
        borderRadius:15,
        elevation:5,
        justifyContent:'center',
        alignItems: 'center',
    },
    img:{
      position:'absolute',
      borderRadius:15,
      overflow:'hidden',
      opacity:0.5,
    },
    background:{
      position:'absolute',
      borderRadius:15,
      justifyContent:'center',
      alignItems: 'center',
    }
})

export default MessButtons