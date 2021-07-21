import style from './Messages.module.css'

const Messages = () => {
    return (
        <div className={style.messages}>
            <div className={style.users}>
                <div className={style.user}>
                    <p className={style.user_name + " " + style.active}>Dima</p>
                </div>
                <div className={style.user}>
                    <p className={style.user_name}>Ivan</p>
                </div>
                <div className={style.user}>
                    <p className={style.user_name}>Kirill</p>
                </div>
                <div className={style.user}>
                    <p className={style.user_name}>Alexey</p>
                </div>
                <div className={style.user}>
                    <p className={style.user_name}>Sasha</p>
                </div>
                
            </div>

            <div className={style.chat}>
                <div className={style.chat_message}>
                    <p className={style.text}>Hi</p>
                </div>
                <div className={style.chat_message}>
                    <p className={style.text}>How are you?</p>
                </div>
                <div className={style.chat_message}>
                    <p className={style.text}>I'm fine, thank you!</p>
                </div>
            </div>
        </div>
    )
}

export default Messages