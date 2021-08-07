import avatar1 from '../img/avatar/avatar_1.jpg'


let store = {
    _state: {
        profilePage: {
            // Контент постов
            postContent: [
                { id: 1, message: "Hi, this is my profile!", avatar: avatar1 },
                { id: 2, message: "Today I made an amazing coffee! Learned to cook cappuccino. I love it :)", avatar: avatar1 },
                { id: 3, message: "Good morning everybody! It's very beautiful sunny day ^^", avatar: avatar1 },
            ],
            // Текст в форме для нового поста
            newPostText: ""
        },
        messagesPage: {
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
            newMessageText: ""
        }
    },
    _callSubscriber() {
        // Локальная функция в которую приходит функция перерендера из индекса при вызове subscribe()
    },


    getState() {
        return this._state;
    },
    subscribe(observer) {
        // subscribe необходима для получения рендера дерева из index.
        // Когда приходит функция рендера из индекса, _callSubscriber() приравнивается к полученной функции из index
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === "ADD-POST") {
            let newPost = {
                id: 4,
                message: this._state.profilePage.newPostText,
                avatar: avatar1
            };
            this._state.profilePage.postContent.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === "SEND-MESSAGE") {
            let newMessage = {
                id: 6,
                messageContent: this._state.messagesPage.newMessageText,
            };
            this._state.messagesPage.dialogs.push(newMessage);
            this._state.messagesPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
            this._state.messagesPage.newMessageText = action.messageText;
            this._callSubscriber(this._state);
        }
    }
}


// Action-creator'ы для выполнения нужного dispatch (здесь не выполняются, посылаются в UI в компоненты с формами)
export const addPostActionCreator = () => ({ type: "ADD-POST" })
export const updateNewPostTextActionCreator = (areaText) => ({ type: "UPDATE-NEW-POST-TEXT", newText: areaText })
export const sendMessageActionCreator = () => ({ type: "SEND-MESSAGE" })
export const updateNewMessageTextActionCreator = (messageText) => ({ type: "UPDATE-NEW-MESSAGE-TEXT", messageText: messageText })



export default store;