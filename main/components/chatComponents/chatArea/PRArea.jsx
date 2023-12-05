import React, { useState, useEffect, useRef } from 'react';
import { View, ScrollView, Text } from 'react-native';
import DisplayReq from '../../outputComponents/DisplayReq';
import DisplayRes from '../../outputComponents/DisplayRes';

export default function PRArea({ promptTxt, responseTxt }) {
  const [queue, setQueue] = useState([]);
  const scrollViewRef = useRef(null);


  useEffect(() => {
    if (promptTxt) {
      setQueue((prevQueue) => [...prevQueue, { role: 'user', content: promptTxt }]);
    }
  }, [promptTxt]);

  useEffect(() => {
    if (responseTxt) {
      setQueue((prevQueue) => [...prevQueue, { role: 'assistant', content: responseTxt }]);

      // Scroll to the end when content changes
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollToEnd({ animated: true });
      }
    }
  }, [responseTxt]);




  return (
    <View style={{ flex: 1, padding: 5 }}>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
        onContentSizeChange={() => {
          scrollViewRef.current.scrollToEnd({ animated: true });
        }}
      >
        {queue.map((item, index) => {
          if (item.type === 'request') {
            return <DisplayReq key={index} reqData={item.data} />;
          }
          if (item.type === 'response') {
            return <DisplayRes key={index} resData={item.data} />;
          }
          return null; // handle other types if needed
        })}
      </ScrollView>
    </View>
  );
}
