import {
    View,
    KeyboardAvoidingView,
    Text,
    TouchableOpacity,
} from "react-native";
import mainStyles from "../../../../styles/mainStyles";
import chatScreenStyles from "../../../../styles/screenStyles/chatScreen";
import TakeText from "../../inputComponents/TakeText";
import TakeImg from "../../inputComponents/TakeImg";
import { Feather } from "@expo/vector-icons";
import { useEffect, useState } from "react";

export default function InputArea(props) {
    const { takeTxt, takeImg, txtPlaceHolder, setImg, imgTxt, sendTxt, inProg, networkStatus, setActInProg } = props;

    const [data, setData] = useState("");
    const [clearInput, setClearInput] = useState(false)

    useEffect(() => {
        if (clearInput) {
            setData('')
            setClearInput(false)
        }
        if (data) setClearInput(false)
        if (noTxt(data)) setData('')
    }, [clearInput, data])

    const noTxt = (input) => {
        // Use a regular expression to check if the input contains only spaces
        const spaceRegex = /^\s*$/;
        return spaceRegex.test(input);
    }
    const handleSubmit = () => {
        if (!data || noTxt(data) || inProg || !networkStatus) {
            // if (inProg) console.error('cannot send it until' + inProg)
            // if (!networkStatus) console.error('connect to internet')
            // if (!data) console.error('setData first')
            // setData('')
        } else {
            sendTxt(data);
            // console.log("sending data below \n " + data + "\n\nsent");
            setClearInput(true)
        }

    };

    return (
        <KeyboardAvoidingView style={[mainStyles.inputArea]}>
            {/* <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}> */}
            <View
                style={{
                    height: "auto",
                    maxHeight: "100%",
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    padding: 5,
                }}
            >
                {takeTxt && (
                    <TakeText
                        defaultText={imgTxt}
                        placeHolder={txtPlaceHolder}
                        setTxt={setData}
                        clearTextInput={clearInput}
                    />
                )}
                {takeImg && <TakeImg
                    inProgress={inProg}
                    setImg={setImg}
                    networkStatus={networkStatus}
                    setActInProg = {setActInProg}
                />}
            </View>

            <TouchableOpacity
                onPress={handleSubmit}
                style={[mainStyles.button, mainStyles.buttonContained, touchableOpacityCustomStyle]}>
                {/* <View style={{ flex: 1, borderWidth: 1, borderColor: 'white' }}> */}
                <Feather
                    name="send"
                    size={24}
                    color={
                        (data && !inProg)
                            ? chatScreenStyles.colors.background
                            : chatScreenStyles.colors.secondary
                    }
                />

                {/* </View> */}
            </TouchableOpacity>

            {/* </KeyboardAvoidingView> */}
        </KeyboardAvoidingView>
    );
}

const touchableOpacityCustomStyle = {
    height: "auto",
    maxHeight: "100%",
    justifyContent: "center",
    paddingBottom: 15,
    paddingRight: 15,
};
