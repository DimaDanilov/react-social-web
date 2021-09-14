import style from './Messages.module.css'
import UserElement from './UserElement/UserElement'
import DialogsElement from './DialogsElement/DialogsElement'
import MessageFormContainer from './MessageForm/MessageFormContainer'

const Messages = (props) => {
    // Создание компонент для имен собеседников (в пропсы отправляется имя из массива users(который приходит в Messages через пропсы))
    let usersElements = props.users.map((user) => <UserElement key={user.id} id={user.id} name={user.name} />)

    // Создание компонент для диалогов (в пропсы отправляется сообщение из массива dialogs(который приходит в Messages через пропсы))
    let dialogsElements = props.dialogs.map((message) => <DialogsElement key={message.id} messageContent={message.messageContent} />)

    return (
        <div className={style.messages}>

            {/* Список пользователей с которыми ведётся чат */}
            <div className={style.users}>
                {usersElements}
            </div>

            {/* Список сообщений */}
            <div className={style.chat}>
                {dialogsElements}
                <MessageFormContainer />
            </div>

        </div>
    )
}

export default Messages