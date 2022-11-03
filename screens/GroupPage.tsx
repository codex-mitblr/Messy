import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { Button } from 'react-native-paper'
import MemberBlock from '../components/MemberBlock'
import { MemberInfo, RootStackParamList } from '../types'
const image = 'https://scontent.fblr18-1.fna.fbcdn.net/v/t1.6435-9/180978949_314228950059549_1005358403722529104_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hRPCaS5gPhEAX-whruq&_nc_ht=scontent.fblr18-1.fna&oh=00_AfB4H5wzCbOTKpMdg43v5JzuXvmY7FV3IHuLdQODKcBzag&oe=63855C0E'

type Props = NativeStackScreenProps<RootStackParamList, "GroupPage">

const member: MemberInfo[] = [{name:'Chandu', src:image, mess:'Veg Mess'},{name:'Asstits', src:image, mess:'Veg Mess'},{name:'Shekhar', src:image, mess:'Veg Mess'}]

const GroupPage:React.FC<Props> = ({route,navigation}) => {
    return (
        <View>
            <View style={styles.members}>
                <Text>Members:</Text>
            </View>
            <View style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
            {
                member.map((e)=>{
                    return (<MemberBlock name={e.name} src={e.src} mess={e.mess}/>)
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
    members:{
        padding:10
    },
})

export default GroupPage