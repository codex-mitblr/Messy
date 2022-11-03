import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import InfoBlock from '../components/InfoBlock'
import PointerBlock from '../components/PointerBlock'
import { FoodMenuItem, RootStackParamList } from '../types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

const image = 'https://scontent.fblr18-1.fna.fbcdn.net/v/t1.6435-9/180978949_314228950059549_1005358403722529104_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hRPCaS5gPhEAX-whruq&_nc_ht=scontent.fblr18-1.fna&oh=00_AfB4H5wzCbOTKpMdg43v5JzuXvmY7FV3IHuLdQODKcBzag&oe=63855C0E';

type Props = NativeStackScreenProps<RootStackParamList, 'messPage'>;

const food: FoodMenuItem[] = [{name:'Chole Bhature',src: image , rating:45},{name:'Shahi Paneer',src: image , rating:45},{name:'Bhindi',src: image , rating:45}]

const MessPage:React.FC<Props>= ({route,navigation})=>  {
  return (
    <View style={styles.container}>
        <Text>Number of people in the mess: {}</Text>
        {
          food.map((e)=>{
            return (<InfoBlock name={e.name} src={e.src} rating={e.rating} key={e.name}/>)
          })
        }
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