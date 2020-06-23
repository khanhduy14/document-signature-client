// tslint:disable
// eslint-disable
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      owner
      profile
      avatar
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        owner
        profile
        avatar
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDocument = /* GraphQL */ `
  query GetDocument($id: ID!) {
    getDocument(id: $id) {
      id
      owner
      storage_key
      verify_status
      createdAt
      updatedAt
    }
  }
`;
export const listDocuments = /* GraphQL */ `
  query ListDocuments(
    $filter: ModelDocumentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDocuments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        storage_key
        verify_status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMytype = /* GraphQL */ `
  query GetMytype($id: ID!) {
    getMytype(id: $id) {
      id
      createdAt
      updatedAt
    }
  }
`;
export const listMytypes = /* GraphQL */ `
  query ListMytypes(
    $filter: ModelMytypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMytypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchDocuments = /* GraphQL */ `
  query SearchDocuments(
    $filter: SearchableDocumentFilterInput
    $sort: SearchableDocumentSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchDocuments(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        owner
        storage_key
        verify_status
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
