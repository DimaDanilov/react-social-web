import avatar1 from '../img/avatar/avatar_1.jpg'

let state = {
    ProfilePage: {
        // Контент постов
        post_content: [
            { message: "Hi, this is my profile!", avatar: avatar1 },
            { message: "Today I made an amazing coffee! Learned to cook cappuccino. I love it :)", avatar: avatar1 },
            { message: "Good morning everybody! It's very beautiful sunny day ^^", avatar: avatar1 },
        ]
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

export default state;