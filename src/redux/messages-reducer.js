let initialState = {
    // Собеседники с которыми ведутся диалоги
    users: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Ivan" },
        { id: 3, name: "Kirill" },
        { id: 4, name: "Alexey" },
        { id: 5, name: "Sasha" },
    ],
    // Cообщения пользователей
    dialogs: [
        { id: 1, messageContent: "Hi" },
        { id: 2, messageContent: "How are you?" },
        { id: 3, messageContent: "I'm fine, thank you!" },
        { id: 4, messageContent: "Today is a good weather! Let's go for a walk" },
        { id: 5, messageContent: "Yeah, sure" }
    ],
    // Текущее вводимое сообщение в поле чата с собеседником
    newMessageText: ""
}

const messagesReducer = (state = initialState, action) => {
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