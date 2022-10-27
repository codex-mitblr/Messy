import React from 'react';
import {StyleSheet,Text,View, ScrollView} from 'react-native';
import MessButtons from '../components/MessButtons';
import InfoBlock from '../components/InfoBlock';
import PointerBlock from '../components/PointerBlock';
const icon = require('../assets/Icon.png')
export default function HomePage(){
  return(
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
      <MessButtons name='Veg Mess' padding={20} height={150} width={300} onPress={()=> alert('veg mess pressed')}/>
      <MessButtons name='Non Veg Mess'padding={20} height={150} width={300} onPress={()=> alert('non veg mess pressed')}/>
      <Text>Mess I am currently in: </Text>
      <View style={{flexDirection:'row'}}>
      <MessButtons name='VEG'padding={20}onPress={()=> alert('veg pressed')}/>
      <MessButtons name='NON VEG'padding={20}onPress={()=> alert('non veg pressed')}/>
      </View>
      <Text style={{paddingBottom:10}}>Groups</Text>
      <MessButtons name='Group A' padding={5} width={300} onPress={()=> alert('group a pressed')}/>
      <MessButtons name='Group B' padding={5} width={300} onPress={()=> alert('group b pressed')}/>
      <MessButtons name='Group C' padding={5} width={300} onPress={()=> alert('group c pressed')}/>
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