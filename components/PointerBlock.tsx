import React, { useState } from 'react';
import { Dimensions, Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
interface Props{
    src?:string,
    message: string,
    rating: number,
}

export default function PointerBlock({src,message,rating}:Props) {
  const [color, setColor] = useState('grey')
  if (src!=undefined)
  return (
    <View style={styles.container}>
        {<Image style={styles.image} source={{uri:src}}/>}
        <Text>{message}</Text>
        <View style={{flexDirection:'row', width:Dimensions.get('window').width-160,justifyContent:'space-around'}}>
              <TouchableOpacity style={{alignItems:"center"}} onPress={()=>setColor('green')}>
              <FontAwesome name="thumbs-up" size={24} color={color=="green"?'green':"grey"} />
                <Text style={{fontSize:10, color:(color=='green')? 'green':'grey'}}>{rating}%</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{alignItems:'center'}} onPress={()=>setColor('red')}>
              <FontAwesome name="thumbs-down" size={24} color={color=="red"?'red':"grey"} />
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
              <FontAwesome name="thumbs-up" size={24} color={color=="green"?'green':"grey"} />
                <Text style={{fontSize:10, color:(color=='green')? 'green':'grey'}}>{rating}%</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{alignItems:'center'}} onPress={()=>setColor('red')}>
              <FontAwesome name="thumbs-down" size={24} color={color=="red"?'red':"grey"} />
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