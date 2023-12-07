import { View, Text } from 'react-native'
import mainStyles from '../../../styles/mainStyles.js'
import { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import chatScreenStyles from '../../../styles/screenStyles/chatScreen.js';

export default function MessageFromUs() {
    const [message, setMessage] = useState(`It may not be the best but it will be.`)
    return (

        <View style={[mainStyles.card, { width: '85%', flexDirection: 'row' }]}>
            <View style={{ opacity: 0.1, padding: 5, marginRight: 10, width: 'auto' }}>
                <FontAwesome name="exclamation" size={24} color={color} />
            </View>
            <Text style={[mainStyles.appBarText, { textAlign: 'left', flex: 1 }]}>{message}</Text>
            <Text style={[mainStyles.cardHeader, { textAlign: 'left', flex: 1 }]}>Stay Tuned</Text>
        </View>

    )
}
const color = chatScreenStyles.colors.primary