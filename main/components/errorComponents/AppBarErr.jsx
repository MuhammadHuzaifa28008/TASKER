import { View, Text } from 'react-native'
import mainStyles from '../../../styles/mainStyles'

export default function AppBarErr({ message }) {
  return (
    <View style={[mainStyles.appBar, { backgroundColor: 'red', height: 'auto' }]}>
      <Text style={[mainStyles.buttonOutlinedText, { color: 'white', textAlign: 'center' }]}>{message}</Text>
    </View>
  )
}