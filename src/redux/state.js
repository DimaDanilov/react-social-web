import avatar1 from '../img/avatar/avatar_1.jpg'


let store = {
    _state: {
        ProfilePage: {
            // Контент постов
            post_content: [
                { id: 1, message: "Hi, this is my profile!", avatar: avatar1 },
                { id: 2, message: "Today I made an amazing coffee! Learned to cook cappuccino. I love it :)", avatar: avatar1 },
                { id: 3, message: "Good morning everybody! It's very beautiful sunny day ^^", avatar: avatar1 },
            ],
            // Текст в форме для нового поста
            NewPostText: ""
        },
        MessagesPage: {
            // Собеседники с которыми ведутся диалоги
            Users: [
                { id: 1, name: "Dima" },
                { id: 2, name: "Ivan" },
                { id: 3, name: "Kirill" },
                { id: 4, name: "Alexey" },
                { id: 5, name: "Sasha" },
            ],
            // Cообщения пользователей
            Dialogs: [
                { message_content: "Hi" },
                { message_content: "How are you?" },
                { message_content: "I'm fine, thank you!" },
                { message_content: "Today is a good weather! Let's go for a walk" },
                { message_content: "Yeah, sure" }
            ],
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

    dispatch(action){
        if (action.type === "ADD-POST"){
            let newpost = {
                id: 4,
                message: this._state.ProfilePage.NewPostText,
                avatar: avatar1
            };
            this._state.ProfilePage.post_content.push(newpost);
            this._state.ProfilePage.NewPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === "UPDATE-NEW-POST-TEXT"){
            this._state.ProfilePage.NewPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}


export default store;