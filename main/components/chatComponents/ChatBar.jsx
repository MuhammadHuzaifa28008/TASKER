import { View, Text } from 'react-native'
import mainStyles from '../../../styles/mainStyles'
export default function ChatBar() {
    return (
        <View style={[mainStyles.appBar, customChatBarStyle]}>
            <Text style={mainStyles.cardHeader}>GPT-4 Turbo</Text>
            <Text style={mainStyles.cardContent}>Knowledge of world events until April 2023</Text>
        </View>
    )
}

const customChatBarStyle = {
    width: '100%',
    height: 'auto',
    padding: 10,
    marginBottom: 0,
    shadowColor: 'black',
    borderRadius: 2,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 5,
    shadowRadius: 2,

}