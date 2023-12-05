import React from 'react';
import { View, StyleSheet } from 'react-native';
import chatScreenStyles from '../../../styles/screenStyles/chatScreen';

const Overlay = ({ children }) => {
    return (
        <View style={styles.overlay}>
            {children}
        </View>
    );
};

const bgColor = chatScreenStyles.colors.textSecondary
const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        position: 'absolute',
        backgroundColor: bgColor,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 999,
    },
});

export default Overlay;
