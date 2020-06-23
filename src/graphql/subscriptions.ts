// tslint:disable
// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
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
export const onCreateDocument = /* GraphQL */ `
  subscription OnCreateDocument($owner: String) {
    onCreateDocument(owner: $owner) {
      id
      owner
      storage_key
      verify_status
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateDocument = /* GraphQL */ `
  subscription OnUpdateDocument($owner: String) {
    onUpdateDocument(owner: $owner) {
      id
      owner
      storage_key
      verify_status
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteDocument = /* GraphQL */ `
  subscription OnDeleteDocument($owner: String) {
    onDeleteDocument(owner: $owner) {
      id
      owner
      storage_key
      verify_status
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMytype = /* GraphQL */ `
  subscription OnCreateMytype {
    onCreateMytype {
      id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMytype = /* GraphQL */ `
  subscription OnUpdateMytype {
    onUpdateMytype {
      id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMytype = /* GraphQL */ `
  subscription OnDeleteMytype {
    onDeleteMytype {
      id
      createdAt
      updatedAt
    }
  }
`;
