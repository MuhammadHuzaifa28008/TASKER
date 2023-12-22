import { View, Text, TouchableHighlight } from 'react-native'
import mainStyles from '../../../styles/mainStyles.js'
import { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import chatScreenStyles from '../../../styles/screenStyles/chatScreen.js';

export default function MessageFromUs({ navigation }) {
    const [message, setMessage] = useState(`I am currently working on exciting features and improvements.`)
    return (
        <TouchableHighlight
            overlay={'transparent'}
            onPress={() => { navigation.navigate('upcoming') }}
            style={{ borderRadius: 10 }}
        >
            <View style={[mainStyles.card, { width: '85%', flexDirection: 'row' }]}>
                <View style={{ opacity: 0.1, padding: 5, justifyContent: 'space-between', marginRight: 10, width: 'auto' }}>
                    <FontAwesome name="exclamation" size={24} color={color} />
                </View>
                <Text style={[mainStyles.appBarText, { textAlign: 'left', flex: 1 }]}>{message}</Text>
                <Text style={[mainStyles.cardHeader, { textAlign: 'center', flex: 1 }]}>Stay Tuned</Text>
            </View>
        </TouchableHighlight>
    )
}
const color = chatScreenStyles.colors.primary