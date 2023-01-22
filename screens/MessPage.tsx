import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import InfoBlock from '../components/InfoBlock'
import PointerBlock from '../components/PointerBlock'
import { FoodMenuItem, RootStackParamList } from '../types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { FontAwesome } from '@expo/vector-icons'
import AddButton from '../components/AddButton'

const image = 'https://www.allrecipes.com/thmb/JcYuH_eletuQ22rxRC8aNj3oSd8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/45396-easy-pancakes-mfs-36-b720f5b89f854d01b9d0e92661fa4c2d.jpg';
const lunch_img = 'https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/02/01171428/YFL-Pav-Bhaji-3.jpg'
const dinner_img = 'https://curlytales.com/wp-content/uploads/2017/06/Shiv-Mishthan-Bhandar.jpg'
type Props = NativeStackScreenProps<RootStackParamList, 'messPage'>;

const breakfast: FoodMenuItem[] = [{name:'Pancakes1',src: image , rating:45},{name:'Pancakes2',src: image , rating:45},{name:'Pancakes3',src: image , rating:45},{name:'Pancakes4',src: image , rating:45},{name:'Pancakes5',src: image , rating:45}]
const lunch: FoodMenuItem[] = [{name:'Pav Bhaji1',src: lunch_img , rating:45},{name:'Pav Bhaji2',src: lunch_img , rating:45},{name:'Pav Bhaji3',src: lunch_img , rating:45},{name:'Pav Bhaji4',src: lunch_img , rating:45},{name:'Pav Bhaji5',src: lunch_img , rating:45}]
const dinner: FoodMenuItem[] = [{name:'Chole Bhature1',src: dinner_img , rating:45},{name:'Chole Bhature2',src: dinner_img , rating:45},{name:'Chole Bhature3',src: dinner_img , rating:45},{name:'Chole Bhature4',src: dinner_img , rating:45},{name:'Chole Bhature5',src: dinner_img , rating:45}]

const MessPage:React.FC<Props>= ({route,navigation})=>  {
  return (
    <View>

    <ScrollView>
      <View style={styles.container}>
        <View style={styles.backButton}>
          <FontAwesome name='angle-left' size={30} onPress={()=>{navigation.navigate("Home")}}></FontAwesome>
        </View>
          <Text style={styles.heading}>Today's Menu</Text>
          <View style={styles.menu}>
          <Text style={{fontSize:25}}>Breakfast</Text>
          <ScrollView style={styles.scrollMenu} horizontal={true} showsHorizontalScrollIndicator={false}>
          {
            breakfast.map((e)=>{
              return (<InfoBlock name={e.name} src={e.src} rating={e.rating} key={e.name}/>)
            })
          }
          </ScrollView>
        </View>
        <View style={styles.menu}>
          <Text style={{fontSize:25}}>Lunch</Text>
          <ScrollView style={styles.scrollMenu} horizontal={true} showsHorizontalScrollIndicator={false}>
          {
            lunch.map((e)=>{
              return (<InfoBlock name={e.name} src={e.src} rating={e.rating} key={e.name}/>)
            })
          }
          </ScrollView>
        </View><View style={styles.menu}>
          <Text style={{fontSize:25}}>Dinner</Text>
          <ScrollView style={styles.scrollMenu} horizontal={true} showsHorizontalScrollIndicator={false}>
          {
            dinner.map((e)=>{
              return (<InfoBlock name={e.name} src={e.src} rating={e.rating} key={e.name}/>)
            })
          }
          </ScrollView>
        </View>
        <Text style={styles.insights}>Insights</Text>
        <View style={{borderColor:"#000",borderWidth:1,width:60}}/>
        <PointerBlock message='the text and username (baisically a tweet kinda interface)' rating={52}/>
      </View>
    </ScrollView>
        <AddButton onPress={()=>{navigation.navigate("NewPost",{id:'Insight'})}}/>
    </View>
  )
}
export default MessPage

const styles = StyleSheet.create({
    container:{
        paddingTop:40,
        justifyContent:'center',
        alignItems:'center',
    },
    insights:{
      marginTop:30,
      fontSize:20,
    },
    heading:{
      fontSize:30,
      marginBottom:20
    },
    backButton:{
      position:'absolute',
      top: 40,
      left:30
    },
    menu:{
      flexDirection: 'column',
      marginLeft:30,
      marginRight:30,
      marginTop:10,

    },
    scrollMenu:{
      maxHeight:200,
    }
})