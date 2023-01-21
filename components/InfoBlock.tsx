import React, { useState } from 'react'
import { Image, ImageSourcePropType, StyleSheet, View,Text, TouchableOpacity, Dimensions } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

interface Props{
    src: string,
    name: string,
    rating: number,
}

function InfoBlock({src,name, rating}:Props) {
  const [color, setColor] = useState('grey')
    return (
        <View style={styles.container}>
          <Image style={styles.image} source={{uri: src}}/>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.rating}>
            <TouchableOpacity style={{alignItems:'center'}} onPress={()=>setColor('green')}>
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
  }

const styles= StyleSheet.create({
    container:{
        width:100,
        margin:5,
        marginRight:20,
        borderRadius:15,
        alignItems:'center',
        flexDirection:'column',
        backgroundColor:'#EFEFEF',
    },
    image:{
      height:100,
      width:100,
      borderColor:'#000',
      borderWidth:1,
      borderRadius:10,
    },
    name:{
      padding:10,
      fontSize:15,
      textAlign:'center'
    },
    rating:{
      width:100,
      flexDirection:'row',
      justifyContent:'space-around'
    }

})

export default InfoBlock