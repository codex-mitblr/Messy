import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'
import { RootStackParamList } from '../types'


type Props = NativeStackScreenProps<RootStackParamList, "GroupPage">

const GroupPage:React.FC<Props> = ({route,navigation}) => {
    return (
        <View>
            <Text>
              Members:
            </Text>
            <Button onPress={()=>{}}>
                Send food notifications
            </Button>
        </View>
    )
}

export default GroupPage