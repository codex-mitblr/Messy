import { FontAwesome } from '@expo/vector-icons'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { View,StyleSheet,Text, TextInput, TouchableOpacity } from 'react-native'
import MessButtons from '../components/MessButtons'
import { RootStackParamList } from '../types'

type Props = NativeStackScreenProps<RootStackParamList, "NewPost">

const NewPost:React.FC<Props> = ({route,navigation}) => {
    const [value, setvalue] = useState("")
  return (
    <View style={styles.container}>
            <FontAwesome style={{position:'absolute',top:40,left:30}} name='angle-left' size={30} onPress={()=>{navigation.navigate("Home")}}></FontAwesome>
        <View style={styles.heading}>
            <Text style={{fontSize:25}}>New {route.params.id}</Text>
        </View>
        <View style={styles.content}>
            <TextInput editable multiline autoFocus numberOfLines={5} style={styles.textinput} onChangeText={(text)=>{setvalue(text)}} value={value} placeholder={"write your review"}/>
            <View style={styles.panel}>
                <View></View>
                <View style={styles.submitbutton}>
                    <TouchableOpacity onPress={()=>{alert('submitted')}}>
                        <Text style={{color:"white"}}>SUBMIT</Text>
                    </TouchableOpacity>
                </View>   
            </View>
        </View>
        <Text>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    heading:{
        flexDirection:'row',
        padding:10,
        paddingTop:40,
        marginBottom:20,
    },
    textinput:{
        textAlign:'justify',
        textAlignVertical:'top',
        width:300,
        margin:10,
    },
    container:{
        alignItems:'center',
    },
    content:{
        borderColor:"#000",
        borderWidth:1,
        borderRadius:20,
    },
    panel:{
        flexDirection:'row',
        height:45,
        backgroundColor:"#ddd",
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        justifyContent:'space-between'
    },
    submitbutton:{
        backgroundColor:"#6C83FF",
        margin:7,
        alignItems:'center',
        justifyContent:'center',
        padding:5,
        borderRadius:10,
        width:70,
    }
})

export default NewPost