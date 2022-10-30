import React, { useRef, useState } from 'react'
import { Animated, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const ScreenWidth = Dimensions.get('window').width
function ToggleMess() {
    const [mess , setMess] = useState('NONE')
    const pos= useRef(new Animated.Value(50)).current;
    const trasistionButton = (x:number)=>{
        Animated.timing(pos,{
            toValue: x,
            useNativeDriver: true,
            duration:200
        }).start()
    }
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.TouchableOpacity} onPress={()=>{setMess('VEG'), trasistionButton(0)}}>
            <Text>VEG</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TouchableOpacity} onPress={()=>{setMess('NONE'), trasistionButton(styles.container.width/3)}}>
            <Text>NONE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TouchableOpacity} onPress={()=>{setMess('NON-VEG'), trasistionButton(2/3*styles.container.width)}}>
            <Text>NON-VEG</Text>
        </TouchableOpacity>
        <Animated.View style={[styles.anim_view, {transform: [{translateX:pos}]} ]}>
            <Text>{mess}</Text>
        </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#EFEFEF",
        elevation:-5,
        borderRadius:15,
        margin:10,
        flexDirection:'row',
        width: ScreenWidth*0.8,
    },
    TouchableOpacity:{
        padding:10,
        flex:1/3,
        alignItems:'center'
    },
    anim_view:{
        backgroundColor:'white',
        position:'absolute',
        borderRadius:15,
        padding:9,
        elevation:3,
        width: 0.8*ScreenWidth/3,
        alignItems:'center'
    },
})

export default ToggleMess
