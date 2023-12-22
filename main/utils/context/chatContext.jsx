import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import useApiCalls from '../hooks/useApiCalls.js'; // Adjust the import path based on your project structure
import useErrorModal from '../hooks/useErrorModal.js'
import usePrevMessages from "../hooks/usePrevMessages.js";


export const ChatContext = createContext();

export function useChatContext() {
    return useContext(ChatContext);
}



export function ChatContextProvider({ children }) {
    const { getLimitedQueue } = usePrevMessages();
    // const { showErrorModal } = useErrorModal();

    const {
        sendPrompt,
        fetchText,
        loading: apiLoading,
        error: apiError,
    } = useApiCalls();

    const [actionInProg, setActInProg] = useState(null);
    const [req, setReq] = useState(null);
    const [disCardReq, setDiscardReq] = useState(false);
    const [img, setImg] = useState(null);
    const [imgText, setImgText] = useState("");
    const [defaultTxt, setDefaultTxt] = useState("");
    const [res, setRes] = useState(null);
    const [err, setErr] = useState(null);
    // const [discardImg, setDiscardImg] = useState(false);
    const [ongoingReq, setOngoingReq] = useState(null);



    useEffect(() => {
        if (apiError) setErr(apiError)
    }, [apiError])

    useEffect(() => {
        // console.log(' iam triggered')
        try {
            if (defaultTxt && !ongoingReq) {
                // console.log(' iam triggered 2')
                // setImgText(defaultTxt)
                setReq(defaultTxt)
            }

        } finally {
            setDefaultTxt('')
            // setImgText('')
        }

    }, [defaultTxt])

    useEffect(() => {

        const sendReqToServer = async (req, source) => {
            if (imgText) setImgText('')
            const prevMessages = getLimitedQueue();
            // console.log('at context')
            // console.log(prevMessages)
            try {
                const response = await sendPrompt(req, prevMessages, source, setOngoingReq, setErr);
                // console.log(response);
                if (response) {
                    setRes(response.data.aiResponse);
                } else {
                    // console.log(response)
                    throw new Error('Request failed\n Mostly due to slow internet')
                }
            } catch (error) {
                // console.error('error occoured :' + error)
                // setErr('Request failed ')
                setErr(error.message)
                setRes('')
            } finally {
                setActInProg('');
                setReq('')
                setRes('')
            }

        }


        if (req) {
            setActInProg('sending Request...')
            const source = axios.CancelToken.source();
            // setOngoingReq(source)
            sendReqToServer(req, source);
        }

    }, [req])


    useEffect(() => {
        const fetchTxt = async (img, source) => {
            if (imgText) setImgText('')
            try {
                const response = await fetchText(img, source, setOngoingReq);
                // console.log(response);
                if (response) {
                    setImgText(response.data.fetchedTxt);
                } else {
                    // console.log(response)
                    throw new Error('Request Failed!\n Mostly due to slow internet')
                }
            } catch (error) {
                // console.error('error occoured :' + error)
                setErr(error.message)
                setImgText('')
            } finally {
                setActInProg('');
                setImg('')
                setImgText('')
            }

        }

        if (img) {
            setActInProg('sending image...')
            const source = axios.CancelToken.source();
            fetchTxt(img, source)
        }
    }, [img])

    useEffect(() => {
        if (disCardReq) {
            // console.log('discard req initiated')
            if (ongoingReq) {
                // console.log('some ongoing req was found')
                // ongoingReq.cancel("request canceled");
            }
            resetContext();
        }
    }, [disCardReq])

    useEffect(() => {
        let timeoutId;

        if (ongoingReq) {
            // console.log('some req ongoing...')
            // console.log(`Some req ongoing... at ${new Error().stack.split('\n')[1]}`);

            // Set a timeout for 25 seconds
            timeoutId = setTimeout(() => {
                // After 15 seconds, set discardReq to true
                if (ongoingReq) {
                    setErr('Req Canceled \n It was taking too much time');
                    setDiscardReq(true);
                }
                else {
                    return;
                }
            }, 25000); // 25 seconds in milliseconds
        } else {
            // If ongoingReq becomes falsy, clear the timeout
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        }
        // Clean up the timeout if the request completes or is aborted
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [ongoingReq]);


    const resetContext = () => {
        setReq(null);
        setImg(null);
        setImgText("");
        setRes(null);
        setErr(null);
        setActInProg(null);
        setDiscardReq(false);
        // setDiscardImg(false);
    };


    return (
        <ChatContext.Provider value={{ setDefaultTxt, setDiscardReq, actionInProg, setActInProg, img, setImg, imgText, req, setReq, res, err, ongoingReq }}>
            {children}
        </ChatContext.Provider>
    );
}
