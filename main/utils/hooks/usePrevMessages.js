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

  const saveQueueToCache = async (newValue) => {
    try {
      const existingQueue = await AsyncStorage.getItem("chatQueue");
      const parsedExistingQueue = existingQueue
        ? JSON.parse(existingQueue)
        : [];

      // Check if the newValue is the same as the latest value in the queue
      const isSameAsLatest =
        parsedExistingQueue.length > 0 &&
        JSON.stringify(parsedExistingQueue[parsedExistingQueue.length - 1]) ===
          JSON.stringify(newValue);

      if (!isSameAsLatest) {
        // Combine the new value and existing queue
        // console.log(isSameAsLatest)
        const updatedQueue = [...parsedExistingQueue, newValue];

        // Ensure only the last 20 items are stored
        const maxLength = 20;
        if (updatedQueue.length > maxLength) {
          updatedQueue.splice(0, updatedQueue.length - maxLength);
        }

        // Save the updated queue to AsyncStorage
        await AsyncStorage.setItem("chatQueue", JSON.stringify(updatedQueue));

        // Update the state with the updated queue (if setQueue is available)
        if (setQueue) {
          setQueue(updatedQueue);
        }
      }
    } catch (error) {
      console.error("Error saving chat queue to cache:", error);
      // You can handle errors here, for example, show a notification or log to an error tracking service
      throw new Error("Failed to save chat queue to cache");
    }
  };

  // Function to get the whole queue or a limited number of messages (<= 20)
  const getLimitedQueue = () => {
    const length = queue.length;

    // Handle unexpected scenarios
    if (length === 0) {
      // console.warn("Queue is empty.");
      return [];
    }

    // If the length is less than or equal to 20, return the entire array
    if (length <= 20) {
      return [...queue];
    }

    // If the length is greater than 20, return the last 20 elements
    const startIndex = length - 20;
    return queue.slice(startIndex, length);
  };

  const deleteChatQueue = async () => {
    try {
      await AsyncStorage.removeItem("chatQueue");
      const newQueue = await AsyncStorage.getItem("chatQueue");
      const parsedNewQueue = newQueue ? JSON.parse(newQueue) : [];
      setQueue(parsedNewQueue);
      console.log("deleted queue");
    } catch (error) {
      console.error("error during removing queue form cache");
    }
  };
  useEffect(() => {
    getQueueFromCache();
  }, []);
  useEffect(() => {
    // deleteChatQueue();
    // console.log(queue);
  }, [queue]);

  return { queue, saveQueueToCache, getLimitedQueue };
};

export default usePrevMessages;
