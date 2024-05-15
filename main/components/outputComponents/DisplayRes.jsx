import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import mainStyles from '../../../styles/mainStyles';
import chatScreenStyles from '../../../styles/screenStyles/chatScreen';

export default function DisplayRes({ resData }) {
    const [copied, setCopied] = useState(false);

    const handleCopyText = async () => {
        try {

            await Clipboard.setStringAsync(resData);
            setCopied(true);


        } catch (error) {
            // Handle the error appropriately, e.g., log it or display an alert
            console.error("Error copying text:", error);
        }
        finally {
            // Reset the copied state after a delay
            setTimeout(() => {
                setCopied(false);
            }, 2000);
        }
    };


    return (
        <View style={[mainStyles.card, { marginTop: 5, marginBottom: 10, width: '100%', backgroundColor: 'transparent' }]}>
            <Text style={[mainStyles.cardContentText, { fontSize: 16, textAlign: 'left', color: textColor }]}>{resData}</Text>

            <TouchableOpacity overlay={overlay} onPress={handleCopyText} style={[{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', width: 'auto', }]}>
                {copied ? (
                    <MaterialIcons name="done" size={24} color={textColor} />
                ) : (
                    <Ionicons name="copy" size={24} color={textColor} />
                )}
            </TouchableOpacity>
        </View>
    );
}

const textColor = chatScreenStyles.colors.background;
const overlay = chatScreenStyles.colors.secondary;
