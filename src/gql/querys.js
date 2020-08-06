import gql from "graphql-tag";

export const GET_POSTS = gql`
  {
    getPosts {
      body
      createdAt
      id
      username
      likes {
        id
        username
        createdAt
      }
      imageId
      comments {
        id
        username
        createdAt
        body
      }
      likeCount
      commentCount
    }
  }
`;

export const GET_USER_QUERY = gql`
  query getUser($username: String!) {
    getUser(username: $username) {
      id
      username
      createdAt
      email
      imageId
    }
  }
`;

export const DELETE_POST_MUTATION = gql`
  mutation deletePost($postId: ID!) {
    deletePost(postId: $postId)
  }
`;

export const GET_POSTS_TO_UPDATE_CACHE = gql`
  {
    toUpdate: getPosts {
      body
      createdAt
      id
      username
      likes {
        id
        username
        createdAt
      }
      imageId
      comments {
        id
        username
        createdAt
        body
      }
      likeCount
      commentCount
    }
  }
`;

export const DELETE_COMMENT_MUTATION = gql`
  mutation deleteComment($postId: ID!, $commentId: ID!) {
    deleteComment(postId: $postId, commentId: $commentId) {
      id
      username
      body
      createdAt
      likes {
        id
        createdAt
        username
      }
      imageId
      comments {
        id
        username
        createdAt
        body
      }
      likeCount
      commentCount
    }
  }
`;

export const GET_SINGLE_POST_QUERY = gql`
  query getPost($postId: ID!) {
    getPost(postId: $postId) {
      id
      username
      body
      createdAt
      likes {
        id
        createdAt
        username
      }
      imageId
      comments {
        id
        body
        createdAt
        username
      }
      likeCount
      commentCount
    }
  }
`;

export const GET_SINGLE_POST_QUERY_TO_UPDATE = gql`
  query getPost($postId: ID!) {
    toUpdate: getPost(postId: $postId) {
      id
      username
      body
      createdAt
      likes {
        id
        createdAt
        username
      }
      imageId
      comments {
        id
        body
        createdAt
        username
      }
      likeCount
      commentCount
    }
  }
`;
