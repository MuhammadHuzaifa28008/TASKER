import { View, Text } from 'react-native'
import mainStyles from '../../../styles/mainStyles'
import useNetworkStatus from '../../utils/hooks/useNetworkStatus'
import AppBarErr from '../errorComponents/AppBarErr'
import { useEffect } from 'react';

export default function Loader() {

    const { isConnected, networkError } = useNetworkStatus();
    useEffect(()=>{

    },[])
    return (
        <>
            {!isConnected && <AppBarErr message={networkError} />}
            <View style={mainStyles.container}>
                <View style={[mainStyles.card, {}]}>
                    <Text style={[mainStyles.cardTitleText, { fontSize: 48 }]}>
                        Tasker
                    </Text>
                    <Text style={[mainStyles.cardContent]}>
                        AI powerred App for students
                    </Text>
                </View>
            </View>
        </>
    )
}