const messagesReducer = (state, action) => {
    switch (action.type) {
        case "SEND-MESSAGE":
            let newMessage = {
                id: 6,
                messageContent: state.newMessageText,
            };
            state.dialogs.push(newMessage);
            state.newMessageText = '';
            return state;
        case "UPDATE-NEW-MESSAGE-TEXT":
            state.newMessageText = action.messageText;
            return state;
        default:
            return state;
    }
}

// Action-creator'ы для выполнения нужного dispatch (здесь не выполняются, посылаются в UI в компоненту MessageForm)
export const sendMessageActionCreator = () => ({ type: "SEND-MESSAGE" })
export const updateNewMessageTextActionCreator = (messageText) => ({ type: "UPDATE-NEW-MESSAGE-TEXT", messageText: messageText })


export default messagesReducer