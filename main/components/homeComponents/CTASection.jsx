
import { View, TouchableHighlight } from 'react-native'
import mainStyles from '../../../styles/mainStyles'
import GoToFeedBack from './CTAComponents/GoToFeedBack'
import StartChat from './CTAComponents/StartChat'


export default function CTASection({ navigation }) {
    return (
        <View style={[mainStyles.card, sectionCardCustomStyle]}>
            <GoToFeedBack navigation={navigation} />
            <StartChat navigation={navigation} />
        </View>
    )
}

const sectionCardCustomStyle = {
    justifyContent: 'space-evenly',
    width: '100%',
    height: '35%',
    padding: 20
}
