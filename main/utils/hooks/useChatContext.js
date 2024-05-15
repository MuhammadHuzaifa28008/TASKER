import { useContext } from "react";
import { ChatContext } from "../context/chatContext";

export function useChatContext() {
    return useContext(ChatContext);
}