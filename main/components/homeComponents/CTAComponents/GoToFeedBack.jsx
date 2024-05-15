import React, { useState, useEffect } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import mainStyles from '../../../../styles/mainStyles';

export default function GoToFeedback({ navigation }) {
  const [text, setText] = useState('Provide Feedback');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setText((prevText) => (prevText === 'Provide Feedback' ? 'Suggest Features' : 'Provide Feedback'));
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup to avoid memory leaks
  }, []);

  return (
    <TouchableHighlight
      underlayColor={mainStyles.buttonOverlayColor}
      style={TouchableOpacityCustomStyle}
      onPress={() => navigation.navigate('feedback')}
    >
      <View style={[mainStyles.button, mainStyles.buttonOutlined, mainStyles.buttonOutlinedText, buttonCustomStyle]}>
        <Text style={[mainStyles.buttonOutlinedText, textStyle]}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
}

const TouchableOpacityCustomStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'transparent',
  padding: 0,
  width: '100%',
  borderRadius: 10,
  borderWidth: 0,
  borderColor: 'transparent',
};

const buttonCustomStyle = {
  elevation: 0,
  width: '100%',
  padding: 8,
  justifyContent: 'center',
};

const textStyle = {
  fontSize: 25,
  width: 'auto',
};
