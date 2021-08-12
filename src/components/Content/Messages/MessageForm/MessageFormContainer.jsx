import MessageForm from "./MessageForm";
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../../../redux/messages-reducer'

const MessageFormContainer = (props) => {
    let state = props.store.getState();

    // Отправка сообщения. Вызывается в MessageForm, отправляет action типа "SEND-MESSAGE"
    let sendMessage = () => {
        let action = sendMessageActionCreator();
        props.store.dispatch(action);
    }

    // Обновление формы отправки сообщения. Вызывается в MessageForm, отправляет action типа "UPDATE-NEW-MESSAGE-TEXT"
    let updateNewMessageText = (messageText) => {
        let action = updateNewMessageTextActionCreator(messageText);
        props.store.dispatch(action);
    }

    return (
        <MessageForm sendMessage={sendMessage} updateNewMessageText={updateNewMessageText} newMessageText={state.messagesPage.newMessageText} />
    )
}

export default MessageFormContainer