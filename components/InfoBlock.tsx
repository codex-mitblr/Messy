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
      <View>

      <View style={styles.container}>
          <Image style={styles.image} source={{uri: src}}/>
          <View style={{flexDirection:'column', alignItems:'center',justifyContent:'space-between',width:Dimensions.get('window').width-160}}>
            <View>
              <Text style={styles.name}>{name}</Text>
            </View>
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
      </View>
    )
  }

const styles= StyleSheet.create({
    container:{
      margin:10,
        borderRadius:15,
        flexDirection:'row',
        elevation:5,
        padding:20,
        backgroundColor:'#EFEFEF',
        width: Dimensions.get('screen').width-50,
        maxHeight:120,
    },
    image:{
      height:80,
      width:80,
    },
    name:{
      padding:10,
      fontSize:15,
    },
    like_button:{
      height:25,
      width:25,
    },

})

export default InfoBlock