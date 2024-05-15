import React, { useEffect, useState } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import * as Font from 'expo-font';
import mainStyles from '../../../styles/mainStyles';

export default function HeroSection({ navigation }) {
    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        const loadFont = async () => {
            try {
                await Font.loadAsync({
                    'logoFont': require('../../../assets/font/Bord.otf'),
                });
                setFontLoaded(true);
            } catch (error) {
                console.error('Error loading font:', error);
                setFontLoaded(false);
            }
        };

        loadFont();
    }, []);


    useEffect(() => {
    }, [fontLoaded])

    return (


        <View style={[mainStyles.appBar, heroSecBarCustomStyle]}>
            <View style={{ flex: 1 }}>

                <Text style={[fontLoaded && logoText, mainStyles.cardTitleText, { fontWeight: 'normal' }]}>Tasker</Text>
                <Text style={[mainStyles.appBarText, fontLoaded ? logoText : {}]}>From student for students</Text>
            </View>
            <TouchableHighlight
                overlay={'transparent'}
                onPress={() => navigation.navigate('current')}
                style={[appBarCardCustomStyles, { maxHeight: '70%', maxWidth: '80%', borderRadius: 10 }]}
            >
                <View style={[mainStyles.card, appBarCardCustomStyles]}>
                    <Text style={[mainStyles.cardHeader]}>Text from Image</Text>
                    <Text style={[mainStyles.cardHeader]}>GPT-4 Turbo</Text>
                </View>
            </TouchableHighlight>
        </View>

    );
}

const heroSecBarCustomStyle = {
    justifyContent: 'space-evenly',
    paddingTop: 20,
    paddingBottom: 20,
    height: '45%',
    width: '100%',
    fontWeight: "bold",
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
};

const appBarCardCustomStyles = {
    height: 'auto',
    maxHeight: '100%',
    width: 'auto',
    maxWidth: '100%',
};

const logoText = {
    fontFamily: 'logoFont',
};
