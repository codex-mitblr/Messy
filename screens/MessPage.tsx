import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import InfoBlock from '../components/InfoBlock'
import PointerBlock from '../components/PointerBlock'
import { RootStackParamList } from '../types'
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'

const image = require('../assets/Icon.png');

type Props = NativeStackScreenProps<RootStackParamList, 'messPage'>;

const MessPage:React.FC<Props>= ({route,navigation})=>  {
  return (
    <View style={styles.container}>
        <Text>Number of people in the mess: {}</Text>
        <InfoBlock name='Chole Bhature' src={image} rating={45}/>
        <InfoBlock name='Shahi Paneer' src={image} rating={43}/>
        <InfoBlock name='Bhindi' src={image} mess="veg"/>
        <Text>Pointers on food</Text>
        <PointerBlock message='the text and username (baisically a tweet kinda interface)' rating={52}/>
    </View>
  )
}
export default MessPage

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center'
    }
})