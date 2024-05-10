import { gql } from '@apollo/client';

// Mutation to add a new user
export const ADD_USER = gql`
mutation addUser($name: String, $email: String, $password: String, $pic: String) {
    addUser(name: $name, email: $email, password: $password, pic: $pic) {
        token
        user {
            email
            name
        }
    }
}
`;

// Mutation for user login
export const LOGIN_USER = gql`
mutation login($email: String, $password: String) {
    login(email: $email, password: $password) {
      token
      user {
        email
        name
        _id
      }
    }
  }
  
`;
