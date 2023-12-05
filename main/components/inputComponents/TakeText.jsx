import React, { useEffect, useState } from 'react';
import { TextInput } from 'react-native';
import chatScreenStyles from '../../../styles/screenStyles/chatScreen';

const TakeText = (props) => {

  const { defaultText, placeHolder, setTxt, clearTextInput } = props;

  const [text, setText] = useState('');
  const [height, setHeight] = useState(0);


  // useEffect(() => {
  //   if (defaultText && !text) {
  //     setText(defaultText)
  //     // console.log(defaultText + '| \t  1)-> taketext')
  //   }
  // }, [defaultText])

  useEffect(() => {
    if (defaultText) {
      // Concatenate defaultText to existing text
      setText((prevText) => prevText + `\n[\n${defaultText}\n]\n`);
    }
  }, [defaultText]);
  useEffect(() => {
    if (clearTextInput) {
      setText('')
      setHeight(30)
    }
  }, [clearTextInput])



  useEffect(() => {
    setTxt(text);
    // console.log(text + "| \t  2)-> taketext")
  }, [text]);







  const handleTextChange = (newText) => {
    setText(newText);
  };

  const handleContentSizeChange = (event) => {
    setHeight(event.nativeEvent.contentSize.height);
  };

  return (
    <TextInput
      style={[style, { height: Math.min(height, 10 * 20) }]}
      multiline={true}
      numberOfLines={1}
      onContentSizeChange={handleContentSizeChange}
      onChangeText={handleTextChange}
      value={text}
      placeholder={placeHolder}
      placeholderTextColor={chatScreenStyles.colors.secondary}
      selectionColor={chatScreenStyles.colors.secondary}
      selectTextOnFocus={false}
    />
  );
};

const style = {
  //   borderWidth: 1,
  maxHeight: '100%',
  padding: 5,
  fontSize: 15,
  flex: 1,
  color: chatScreenStyles.colors.background,
};

export default TakeText;
