import React from 'react'
import {View, Image, Text, StyleSheet, Dimensions} from 'react-native'

interface Props{
    name: string
    src: string
    mess: string
}

export default function MemberBlock({name,src,mess}:Props) {
  return (
        <View style={{marginVertical:10}}>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri:src}}/>
                <View style={styles.info}>
                    <View style={{alignContent:'center'}}>
                        <Text style={styles.name}>{name}</Text>
                    </View>
                    <View style={{alignContent:'center'}}>
                    <Text style={styles.name}>Mess: {mess}</Text>
                    </View>
                </View>
            </View>
        </View>
  )
}


const styles = StyleSheet.create({
    container:{
          borderRadius:15,
          flexDirection:'row',
          elevation:5,
          padding:20,
          backgroundColor:'#EFEFEF',
          width: Dimensions.get('screen').width-50,
          maxHeight:120,
      },
      image:{
        height:60,
        width:60,
      },
      name:{
      },
      info:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-around',
        width:Dimensions.get('window').width-160,
    }
})