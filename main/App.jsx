import { StatusBar } from 'react-native';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import mainStyles from '../styles/mainStyles.js'
import ScreenViewer from './components/appComponents/ScreenViewer.jsx';
import Loader from './components/appComponents/Loader.jsx';
import { ErrorProvider } from './utils/context/errorContext.jsx';
import useRegDevice from './utils/hooks/useRegDevice.js';
import useApiCalls from './utils/hooks/useApiCalls.js';
import { useError } from './utils/hooks/useErrorModal.js';

import Constants from 'expo-constants';

export default function App() {

  const [connected, setConnected] = useState(false);
  const [availableVersion, setAvailableVersion] = useState(null);
  const [updatesAvailable, setUpdatesAVailable] = useState(false)

  const backgroundColor = mainStyles.statusbarBgColor;

  // const { showErrorModal } = useError();
  const { isRegistered } = useRegDevice();
  const { getVersion } = useApiCalls();


  const getCurrentVersion = () => {
    const appVersion = Constants.expoConfig.version;
    // console.log('App Version:', appVersion);
    return appVersion
  }
  const getServerVersion = async () => {
    const version = await getVersion();
    if (version) setAvailableVersion(version)
  }

  useEffect(() => {
    try {
      getServerVersion();

    } catch (error) {
      console.error('some problem here at app.js')
    }

    if (isRegistered) {
      setConnected(true)
    } else {
      setTimeout(() => {
        setConnected(true);
      }, 5000);
    }
  }, [])


  useEffect(() => {
    if (availableVersion) {
      const currentVersion = getCurrentVersion();
      if (availableVersion && currentVersion) {
        if (availableVersion !== currentVersion) {
          // console.log('they both are same versions')
          setUpdatesAVailable(true)
        } else {
          setUpdatesAVailable(false)
        }
      }
    }
  }, [availableVersion])



  return (
    <>
      {connected && <><StatusBar backgroundColor={backgroundColor} /><ScreenViewer /></>}

      {!connected && <><StatusBar backgroundColor={backgroundColor} /><Loader updates={updatesAvailable} /></>}
    </>
  );
}