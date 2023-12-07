import React, { useState, useEffect, useRef } from 'react';
import { View, ScrollView, Text } from 'react-native';
import DisplayReq from '../../outputComponents/DisplayReq';
import DisplayRes from '../../outputComponents/DisplayRes';
import usePrevMessages from '../../../utils/hooks/usePrevMessages';


export default function PRArea({ setChatStatus, promptTxt, responseTxt }) {
  // const [currentQueue, setCurrentQueue] = useState([]);
  const scrollViewRef = useRef(null);
  const { queue, saveQueueToCache } = usePrevMessages();

  useEffect(() => {
    // if (queue.length > 0 && currentQueue.length === 0) {
    if (queue.length > 0) {
      setChatStatus(true)
      // setCurrentQueue(queue);
    }
  }, [queue])
  useEffect(() => {
    if (promptTxt) {
      // setCurrentQueue((prevQueue) => [...prevQueue, { role: 'user', content: promptTxt }]);
      saveQueueToCache({ role: 'user', content: promptTxt });
    }
  }, [promptTxt]);

  useEffect(() => {
    if (responseTxt) {
      // setCurrentQueue((prevQueue) => [...prevQueue, { role: 'assistant', content: responseTxt }]);
      saveQueueToCache({ role: 'assistant', content: responseTxt });

      // Scroll to the end when content changes
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollToEnd({ animated: true });
      }
    }
  }, [responseTxt]);

  // useEffect(() => {
  //   saveQueueToCache(currentQueue)
  // }, [currentQueue])

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
          if (item.role === 'user') {
            return <DisplayReq key={index} reqData={item.content} />;
          }
          if (item.role === 'assistant') {
            return <DisplayRes key={index} resData={item.content} />;
          }
          return null; // handle other types if needed
        })}
      </ScrollView>
    </View>
  );
}