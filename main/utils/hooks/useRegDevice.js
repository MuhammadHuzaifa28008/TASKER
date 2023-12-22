import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

import useApiCalls from "./useApiCalls";

const generateUniqueId = () => {
  const uuid = uuidv4();
  const timestamp = Date.now();
  const uniqueId = `${timestamp}-${uuid}`;
  return uniqueId;
};

const useRegDevice = () => {
  const { regDevice } = useApiCalls();
  const [isRegistered, setIsRegistered] = useState(false);
  const [deviceId, setDeviceId] = useState("");
  const handleReq = async (id) => {};
  useEffect(() => {
    const checkDeviceRegistration = async () => {
      try {
        // console.log("Checking device registration...");

        // Check if device is registered in cache
        const storedDeviceId = await AsyncStorage.getItem("deviceId");

        if (storedDeviceId) {
          // Device is registered, set state
          // console.log("Device is already registered.");
          setIsRegistered(true);
          setDeviceId(storedDeviceId);
        } else {
          // Device is not registered, generate unique ID and register
          // console.log("Device is not registered. Generating a new ID...");

          const newDeviceId = generateUniqueId();

          // Call API to register the device
          // console.log("Calling API to register the device...");
          const result = await regDevice(newDeviceId);
          if (result.status === 200) {
            // console.log("Device registration successful.");
            setIsRegistered(true);
            setDeviceId(newDeviceId);
            await AsyncStorage.setItem("deviceId", newDeviceId);
          } else {
            throw error("request canceled");
          }
          // Set state and save registration status in cache
        }
      } catch (error) {
        console.error("Error checking device registration:", error);
      } finally {
        // await AsyncStorage.removeItem("deviceId");
      }
    };

    // Call the function on component mount
    checkDeviceRegistration();
  }, []);

  useEffect(() => {
    // console.log(
    //   "State updated: isRegistered =",
    //   isRegistered,
    //   "deviceId =",
    //   deviceId
    // );
  }, [isRegistered, deviceId]);

  return { isRegistered, deviceId };
};

export default useRegDevice;
