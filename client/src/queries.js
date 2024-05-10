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
