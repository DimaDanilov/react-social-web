import style from './Messages.module.css'
import UserElement from './UserElement/UserElement'
import DialogsElement from './DialogsElement/DialogsElement'

const Messages = (props) => {

    // Создание компонент для имен собеседников (в пропсы отправляется имя из массива users(который приходит в Messages через пропсы))
    let UsersElements = props.state.Users.map((user) => <UserElement id={user.id} name={user.name} />)

    // Создание компонент для диалогов (в пропсы отправляется сообщение из массива dialogs(который приходит в Messages через пропсы))
    let DialogsElements = props.state.Dialogs.map((message) => <DialogsElement message_content={message.message_content} />)

    return (
        <div className={style.messages}>

            {/* Список пользователей с которыми ведётся чат */}
            <div className={style.users}>
                {UsersElements}
            </div>

            {/* Список сообщений */}
            <div className={style.chat}>
                {DialogsElements}
            </div>

        </div>
    )
}

export default Messages