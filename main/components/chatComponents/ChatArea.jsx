import { View, Text, ScrollView } from "react-native";
import mainStyles from "../../../styles/mainStyles";
import chatScreenStyles from "../../../styles/screenStyles/chatScreen";
import InputArea from "./chatArea/InputArea";
import PRArea from "./chatArea/PRArea";
import SandCWrapper from "./chatArea/SandCWrapper";
import { useChatContext } from "../../utils/hooks/useChatContext";
import { useEffect } from "react";
import { useError } from '../../utils/hooks/useErrorModal.js'

export default function ChatArea({ flex, setChatStatus, networkStatus }) {
  const { img, req, imgText, setImg, actionInProg, setReq, setActInProg, res, setDiscardReq, ongoingReq, err } =
    useChatContext();
  const { showErrorModal } = useError();

  useEffect(() => {
    if (img || req) {
      setChatStatus(true);
    }

  }, [img, req]);
  useEffect(() => {
    if (err) showErrorModal(err)
  }, [err])

  return (
    <View
      style={[
        chatScreenStyles.chatAreaDrawerCustomStyle,
        { flex: flex },
        { maxHeight: "auto" },
        { padding: 0 },
      ]}
    >
      <View style={[{ flex: 1 }]}>
        <PRArea setChatStatus={setChatStatus} promptTxt={req} responseTxt={res} />
      </View>

      {actionInProg && <SandCWrapper actionInProg={actionInProg} discardReq={setDiscardReq} isReqOn={ongoingReq} />}


      <View style={{ padding: 0 }}>
        <InputArea
          takeTxt={true}
          takeImg={true}
          txtPlaceHolder={"Give your Prompt..."}
          setImg={setImg}
          imgTxt={imgText}
          sendTxt={setReq}
          inProg={actionInProg}
          networkStatus={networkStatus}
          setActInProg= {setActInProg}
        />
      </View>
    </View>
  );
}