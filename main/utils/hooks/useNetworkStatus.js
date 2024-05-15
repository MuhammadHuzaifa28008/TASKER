// useNetworkStatus.js
import { useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";

const useNetworkStatus = () => {
  const [isConnected, setIsConnected] = useState(true); // Default to true
  const [networkError, setNetworkError] = useState(null);

  useEffect(() => {
    const checkNetworkStatus = async () => {
      try {
        const networkState = await NetInfo.fetch();
        setIsConnected(networkState.isConnected);
      } catch (error) {
        console.error("Error checking network status:", error);
        setNetworkError(
          "Network error. Please check your internet connection."
        );
      }
    };

    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
      if (!state.isConnected) {
        setNetworkError("No internet");
      }
    });

    checkNetworkStatus();

    return () => {
      unsubscribe();
    };
  }, []);

  return { isConnected, networkError };
};

export default useNetworkStatus;
