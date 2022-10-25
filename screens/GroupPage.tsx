import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text } from 'react-native'
import { RootStackParamList } from '../types'


type Props = NativeStackScreenProps<RootStackParamList, "GroupPage">

const GroupPage:React.FC<Props> = ({route}) => {
    return (
        <View>
            <Text>
                GroupPage, {route.params.groupID}
            </Text>
        </View>
    )
}

export default GroupPage