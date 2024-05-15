// CaptureImg.js
import React, { useState } from 'react';
import { TouchableHighlight, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import mainStyles from '../../../../styles/mainStyles';
import takeImg from '../../../../assets/icons/takeImg.png'
import chatScreenStyles from '../../../../styles/screenStyles/chatScreen';
import { Entypo } from '@expo/vector-icons';

const CaptureImg = ({ setImageUri }) => {
    const [isImgCapturing, setIsImgCapturing] = useState(false);



    const openCamera = async () => {
        if (isImgCapturing) return
        setIsImgCapturing(true);
        try {
            const result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                quality: 0.8,
            });

            if (result.canceled) {
                // console.log('User cancelled camera');
                setIsImgCapturing(false)
            } else if (result.error) {
                console.log('ImagePicker Error: ', result.error);
                setIsImgCapturing(false)
            } else {
                // setCapturedImage(result.assets[0].uri);
                setImageUri(result.assets[0].uri);
                setIsImgCapturing(false)
            }
        } catch (error) {
            console.error(error);
            setIsImgCapturing(false)
        }
    };

    return (
        <TouchableHighlight
            underlayColor={mainStyles.buttonOverlayColor}
            onPress={openCamera}
            style={[TouchableOpacityCustomStyle]}
        >
            <View style={[mainStyles.button, mainStyles.buttonContained, buttnCustomStyle]}>
                {/* <Image source={takeImg} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} /> */}
                <Entypo name="camera" size={30} color={chatScreenStyles.colors.background} />
            </View>
        </TouchableHighlight>
    );
};

const TouchableOpacityCustomStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent', // Ensure the background is transparent
    padding: 0,
    borderRadius: 2,
    width: 35,
    height: 'auto',
    height: 35,
};
const buttnCustomStyle = {
    width: '100%',
    height: '100%',
    flex: 1,
    padding: 2
};
export default CaptureImg;
