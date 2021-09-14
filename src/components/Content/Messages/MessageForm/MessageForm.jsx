import style from "./MessageForm.module.css"

const MessageForm = (props) => {
    // Функция вызываемая ивентом клика отправки сообщения
    let onSendMessage = () => {
        props.sendMessage();
    }

    // Функция вызываемая ивентом изменения формы сообщения
    let onMessageChange = (e) => {
        let messageText = e.target.value;
        props.updateNewMessageText(messageText);
    }

    return (
        <div>
            <form className={style.form} action="#" >
                <textarea className={style.textarea} onChange={onMessageChange} name="messageContent" value={props.newMessageText} placeholder="Введите сообщение..." rows="7" cols="70" minLength="5" maxLength="511" />
                <input className={style.button} onClick={onSendMessage} type="button" value="Отправить"></input>
            </form>
        </div>
    )
}

export default MessageForm