import style from './DialogsElement.module.css'

const DialogsElement = (props) => {

    return (
        <div className={style.chat_message}>
            <p className={style.text}>{props.messageContent}</p>
        </div>
    )
}

export default DialogsElement