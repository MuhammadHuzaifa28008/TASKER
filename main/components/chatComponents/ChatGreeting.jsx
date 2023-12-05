import { View, Text, ScrollView } from 'react-native'
import mainStyles from '../../../styles/mainStyles'
import chatScreenStyles from '../../../styles/screenStyles/chatScreen'
export default function ChatGreeting() {
    return (
        <View style={[mainStyles.card, chatScreenStyles.greetingCardCustomStyle,]}>
            {/* <View style={[mainStyles.cardHeader,]}> */}
            <ScrollView>

            <Text style={[mainStyles.cardTitleText, chatScreenStyles.greetingTextCustomStyle, {}]}> Text from Images</Text>
            <Text style={[mainStyles.cardContentText, chatScreenStyles.greetingTextCustomStyle]}> Clear images get better results</Text>
            </ScrollView>
            {/* </View> */}
        </View>
    )
}