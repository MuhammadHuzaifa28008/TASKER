import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const usePrevMessages = () => {
  const [chatMessages, setChatMessages] = useState([]);

  // Function to save the new array in cache
  const saveChatToCache = async (newChatArray) => {
    try {
      await AsyncStorage.setItem('chatMessages', JSON.stringify(newChatArray));
      setChatMessages(newChatArray);
    } catch (error) {
      console.error('Error saving chat to cache:', error);
    }
  };

  // Function to get the last 10 messages or all messages
  const getChatMessages = () => {
    const length = chatMessages.length;
    if (length > 10) {
      return chatMessages.slice(length - 10);
    } else {
      return chatMessages;
    }
  };

  return { chatMessages, saveChatToCache, getChatMessages };
};

export default usePrevMessages;
