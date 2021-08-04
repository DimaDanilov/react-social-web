import avatar1 from '../img/avatar/avatar_1.jpg'
import rerenderTree from '../render'

let state = {
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
}

export let AddPost = () => {
    let newpost = {
        id: 4,
        message: state.ProfilePage.NewPostText,
        avatar: avatar1
    }
    state.ProfilePage.post_content.push(newpost);
    state.ProfilePage.NewPostText = '';
    rerenderTree();
}

export let updateNewPostText = (post_text) => {
    state.ProfilePage.NewPostText = post_text;
    rerenderTree();
}


export default state;