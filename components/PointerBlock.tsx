import React, { useState } from 'react';
import { Dimensions, Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
const like = require('../assets/like.png')
const dislike = require('../assets/dislike.png')
const like_green = require('../assets/like-green.png')
const dislike_red = require('../assets/dislike-red.png')

interface Props{
    src?:ImageSourcePropType,
    message: string,
    rating: number,
}

export default function PointerBlock({src,message,rating}:Props) {
  const [color, setColor] = useState('grey')
  if (src!=undefined)
  return (
    <View style={styles.container}>
        {<Image style={styles.image} source={src}/>}
        <Text>{message}</Text>
        <View style={{flexDirection:'row', width:Dimensions.get('window').width-160,justifyContent:'space-around'}}>
              <TouchableOpacity style={{alignItems:"center"}} onPress={()=>setColor('green')}>
                <Image style={styles.like_button} source={(color=='green')? like_green:like}/>
                <Text style={{fontSize:10, color:(color=='green')? 'green':'grey'}}>{rating}%</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{alignItems:'center'}} onPress={()=>setColor('red')}>
                <Image style={styles.like_button} source={(color=='red')? dislike_red:dislike}/>
                <Text style={{fontSize:10, color:(color=='red')? 'red':'grey'}}>{100 - rating}%</Text>
              </TouchableOpacity>
        </View>
    </View>
  )
  else
  return (
    <View style={{padding:20}}>
        <View style={styles.container}>
        <Text>{message}</Text>
        <View style={{flexDirection:'row', width:Dimensions.get('window').width-160,justifyContent:'space-around'}}>
              <TouchableOpacity style={{alignItems:"center"}} onPress={()=>setColor('green')}>
                <Image style={styles.like_button} source={(color=='green')? like_green:like}/>
                <Text style={{fontSize:10, color:(color=='green')? 'green':'grey'}}>{rating}%</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{alignItems:'center'}} onPress={()=>setColor('red')}>
                <Image style={styles.like_button} source={(color=='red')? dislike_red:dislike}/>
                <Text style={{fontSize:10, color:(color=='red')? 'red':'grey'}}>{100 - rating}%</Text>
              </TouchableOpacity>
        </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        borderRadius:15,
        elevation:5,
        backgroundColor:"#EFEFEF",
        width: Dimensions.get('window').width-50,
        alignItems:'center',
        justifyContent:'center',
    },
    image:{
        height:100,
        width:100,
    },
    text:{
      padding:10
    },
    like_button:{
      height:25,
      width:25,
    },
})