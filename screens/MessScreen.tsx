import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text } from 'react-native'
import { MessScreenInput, RootStackParamList } from '../types'

type Props = NativeStackScreenProps<RootStackParamList, 'messPage'>;

const MessScreen:React.FC<Props>=({route})=> {
  return (
    <View>
      <Text>
      {JSON.stringify(route.params.mess)}
      </Text>
    </View>
  )
}

export default MessScreen