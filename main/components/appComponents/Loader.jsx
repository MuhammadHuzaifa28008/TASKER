import { View, Text } from 'react-native'
import mainStyles from '../../../styles/mainStyles'
import chatScreenStyles from '../../../styles/screenStyles/chatScreen'
import useNetworkStatus from '../../utils/hooks/useNetworkStatus'
import AppBarErr from '../errorComponents/AppBarErr'
import { MaterialIcons } from '@expo/vector-icons';
import { useEffect } from 'react';

export default function Loader({ updates }) {

    const { isConnected, networkError } = useNetworkStatus();
    useEffect(() => {

    }, [])
    return (
        <>
            {!isConnected && <AppBarErr message={networkError} />}
            <View style={mainStyles.container}>
                <View style={[mainStyles.card, { marginBottom: 10 }]}>
                    <Text style={[mainStyles.cardTitleText, { fontSize: 48 }]}>
                        Tasker
                    </Text>
                    <Text style={[mainStyles.cardContent]}>
                        AI powerred App for students
                    </Text>
                </View>
                {updates &&
                    <View style={[mainStyles.appBar, { borderRadius: 10, width: '80%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', padding: 10 }]}>
                        <MaterialIcons name="announcement" size={24} color={color} />
                        <Text style={[mainStyles.appBarText]}>New updates are available</Text>


                    </View>}
            </View >
        </>
    )

}
const color = chatScreenStyles.colors.textPrimary