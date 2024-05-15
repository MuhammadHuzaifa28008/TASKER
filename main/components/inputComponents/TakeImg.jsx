import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import * as FileSystem from 'expo-file-system';
import CaptureImg from './takeInput/CaptureImg';
import ChooseImg from './takeInput/ChooseImg';


// testing base64


import * as Clipboard from 'expo-clipboard';

const TakeImg = ({ inProgress, setImg, networkStatus, setActInProg }) => {
    const [imageUri, setImageUri] = useState(null);
    const [imageBase64, setImageBase64] = useState(null);

    useEffect(() => {
        const toBase64 = async (uri) => {
            const base64 = await FileSystem.readAsStringAsync(uri, {
                encoding: FileSystem.EncodingType.Base64,
            });
            // const extension = uri.split('.').pop();
            // console.log(extension);
            // const dataUri = `data:image/${extension};base64,${base64}`;
            // const truncatedDataUri = dataUri.substring(0, 30);
            // console.log(truncatedDataUri)
            // // console.log('-------')
            // // console.log(base64);
            // // await Clipboard.setStringAsync(base64.toString());
            // return dataUri;
            return base64;
        };

        const processImage = async () => {
            if (imageUri && networkStatus && !inProgress) {
                const base64 = await toBase64(imageUri);
                setImageBase64(base64);
                // const truncatedBase64 = base64.substring(0, 20);
                // console.log('First 10 characters of base64:', truncatedBase64);
                // console.log(base64)
                setImg(base64);
                setImageUri(null);
                setImageBase64(null);
            }
        };
        if (imageUri) setActInProg('taking image...')
        processImage();
    }, [imageUri, setImg]);

    return (
        (!inProgress && networkStatus) && (
            <View style={styles.container}>
                <CaptureImg setImageUri={setImageUri} />
                <ChooseImg setImageUri={setImageUri} />
            </View>
        )
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '30%',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
        padding: 3,
    },
});

export default TakeImg;
