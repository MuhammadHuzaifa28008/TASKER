import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import mainStyles from '../../../styles/mainStyles';
import chatScreenStyles from '../../../styles/screenStyles/chatScreen';
import { useEffect } from 'react';


const ErrorModal = ({ error, onClose, navigate }) => {
  useEffect(() => {
    // console.log(navigate)
  }, [navigate])
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={!!error}
      onRequestClose={() => onClose()}
    >
      <View style={[styles.modalContainer]}>
        <View style={[mainStyles.drawer, { height: '35%', width: '70%', justifyContent: 'space-between', alignItems: 'center', borderRadius: 10, paddingTop: 40, paddingBottom: 30 }]}>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity style={styles.button} onPress={() => onClose()}>
            <Text style={styles.buttonText}>{navigate ? "Go back" : "OK"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const bg = chatScreenStyles.colors.background;
const errText = chatScreenStyles.colors.textPrimary;
const btnTxt = chatScreenStyles.colors.textPrimary

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: errText,
    paddingVertical: 10
  },
  button: {
    backgroundColor: bg,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: btnTxt,
    fontSize: 16,
  },
});

export default ErrorModal;
