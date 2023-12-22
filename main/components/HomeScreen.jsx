import { SafeAreaView, View, Text, Button, TouchableOpacity } from 'react-native'
import mainStyles from '../../styles/mainStyles'
import HeroSection from './homeComponents/HeroSection'
import MessageFromUs from './homeComponents/MessageFromUs';
import CTASection from './homeComponents/CTASection';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';




export default function HomeScreen({ navigation }) {

    return (
        <SafeAreaView style={[mainStyles.container, { flex: 1, justifyContent: 'space-between' }]}>
            <HeroSection style={{ flex: 1 }} navigation={navigation} />
            {/* <TouchableOpacity
                overlay={'transparent'}
                onPress={() => { navigation.navigate('upcoming') }}
            > */}
            <MessageFromUs navigation={navigation} />
            {/* </TouchableOpacity> */}
            <CTASection navigation={navigation} />
        </SafeAreaView>
    )
}