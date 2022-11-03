import React, { useRef, useState } from 'react'
import { Animated, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props{
    values: string[],
    init_pos: number
}


const ScreenWidth = Dimensions.get('window').width
function ToggleMess({values,init_pos}:Props) {
    const [mess , setMess] = useState((values[init_pos]))
    const pos= useRef(new Animated.Value(styles.container.width/values.length)).current;
    const trasistionButton = (x:number)=>{
        Animated.timing(pos,{
            toValue: x,
            useNativeDriver: true,
            duration:200
        }).start()
    }
  return (
    <View style={styles.container}>
        {
            values.map((e)=>{
                return (<TouchableOpacity style={[styles.TouchableOpacity, {flex:1/values.length}]} onPress={()=>{setMess(e), trasistionButton(values.indexOf(e)/values.length*styles.container.width)}} key={e}>
                            <Text>{e}</Text>
                        </TouchableOpacity>)
            })
                
        }
        
        <Animated.View style={[styles.anim_view, {transform: [{translateX:pos}], width: 0.8*ScreenWidth/values.length} ]}>
            <Text>{mess}</Text>
        </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#EFEFEF",
        borderRadius:15,
        margin:10,
        flexDirection:'row',
        width: ScreenWidth*0.8,
    },
    TouchableOpacity:{
        padding:10,
        alignItems:'center'
    },
    anim_view:{
        backgroundColor:'white',
        position:'absolute',
        borderRadius:15,
        padding:9,
        elevation:3,
        alignItems:'center'
    },
})

export default ToggleMess
