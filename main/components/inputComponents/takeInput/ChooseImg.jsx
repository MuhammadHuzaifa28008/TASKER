
import { useState } from 'react';
import { TouchableOpacity, Image, View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import mainStyles from '../../../../styles/mainStyles';
import uploadImg from '.././../../../assets/icons/uploadImg.png';
import chatScreenStyles from '../../../../styles/screenStyles/chatScreen';
import { Feather } from '@expo/vector-icons';



const ChooseImg = ({ setImageUri }) => {
    const [isImagePickerOpen, setIsImagePickerOpen] = useState(false);
    const openImagePicker = async () => {
        if (isImagePickerOpen) return
        setIsImagePickerOpen(true);

        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.8,
            });

            if (result.canceled) {
                // console.log('User cancelled image picker');
                setIsImagePickerOpen(false)
            } else if (result.error) {
                // console.log('ImagePicker Error: ', result.error);
                setIsImagePickerOpen(false)
            } else {
                setImageUri(result.assets[0].uri);
                setIsImagePickerOpen(false)
            }
        } catch (error) {
            // console.error(error)
            setIsImagePickerOpen(false)
        }

    };

    return (
        <TouchableOpacity
            underlayColor={mainStyles.buttonOverlayColor}
            onPress={openImagePicker}
            style={[TouchableOpacityCustomStyle]}
        >
            <View style={[mainStyles.button, mainStyles.buttonContained, buttnCustomStyle]}>

                {/* <Image source={uploadImg} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} /> */}
                <Feather name="image" size={30} color={chatScreenStyles.colors.background} />
            </View>
        </TouchableOpacity>
    );
};

const TouchableOpacityCustomStyle = {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent', // Ensure the background is transparent
    padding: 0,
    borderRadius: 10,
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


export default ChooseImg;