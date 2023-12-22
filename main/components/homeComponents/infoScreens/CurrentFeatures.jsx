import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

// Define the color scheme
const themeColors = {
    primaryColor: '#1c1e27',
    secondaryColor: '#373a49',
    textPrimaryColor: '#6c6e7f',
    textSecondaryColor: '#a5a7b6',
    backgroundColor: '#e1e3ea',
    warningColor: '#FFD180', // Lighter orange for warning
};

export default function CurrentFeatures() {
    return (
        <View style={[styles.container, { backgroundColor: themeColors.backgroundColor }, {}]}>
            <Text style={[styles.title, { color: themeColors.primaryColor }]}>Current Features</Text>
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.featureContainer}>
                    <Text style={[styles.featureTitle, { color: themeColors.primaryColor }]}> OCR Integration</Text>
                    <Text style={[styles.featureDescription, { color: themeColors.textPrimaryColor }]}>
                        Perform OCR on images! Capture or select images for optimal OCR performance.
                    </Text>
                </View>

                <View style={styles.featureContainer}>
                    <Text style={[styles.featureTitle, { color: themeColors.primaryColor }]}> GPT-4 Turbo</Text>
                    <Text style={[styles.featureDescription, { color: themeColors.textPrimaryColor }]}>
                        Enjoy free access to GPT-4 Turbo for better and more intelligent replies in your conversations.
                    </Text>
                </View>

                <View style={styles.featureContainer}>
                    <Text style={[styles.featureTitle, { color: themeColors.primaryColor }]}> Conversation Limits</Text>
                    <Text style={[styles.featureDescription, { color: themeColors.textPrimaryColor }]}>
                        Limited conversation storage and single session for now. Expect more flexibility in upcoming updates!
                    </Text>
                </View>

                {/* Add more current features as needed */}

                <View style={[styles.warningContainer, { backgroundColor: themeColors.warningColor }]}>
                    {/* <Text style={[styles.warningTitle, { color: themeColors.primaryColor }]}>Important Note</Text> */}
                    <Text style={[styles.warningDescription, { color: themeColors.textPrimaryColor }]}>
                        The "Request failed" or slow response errors are often related to slow internet. I am actively working to improve this experience in upcoming updates.
                    </Text>
                </View>

            </ScrollView>
            {/* Unique section highlighting you as the sole developer */}
            <View style={styles.developerInfo}>
                <Text style={[styles.developerText, { color: themeColors.textSecondaryColor }]}>
                    Developed by a student developer with passion ❤️
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    featureContainer: {
        marginBottom: 15,
    },
    featureTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    featureDescription: {
        fontSize: 16,
    },
    warningContainer: {
        marginTop: 20,
        padding: 10,
        borderRadius: 5,
    },
    warningTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    warningDescription: {
        fontSize: 16,
    },
    developerInfo: {
        marginTop: 20,
        alignItems: 'center',
    },
    developerText: {
        fontSize: 16,
    },
});
