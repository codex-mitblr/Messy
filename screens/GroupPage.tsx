import { FontAwesome } from '@expo/vector-icons'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { Button } from 'react-native-paper'
import MemberBlock from '../components/MemberBlock'
import { MemberInfo, RootStackParamList } from '../types'
const image1 = 'https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg'
const image2 = 'https://i.pinimg.com/474x/97/aa/84/97aa847d061a14894178805f1d551500.jpg'
const image3 = 'https://1fid.com/wp-content/uploads/2022/06/cool-profile-picture-2-1024x1024.jpg'
type Props = NativeStackScreenProps<RootStackParamList, "GroupPage">

const member: MemberInfo[] = [{name:'Chandu', src:image1, mess:'VEG'},{name:'Astitva', src:image2, mess:'NONE'},{name:'Shekhar', src:image3, mess:'NON-VEG'}]

const GroupPage:React.FC<Props> = ({route,navigation}) => {
    return (
        <View>
            <View style={styles.heading}>
                <FontAwesome style={{position:'absolute',top:40,left:30}} name='angle-left' size={30} onPress={()=>{navigation.navigate("Home")}}></FontAwesome>
                <Text style={{fontSize:25}}>Group Info</Text>
            </View>
            <View style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
            {
                member.map((e)=>{
                    return (<MemberBlock name={e.name} src={e.src} mess={e.mess} key={e.name}/>)
                })
            }
            </View>
            <Button onPress={()=>{}}>
                Send food notifications
            </Button>
        </View>
    )
}


const styles = StyleSheet.create({
    heading:{
        justifyContent:'center',
        flexDirection:'row',
        padding:10,
        paddingTop:40,
        textAlign:'center',
    },
})

export default GroupPage