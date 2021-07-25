import style from './Messages.module.css'
import UserElement from './UserElement/UserElement'
import DialogsElement from './DialogsElement/DialogsElement'

const Messages = () => {

    // Массив имен собеседников
    let Users = [
        { name: "Dima" },
        { name: "Ivan" },
        { name: "Kirill" },
        { name: "Alexey" },
        { name: "Sasha" },
    ]

    // Создание компонент для имен собеседников (в пропсы отправляется имя из массива Users)
    let UsersElements = Users.map((user) => <UserElement name={user.name} />)

    // Массив сообщений
    let Dialogs = [
        { message_content: "Hi" },
        { message_content: "How are you?" },
        { message_content: "I'm fine, thank you!" },
        { message_content: "Today is a good weather! Let's go for a walk" },
        { message_content: "Yeah, sure" }
    ]

    // Создание компонент для диалогов (в пропсы отправляется сообщение из массива Dialogs)
    let DialogsElements = Dialogs.map((message) => <DialogsElement message_content={message.message_content} />)

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