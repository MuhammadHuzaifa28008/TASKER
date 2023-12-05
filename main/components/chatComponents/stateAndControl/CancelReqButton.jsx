import { View, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import chatScreenStyles from '../../../../styles/screenStyles/chatScreen';
import mainStyles from '../../../../styles/mainStyles';
import { useEffect } from 'react';

export default function CancelReqButton({ stop, color, overlay }) {
  // useEffect(() => { stop(false) }, [])



  return (
    <View style={{ padding: 15, height: '100%', width: 'auto' }}>

      <TouchableOpacity
        onPress={stop} // use the bound function
        style={{ zIndex: 1, padding: 5, marginRight: 10 }}
        overlay={overlay}
      >
        <Entypo name="controller-stop" size={34} color={color} />
        <Text>hello</Text>
      </TouchableOpacity>



    </View>
  );
}


const btnBg = chatScreenStyles.colors.background