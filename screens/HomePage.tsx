import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import {ImageBackground,StyleSheet,Text,View, ScrollView,Animated, Easing} from 'react-native';
import AddButton from '../components/AddButton';
import MemberBlock from '../components/MemberBlock';
import MessButtons from '../components/MessButtons';
import ToggleMess from '../components/ToggleMess';
import { RootStackParamList } from '../types';
const veg = require("../assets/veg.jpg")
const nonveg = require("../assets/non-veg.jpg")
const plate = require("../assets/bg.png")

type Props = NativeStackScreenProps<RootStackParamList, "Home">;
const HomePage:React.FC<Props>= ({route,navigation})=>{
  const a =['GROUP A', 'GROUP B', 'GROUP C']
  let rotateValueHolder = new Animated.Value(0);

  const startImageRotateFunction = () => {
    rotateValueHolder.setValue(0);
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 7000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => startImageRotateFunction());
  };

  const RotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  startImageRotateFunction();

  const bounce = new Animated.Value(500)
  
  useEffect(() => {
    Animated.timing(bounce,{
      toValue:0,
      duration:2000,
      easing:Easing.elastic(5),
      useNativeDriver:true,
    }).start()
  }, [])
  
  return(
    <View style={styles.container}>
    <Animated.View style={[styles.container,{transform:[{translateY:bounce}]}]}>
      <View style={{backgroundColor:'#f8d869',height:1000,position:'absolute',width:1000,top:-500}}/>
      <ScrollView style={{}} showsHorizontalScrollIndicator={false}>
        <View style={styles.head}>
          <Animated.Image source={plate} style={[styles.bgimage, {    transform: [{rotate: RotateData}]}]}/>
          <View style={styles.body}>
            <Text style={{marginTop:25}}>Mess I am currently in: </Text>
            <ToggleMess values={['VEG','NONE','NON-VEG']} init_pos={1}/>
            <MessButtons src={veg} gradient={['#14FF00','transparent']} style={styles.vegmess} text_style={styles.vegmess_text} name='Veg Mess' padding={20} height={100} width={300} onPress={()=> {navigation.navigate("messPage",{mess:"veg-mess"})}}/>
            <MessButtons src={nonveg} style={styles.vegmess} text_style={styles.vegmess_text} gradient={['red','transparent']} name='Non Veg Mess' padding={20} height={100} width={300} onPress={()=> {navigation.navigate("messPage",{mess:"non-veg-mess"})}}/>
            <Text style={{marginTop:20,fontSize:20}}>GROUPS</Text>
            <View style={{marginBottom:20,borderColor:"#000",borderWidth:0.75 ,width:70,height:0.1}}></View>
            {
              a.map((e)=>{
                return <MessButtons name={e} padding={5} width={300} onPress={()=> {navigation.navigate('GroupPage',{groupID:`${e}`})}} key={e}/>
              })
            }
            <Text style={{paddingTop:30,paddingBottom:10,fontSize:15}}>Feedback</Text>
            <MessButtons name='Send feedback to caterer' padding={5} width={300} onPress={()=> {navigation.navigate('NewPost',{id:'Feedback'})}}/>
            <MessButtons name='Send app feedback or ideas' padding={5} width={300} onPress={()=> {navigation.navigate('NewPost',{id:'Ideas'})}}/>
          </View>
        </View>
      </ScrollView>
      <AddButton onPress={()=>alert("Creat a group pressed")}/>
      </Animated.View>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
  },
  body: {
    borderTopLeftRadius:50,
    borderTopRightRadius:50,
    marginTop:250,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#fff',
  },
  vegmess:{
    alignItems:'flex-start',
  },
  vegmess_text:{
    margin:10,
    fontSize:30,
  },
  head:{
    justifyContent:'center',
    overflow:'visible'
  },
  bgimage:{
    height:360,
    width:360,
    resizeMode:'contain',
    position:'absolute',
    top:'6%',
    left:'2%',
    margin:5,
  }
})

export default HomePage;
