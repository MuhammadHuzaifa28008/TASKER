import { View, Text } from 'react-native'
import chatScreenStyles from '../../../../styles/screenStyles/chatScreen'
import mainStyles from '../../../../styles/mainStyles'
export default function DisplayState({ stateDescription, color }) {

    return (
        <View style={[{ flex: 1, }]}>
            <Text style={[mainStyles.buttonContainedText, { backgroundColor: 'transparent', color: { color, } }]}> {stateDescription}</Text>
        </View>
    )
}