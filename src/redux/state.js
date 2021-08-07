import profileReducer from './profile-reducer'
import avatar1 from '../img/avatar/avatar_1.jpg'
import messagesReducer from './messages-reducer';


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
            // Текущее вводимое сообщение в поле чата с собеседником
            newMessageText: ""
        }
    },
    _callSubscriber() {
        // Локальная функция в которую приходит функция перерендера(rerenderTree) из index.js при вызове subscribe()
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
        // Разбиение state на несколько частей для их обработки
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)

        // Ререндер страницы после нужного действия
        this._callSubscriber(this._state);
    }
}


export default store;