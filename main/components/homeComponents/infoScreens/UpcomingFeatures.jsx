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

export default function UpcomingFeatures() {
    return (
        <View style={[styles.container, { backgroundColor: themeColors.backgroundColor, padding: 5, paddingLeft: 10, flex: 1 }]}>
            <ScrollView style={{ padding: 0 }}>
                <Text style={[styles.title, { color: themeColors.primaryColor }]}>Upcoming Features</Text>

                {/* Add more upcoming features as needed */}
                <View style={styles.featureContainer}>
                    <Text style={[styles.featureTitle, { color: themeColors.primaryColor }]}> Document Sharing with GPT</Text>
                    <Text style={[styles.featureDescription, { color: themeColors.textPrimaryColor }]}>
                        Send study documents seamlessly along with your messages to GPT for enhanced responses.
                    </Text>
                </View>

                <View style={styles.featureContainer}>
                    <Text style={[styles.featureTitle, { color: themeColors.primaryColor }]}> Assignment Solver</Text>
                    <Text style={[styles.featureDescription, { color: themeColors.textPrimaryColor }]}>
                        Utilize the assignment solver with customizable options for your academic needs.
                    </Text>
                </View>

                <View style={styles.featureContainer}>
                    <Text style={[styles.featureTitle, { color: themeColors.primaryColor }]}> Plagiarism Remover</Text>
                    <Text style={[styles.featureDescription, { color: themeColors.textPrimaryColor }]}>
                        AI-driven plagiarism remover with responses designed to evade detection.
                    </Text>
                </View>

                <View style={styles.featureContainer}>
                    <Text style={[styles.featureTitle, { color: themeColors.primaryColor }]}> Conversation Speed</Text>
                    <Text style={[styles.featureDescription, { color: themeColors.textPrimaryColor }]}>
                        Improved conversation speed for a smoother experience.
                    </Text>
                </View>

                <View style={styles.featureContainer}>
                    <Text style={[styles.featureTitle, { color: themeColors.primaryColor }]}> User Control</Text>
                    <Text style={[styles.featureDescription, { color: themeColors.textPrimaryColor }]}>
                        More control over your interactions and app settings.
                    </Text>
                </View>
                {/* 
      <View style={styles.featureContainer}>
        <Text style={[styles.featureTitle, { color: themeColors.primaryColor }]}>11. Fast OCR</Text>
        <Text style={[styles.featureDescription, { color: themeColors.textPrimaryColor }]}>
          Experience rapid Optical Character Recognition (OCR) performance.
        </Text>
      </View> */}

                {/* Important Information Section */}
                <View style={[styles.infoContainer, { marginBottom: 10 }]}>
                    <Text style={[styles.infoDescription, {
                        color: themeColors.textPrimaryColor,
                        textAlign: 'center'
                    }]}>
                        I am a single developer dedicated to providing professional services. Your satisfaction is my top priority.
                    </Text>
                </View>
            </ScrollView >
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingHorizontal: 25,
        justifyContent: 'center',
        alignItems: 'center'
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
        color: themeColors.textSecondaryColor,
        paddingLeft: 12
    },
    infoContainer: {
        marginTop: 20,
    },
    infoTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    infoDescription: {
        fontSize: 16,
        color: themeColors.textSecondaryColor,
    },
});
