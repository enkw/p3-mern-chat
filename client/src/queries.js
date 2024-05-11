import { gql } from '@apollo/client';

// Query to fetch current user's details
export const FETCH_CURRENT_USER = gql`
query {
    me {
        _id
        name
        email
        pic
        isAdmin
    }
}
`;

// Query to fetch all users
export const FETCH_ALL_USERS = gql`
query {
    allUsers {
        _id
        name
        email
        pic
        isAdmin
    }
}
`;

// Query to search users by a keyword
// export const SEARCH_USERS = gql`
// query SearchUsers($keyword: String!) {
//     searchUsers(keyword: $keyword) {
//         _id
//         name
//         email
//         pic
//     }
// }
// `;

// Mutation to initiate a chat between the current user and another user
// export const INITIATE_CHAT = gql`
// mutation InitiateChat($userId: ID!) {
//     initiateChat(userId: $userId) {
//         _id
//         participants {
//             _id
//             name
//             email
//             pic
//         }
//         messages {
//             _id
//             sender {
//                 _id
//                 name
//                 pic
//             }
//             content
//             createdAt
//         }
//     }
// }
// `;

