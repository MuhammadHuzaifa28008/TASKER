import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import mainStyles from '../../../../styles/mainStyles';

export default function StartChat({ navigation }) {
  return (
    <TouchableHighlight
      underlayColor={mainStyles.buttonOverlayColor}
      onPress={() => navigation.navigate('chat')}
      style={[TouchableOpacityCustomStyle]}
    >
      <View style={[mainStyles.button, mainStyles.buttonContained, buttnCustomStyle]}>
        <Text style={[mainStyles.buttonContainedText, textStyle]}>Start Chat </Text>
      </View>
    </TouchableHighlight>
  );
}

const TouchableOpacityCustomStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'transparent', // Ensure the background is transparent
  padding: 0,
  borderRadius: 10,
  width: '100%',
};
const buttnCustomStyle = {
  width: '100%',
  flex: 1,
  justifyContent: 'center',
}
const textStyle = {
  fontSize: 25,
  width: 'auto',
  // Set your text color explicitly
};
