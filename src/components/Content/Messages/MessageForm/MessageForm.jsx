import React from "react";
import style from "./MessageForm.module.css"
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../../../redux/state'

const MessageForm = (props) => {

    let newMessageArea = React.createRef();

    let sendMessage = () => {
        let action = sendMessageActionCreator();
        props.dispatch(action);
    }

    let onMessageChange = () => {
        let messageText = newMessageArea.current.value;
        let action = updateNewMessageTextActionCreator(messageText);
        props.dispatch(action);
    }

    return (
        <div>
            <form class={style.form} action="#" >
                <textarea class={style.textarea} ref={newMessageArea} onChange={onMessageChange} name="messageContent" value={props.newMessageText} placeholder="Введите сообщение..." rows="7" cols="70" minlength="5" maxlength="511" />
                <input class={style.button} onClick={sendMessage} type="button" value="Отправить"></input>
            </form>
        </div>
    )
}

export default MessageForm