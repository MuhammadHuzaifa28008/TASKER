import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import mainStyles from '../../../styles/mainStyles'
import chatScreenStyles from '../../../styles/screenStyles/chatScreen'
import { Ionicons } from '@expo/vector-icons';


export default function DisplayReq({ reqData, setTxt }) {

    const handleRetry = () => {
        setTxt(reqData);
        // console.log('handeling retry')
    }
    return (
        <View style={[mainStyles.drawer, {
            marginTop: 5, marginBottom: 10, alignItems: 'justify', width: '100%'
        }]}>
            {/* <Text style={[mainStyles.cardHeader]}>DisplayReq</Text> */}
            < Text Text style={[mainStyles.cardContentText, { textAlign: 'left', fontSize: 14, color: textColor, letterSpacing: 0.1, }]} > {reqData}</Text >
            <TouchableOpacity overlay={overlay} onPress={handleRetry} style={[{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', width: 'auto', }]}>
                <Ionicons name="refresh" size={24} color={textColor} />

            </TouchableOpacity>
        </View >
    )
}

const textColor = chatScreenStyles.colors.textPrimary;
const overlay = chatScreenStyles.colors.secondary;