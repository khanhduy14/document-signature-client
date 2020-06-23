// tslint:disable
// eslint-disable
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createDocument = /* GraphQL */ `
  mutation CreateDocument(
    $input: CreateDocumentInput!
    $condition: ModelDocumentConditionInput
  ) {
    createDocument(input: $input, condition: $condition) {
      id
      owner
      storage_key
      verify_status
      createdAt
      updatedAt
    }
  }
`;
export const updateDocument = /* GraphQL */ `
  mutation UpdateDocument(
    $input: UpdateDocumentInput!
    $condition: ModelDocumentConditionInput
  ) {
    updateDocument(input: $input, condition: $condition) {
      id
      owner
      storage_key
      verify_status
      createdAt
      updatedAt
    }
  }
`;
export const deleteDocument = /* GraphQL */ `
  mutation DeleteDocument(
    $input: DeleteDocumentInput!
    $condition: ModelDocumentConditionInput
  ) {
    deleteDocument(input: $input, condition: $condition) {
      id
      owner
      storage_key
      verify_status
      createdAt
      updatedAt
    }
  }
`;
export const createMytype = /* GraphQL */ `
  mutation CreateMytype(
    $input: CreateMytypeInput!
    $condition: ModelMytypeConditionInput
  ) {
    createMytype(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateMytype = /* GraphQL */ `
  mutation UpdateMytype(
    $input: UpdateMytypeInput!
    $condition: ModelMytypeConditionInput
  ) {
    updateMytype(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteMytype = /* GraphQL */ `
  mutation DeleteMytype(
    $input: DeleteMytypeInput!
    $condition: ModelMytypeConditionInput
  ) {
    deleteMytype(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
    }
  }
`;
