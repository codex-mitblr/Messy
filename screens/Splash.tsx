import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react'
import { StyleSheet, Text, Animated, Easing, Dimensions} from 'react-native'
import { RootStackParamList } from '../types';
const logo = require('../assets/splash.png')


type Props = NativeStackScreenProps<RootStackParamList, "Splash">;
const Splash:React.FC<Props>= ({route,navigation})=>{
    const bounce = new Animated.Value(500)
    const resize = new Animated.Value(1)
    const opacity = new Animated.Value(1)
    useEffect(() => {
        Animated.timing(bounce,{
          toValue:0,
          duration:800,
          easing:Easing.elastic(2),
          useNativeDriver:true,
        }).start()
        Animated.timing(resize,{
            delay:1000,
            toValue:25,
            useNativeDriver:true,
            duration:1000,
        }).start()
        Animated.timing(opacity,{
            delay:1000,
            useNativeDriver:true,
            toValue:.3,
            duration:1000,
        }).start()
        setTimeout(() => {
            navigation.navigate("LoginPage")
        }, 1400);
      }, [])

  return (
    <Animated.View style={[styles.container,{transform:[{translateY: bounce}]}]}>
        <Animated.Image style={[styles.logo,{transform:[{scale:resize}],opacity:opacity}]} source={logo}/>
        <Text style={styles.text}>Messy</Text>
    </Animated.View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        height:100,
        width:100,
        elevation:9,
        backgroundColor:'#FF8A00',
        borderRadius:50,
    },
    text:{
        fontSize:25,
        color:"#FF8A00",
        fontWeight:'bold',
    }
})

export default Splash