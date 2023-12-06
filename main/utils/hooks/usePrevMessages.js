import { useState, useEffect } from "react"; // Add this import statement
import AsyncStorage from "@react-native-async-storage/async-storage";

const usePrevMessages = () => {
  const [queue, setQueue] = useState([]);

  // Function to get the existing queue from AsyncStorage
  const getQueueFromCache = async () => {
    try {
      const storedQueue = await AsyncStorage.getItem("chatQueue");
      if (storedQueue) {
        setQueue(JSON.parse(storedQueue));
      }
    } catch (error) {
      console.error("Error getting chat queue from cache:", error);
    }
  };

  // Function to save the new queue to AsyncStorage
  //   const saveQueueToCache = async (newQueue) => {
  //     try {
  //       await AsyncStorage.setItem("chatQueue", JSON.stringify(newQueue));
  //       setQueue(newQueue);
  //     } catch (error) {
  //       console.error("Error saving chat queue to cache:", error);
  //     }
  //   };
  //   const saveQueueToCache = async (newQueue) => {
  //     try {
  //       // Get the existing queue from AsyncStorage
  //       const existingQueue = await AsyncStorage.getItem("chatQueue");
  //       const parsedExistingQueue = existingQueue
  //         ? JSON.parse(existingQueue)
  //         : [];

  //       // Append the newQueue to the existingQueue
  //       const updatedQueue = [...parsedExistingQueue, ...newQueue];

  //       // Save the updated queue to AsyncStorage
  //       await AsyncStorage.setItem("chatQueue", JSON.stringify(updatedQueue));

  //       // Update the state with the updated queue
  //       setQueue(updatedQueue);
  //     } catch (error) {
  //       console.error("Error saving chat queue to cache:", error);
  //     }
  //   };
  const saveQueueToCache = async (newQueue) => {
    try {
      // Get the existing queue from AsyncStorage
      const existingQueue = await AsyncStorage.getItem("chatQueue");
      const parsedExistingQueue = existingQueue
        ? JSON.parse(existingQueue)
        : [];

      // Combine the newQueue and existingQueue, and filter out duplicates
      const updatedQueue = [...new Set([...parsedExistingQueue, ...newQueue])];

      // Save the updated queue to AsyncStorage
      await AsyncStorage.setItem("chatQueue", JSON.stringify(updatedQueue));

      // Update the state with the updated queue
      setQueue(updatedQueue);
    } catch (error) {
      console.error("Error saving chat queue to cache:", error);
    }
  };

  // Function to get the whole queue or a limited number of messages (<= 20)
  const getLimitedQueue = () => {
    return queue.slice(0, 20);
  };
  const deleteChatQueue = async () => {
    try {
      await AsyncStorage.removeItem("chatQueue");
    } catch (error) {
      console.error("error during removing queue form cache");
    }
  };
  useEffect(() => {
    getQueueFromCache();
  }, []);
  useEffect(() => {
    // deleteChatQueue();
    console.log(queue);
  }, [queue]);

  return { queue, saveQueueToCache, getLimitedQueue };
};

export default usePrevMessages;
