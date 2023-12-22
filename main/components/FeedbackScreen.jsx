import React from 'react';
import { View, Text, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import mainStyles from '../../styles/mainStyles';
import useApiCalls from '../utils/hooks/useApiCalls';
import InputArea from './chatComponents/chatArea/InputArea';
import AppBarErr from './errorComponents/AppBarErr'
import { useError } from '../utils/hooks/useErrorModal'


export default function FeedbackScreen() {
  const { sendFeedback, loading } = useApiCalls();
  const { isConnected } = useNetInfo();
  const { showErrorModal, setNavigate } = useError();


  const handleSubmitFeedback = (feedback) => {
    try {
      const response = sendFeedback(feedback);
      if (response) {
        showErrorModal('Thanks for feedback')
      }
    } catch (error) {
      showErrorModal('some problem ocured please try again');
      setNavigate(false)
    } finally {
      setNavigate(false)
    }
  }
  return (

    <KeyboardAvoidingView
      style={[mainStyles.appBar, { flex: 1 }]}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0} // Adjust as needed
    >
      {
        !isConnected && <AppBarErr message={"no internet access"} />
      }
      <ScrollView style={{ flex: 1 }}>
        <View style={{ marginHorizontal: 20, marginTop: 20, marginBottom: 10 }}>
          <Text style={[mainStyles.appBarText, mainStyles.cardHeader]}>Feedback</Text>
        </View>

        <View style={[mainStyles.card, { marginBottom: 20 }]}>
          <Text style={[mainStyles.cardHeader]}>Suggest Features</Text>
          <Text style={[mainStyles.cardContent]}>I'd love to hear your suggestions!</Text>
        </View>

        <View style={mainStyles.card}>
          <Text style={[mainStyles.cardHeader]}>Report an Issue</Text>
          <Text style={[mainStyles.cardContentText]}>Encountering any issues?</Text>
          <Text style={[mainStyles.cardContentText]}>Apologies for inconvenience</Text>
          <Text style={[mainStyles.cardContentText]}>Rest assured, it will be fixed in future updates.</Text>
        </View>

        {/* Add more cards or content as needed */}
      </ScrollView>

      <View style={{ backgroundColor: mainStyles.appBarText, padding: 20 }}>
        <InputArea
          sendTxt={handleSubmitFeedback}
          takeTxt={true}
          takeImg={false}
          inProg={loading}
          txtPlaceHolder={'Provide feedback...'}
          networkStatus={isConnected}
        />
      </View>
    </KeyboardAvoidingView>
  );
}
