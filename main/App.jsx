import { StatusBar } from 'react-native';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import mainStyles from '../styles/mainStyles.js'
import ScreenViewer from './components/appComponents/ScreenViewer.jsx';
import Loader from './components/appComponents/Loader.jsx';

import useRegDevice from './utils/hooks/useRegDevice.js';
import { ErrorProvider } from './utils/context/errorContext'



export default function App() {

  const [connected, setConnected] = useState(false);
  const backgroundColor = mainStyles.statusbarBgColor;


  const { isRegistered } = useRegDevice();


  useEffect(() => {
    if (isRegistered) {
      setConnected(true)
    } else {
      setTimeout(() => {
        setConnected(true);
      }, 5000);
    }
  }, [])
  return (
    <>
      {connected && <><StatusBar backgroundColor={backgroundColor} /><ScreenViewer /></>}

      {!connected && <><StatusBar backgroundColor={backgroundColor} /><Loader /></>}
    </>
  );
}