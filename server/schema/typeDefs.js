
const typeDefs = `
type User {
    _id: ID
    name: String
    email: String
    password: String
    pic: String 
    isAdmin: Boolean
    }

    type Message {
        sender: User
        content: String
        chat: Chat
        readBy: [User]
    }

    type Chat {
        chatName: String
        isGroupChat: Boolean
        users: [User]
        latestMessage: Message
        groupAdmin: User
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        me: User
        allUsers: [User]
    }

    type Mutation {
    addUser(name: String, email: String, password: String, pic: String): Auth
    login(email: String, password: String): Auth

    }

`