// ChatScreen.jsx
import React, { useState, useEffect } from 'react';
import { View, ScrollView, Modal, TouchableOpacity, Text } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import useNetworkStatus from '../utils/hooks/useNetworkStatus.js';



import AppBarErr from './errorComponents/AppBarErr.jsx';
// import Overlay from './errorComponents/overlay.jsx';
import mainStyles from '../../styles/mainStyles.js';
import chatScreenStyles from '../../styles/screenStyles/chatScreen.js';
import TakeText from './inputComponents/TakeText.jsx';
import TakeImg from './inputComponents/TakeImg.jsx';
import ChatBar from './chatComponents/ChatBar.jsx';
import ChatGreeting from './chatComponents/ChatGreeting.jsx';
import ChatArea from './chatComponents/ChatArea.jsx';
import { ChatContextProvider } from '../utils/context/chatContext.jsx';

import useRegDevice from '../utils/hooks/useRegDevice.js';
import { useError } from '../utils/hooks/useErrorModal.js';

export default function ChatScreen() {
  const [chatStarted, setChatStarted] = useState(false);
  // const [isConnected, setIsConnected] = useState(false);
  // const [error, setError] = useState(null);
  const { isConnected, networkError } = useNetworkStatus(); // Use the custom hook
  // const { deviceId } = useRegDevice();
  const { showErrorModal, hideErrorModal } = useError();
  useEffect(() => {
    // showErrorModal('testing it')
  }, []);

  return (
    <ChatContextProvider>
      {!isConnected && (
        <AppBarErr message={networkError} />
      )}
      <View style={[mainStyles.chatContainer]}>
        <ChatBar />
        {!chatStarted && <ChatGreeting flex={1} />}
        <ChatArea
          networkStatus={isConnected}
          setChatStatus={setChatStarted}
          flex={chatStarted ? 1 : 0} />
      </View>
    </ChatContextProvider>
  );
}