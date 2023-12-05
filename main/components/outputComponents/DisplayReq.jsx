import { View, Text } from 'react-native'
import React from 'react'
import mainStyles from '../../../styles/mainStyles'
import chatScreenStyles from '../../../styles/screenStyles/chatScreen'



export default function DisplayReq({ reqData }) {
    return (
        <View style={[mainStyles.drawer, {
            marginTop: 5, marginBottom: 10, alignItems: 'justify', width: '100%'
        }]}>
            {/* <Text style={[mainStyles.cardHeader]}>DisplayReq</Text> */}
            < Text Text style={[mainStyles.drawerText, { textAlign: 'left', fontSize: 14, color: textColor, letterSpacing: 0.1, }]} > {reqData}</Text >
        </View >
    )
}

const textColor = chatScreenStyles.colors.textSecondary;