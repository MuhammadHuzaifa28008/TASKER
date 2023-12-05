import { View, Text } from 'react-native'
import mainStyles from '../../../styles/mainStyles'

export default function HeroSection() {
    return (
        <View style={[mainStyles.appBar, heroSecBarCustomStyle]}>
            <View style={{ flex: 1 }}>
                <Text style={[mainStyles.cardTitleText,]}>Tasker</Text>
                <Text style={[mainStyles.appBarText]}>From student for students</Text>
            </View>
            <View style={[mainStyles.card, appBarCardCustomStyles, { width: '100%' }]}>
                <Text style={[mainStyles.cardHeader]}>Text from Image</Text>
                <Text style={[mainStyles.cardHeader]}>GPT-4 </Text>
            </View>
        </View>
    )
}

const heroSecBarCustomStyle = {
    jsutiifyContent: 'space-evenly',
    paddingTop: 20,
    paddingBottom: 20,
    height: '45%',
    width: '100%',
    fontWeight: "bold",
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
}

const appBarCardCustomStyles = {
    height: 'auto',
    maxHeight: '70%',
    width: 'auto',
    maxWidth: '80%'

}