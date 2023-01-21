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
                    <View style={{alignContent:'center',marginBottom:5}}>
                        <Text style={styles.name}>{name}</Text>
                    </View>
                    <View style={{ alignContent:'center'}}>
                    <Text style={{}}>Currently in:</Text>
                    <View style={{backgroundColor: mess=='VEG'? '#14FF00':mess=="NONE"? "white":'red', borderRadius:12,padding:2,margin:3,borderColor:"#000",borderWidth:1}}>
                        <Text style={{textAlign:'center', fontSize:12}}> {mess}</Text>
                    </View>
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
          padding:10,
          backgroundColor:'#EFEFEF',
          width: Dimensions.get('screen').width-50,
          maxHeight:150,
      },
      image:{
        height:100,
        width:100,
        borderColor:"#000",
        borderWidth:1,
        borderRadius:20,
      },
      name:{
        fontSize:15
      },
      info:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-around',
        width:Dimensions.get('window').width-160,
    }
})