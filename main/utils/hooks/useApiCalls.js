import { useState } from "react";
import axios from "axios";
import usePrevMessages from "./usePrevMessages";
import { version } from "uuid";

const useApiCalls = () => {
  const baseUrl = "https://tasker-server.adaptable.app/"; // Update with your actual base URL
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const regDevice = async (id) => {
    try {
      setLoading(true);
      // Add your logic for regDevice here
      // const response = await axios.post(`${baseUrl}/reg`, { id });
      const response = await axios.post(`${baseUrl}/device/reg`, { id }); // for testing
      // Handle the response as needed
      return response;
    } catch (error) {
      // setError(error);
      // console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const sendPrompt = async (prompt, prevMessages, source, setOngoingReq) => {
    // console.log(prevMessages);
    try {
      const cancelToken = source.token;
      const response = await axios.post(`${baseUrl}/default/text`, {
        // timeout: 50000,
        prompt: prompt,
        prevMessages: prevMessages,
        cancelToken,
        onDownloadProgress: (progressEvent) => {
          if (progressEvent) {
            console.log(`I am hapening... ${new Error().stack.split("\n")[1]}`);
            setOngoingReq(source);
          }
        },
        onAbort: () => {
          console.log("request aborted");
        },
      });
      if (!response) {
        sendPrompt(prompt, prevMessages, source, setOngoingReq);
      } else {
        // console.log(response);
        return response;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError("Network Issue");
        return;
      }
      // console.error(error);
      if (error.response.status === 400) {
        setError(error.response.data.message);
        return;
      }

      if (error.response.status >= 500) {
        if (error.response.status === 504) {
          setError("Request time was up");
        } else {
          setError("It is system Error ");
        }
      } else {
        setError("unexpected problem occured");
      }
      // console.log(error);
      setOngoingReq(null);
    } finally {
      setLoading(false);
      setOngoingReq(null);
      setError(null);
    }
  };

  const fetchText = async (img64, source, setOngoingReq) => {
    try {
      const cancelToken = source.token;
      setLoading(true);
      const response = await axios.post(`${baseUrl}/default/img`, {
        encodedStr: img64,
        cancelToken,
        onDownloadProgress: (progressEvent) => {
          setOngoingReq(source);
        },
      });
      // Handle the response as needed
      return response;
    } catch (error) {
      // console.error(error);
      if (axios.isAxiosError(error)) {
        setError("Network Issue");
        return;
      }
      if (error.response.status === 400) {
        setError(error.response.data.message);
        return;
      }
      if (error.response.status >= 500) {
        if (error.response.status === 504) {
          setError("it is taking too much time");
          return;
        } else {
          setError("It is system Error ");
        }
      }

      // console.log(error);
      setOngoingReq(null);
    } finally {
      setLoading(false);
      setOngoingReq(null);
      setError(null);
    }
  };

  const sendFeedback = async (feedback, cancelToken) => {
    try {
      // console.log("here is something" + feedback);
      setLoading(true);
      const response = await axios.post(
        `${baseUrl}/feedback/`,
        { feedback },
        { cancelToken }
      );

      return response;
    } catch (error) {
      // console.error(error);
      if (error.response.status >= 500) {
        if (error.response.status === 504)
          setError("it is taking too much time");
        if (error.response.status === 503) setError("503");
      } else {
        setError("It is system Error ");
      }
    } finally {
      setLoading(false);
      setError(null);
    }
  };

  const getVersion = async () => {
    try {
      const response = await axios.get(`${baseUrl}/version/`);
      // console.log(response.data);
      // console.log(response.data.version);
      if (response) return response.data.version;
    } catch (error) {
      // console.error("error getting version" + error);
    }
  };

  return {
    regDevice,
    sendPrompt,
    fetchText,
    sendFeedback,
    getVersion,
    loading,
    error,
  };
};

export default useApiCalls;
