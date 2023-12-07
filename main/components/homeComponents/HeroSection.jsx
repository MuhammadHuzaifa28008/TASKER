import { View, Text } from 'react-native'
import mainStyles from '../../../styles/mainStyles'
// import { useFonts } from 'expo-font';
import { useEffect } from 'react';



export default function HeroSection() {


    useEffect(() => {

    }, [])

    return (
        <View style={[mainStyles.appBar, heroSecBarCustomStyle]}>
            <View style={{ flex: 1 }}>
                <Text style={[mainStyles.cardTitleText, logoText]}>Tasker</Text>
                <Text style={[mainStyles.appBarText]}>From student for students</Text>
            </View>
            <View style={[mainStyles.card, appBarCardCustomStyles, { width: '100%' }]}>
                <Text style={[mainStyles.cardHeader]}>Text from Image</Text>
                <Text style={[mainStyles.cardHeader]}>GPT-4  Turbo</Text>
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

const logoText = {

    // fontFamily: 'logoFont'
}