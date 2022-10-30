import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet,Text,View, ScrollView} from 'react-native';
import MessButtons from '../components/MessButtons';
import ToggleMess from '../components/ToggleMess';
import { RootStackParamList } from '../types';
const icon = require('../assets/Icon.png')

type Props = NativeStackScreenProps<RootStackParamList, "Home">;
const HomePage:React.FC<Props>= ({route,navigation})=>{
const a =['Group A','Group B','Group C','Group D','Group E','Group F','Group G','Group H',]

  return(
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
      <MessButtons name='Veg Mess' padding={20} height={150} width={300} onPress={()=> {navigation.navigate("messPage",{mess:"veg-mess"})}}/>
      <MessButtons name='Non Veg Mess'padding={20} height={150} width={300} onPress={()=> {navigation.navigate("messPage",{mess:"non-veg-mess"})}}/>
      <Text>Mess I am currently in: </Text>
      <ToggleMess/>
      <Text style={{paddingBottom:10}}>Groups</Text>
      {
        a.map((e)=>{
          return <MessButtons name={e} padding={5} width={300} onPress={()=> {navigation.navigate('GroupPage',{groupID:`${e}`})}} key={e}/>
        })
      }
      <MessButtons name='Create a group' padding={20} width={300} onPress={()=> alert('creat a group pressed')}/>
      <MessButtons name='Send feedback to caterer' padding={5} width={300} onPress={()=> alert('feedback pressed')}/>
      <MessButtons name='Send app feedback or ideas' padding={5} width={300} onPress={()=> alert('ideas pressed')}/>
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#fff',
  },
  vegmess:{
    backgroundColor:"green",
    flex:0.5,
    padding: 20,
  },
})

export default HomePage;


/*
      <View style={{flexDirection:'row'}}>
      <MessButtons name='VEG'padding={20}onPress={()=> alert('veg pressed')}/>
      <MessButtons name='NON VEG'padding={20}onPress={()=> alert('non veg pressed')}/>
      </View>*/