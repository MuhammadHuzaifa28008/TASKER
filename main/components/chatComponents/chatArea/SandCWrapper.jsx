import { View, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import DisplayState from '../stateAndControl/DisplayState';
import CancelReqButton from '../stateAndControl/CancelReqButton';
import mainStyles from '../../../../styles/mainStyles';
import chatScreenStyles from '../../../../styles/screenStyles/chatScreen';

export default function SandCWrapper({ actionInProg, discardReq, isReqOn }) {

    const handleClick = () => {
        console.log('button clicked')
        discardReq(true);
    }
    return (
        <View style={[mainStyles.appBar, { padding: 0, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row', height: 'auto' }]}>
            <DisplayState stateDescription={actionInProg} color={overlay} />
            {/* {isReqOn && <CancelReqButton stop={handleClick} color={border} overlay={overlay} />} */}
        </View>

    );
}

const border = chatScreenStyles.colors.background;
const overlay = chatScreenStyles.colors.textSecondary;
