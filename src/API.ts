/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
  email: string,
  owner?: string | null,
  profile?: string | null,
  avatar?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  profile?: ModelStringInput | null,
  avatar?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  owner?: string | null,
  profile?: string | null,
  avatar?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateDocumentInput = {
  id?: string | null,
  owner?: string | null,
  storage_key?: string | null,
  verify_status?: boolean | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelDocumentConditionInput = {
  storage_key?: ModelStringInput | null,
  verify_status?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelDocumentConditionInput | null > | null,
  or?: Array< ModelDocumentConditionInput | null > | null,
  not?: ModelDocumentConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateDocumentInput = {
  id: string,
  owner?: string | null,
  storage_key?: string | null,
  verify_status?: boolean | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteDocumentInput = {
  id?: string | null,
};

export type CreateMytypeInput = {
  id?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelMytypeConditionInput = {
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMytypeConditionInput | null > | null,
  or?: Array< ModelMytypeConditionInput | null > | null,
  not?: ModelMytypeConditionInput | null,
};

export type UpdateMytypeInput = {
  id: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteMytypeInput = {
  id?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  profile?: ModelStringInput | null,
  avatar?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelDocumentFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  storage_key?: ModelStringInput | null,
  verify_status?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelDocumentFilterInput | null > | null,
  or?: Array< ModelDocumentFilterInput | null > | null,
  not?: ModelDocumentFilterInput | null,
};

export type ModelMytypeFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMytypeFilterInput | null > | null,
  or?: Array< ModelMytypeFilterInput | null > | null,
  not?: ModelMytypeFilterInput | null,
};

export type SearchableDocumentFilterInput = {
  id?: SearchableIDFilterInput | null,
  owner?: SearchableStringFilterInput | null,
  storage_key?: SearchableStringFilterInput | null,
  verify_status?: SearchableBooleanFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchableDocumentFilterInput | null > | null,
  or?: Array< SearchableDocumentFilterInput | null > | null,
  not?: SearchableDocumentFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
};

export type SearchableBooleanFilterInput = {
  eq?: boolean | null,
  ne?: boolean | null,
};

export type SearchableDocumentSortInput = {
  field?: SearchableDocumentSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableDocumentSortableFields {
  id = "id",
  owner = "owner",
  storage_key = "storage_key",
  verify_status = "verify_status",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    owner: string | null,
    profile: string | null,
    avatar: string | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    owner: string | null,
    profile: string | null,
    avatar: string | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    owner: string | null,
    profile: string | null,
    avatar: string | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type CreateDocumentMutationVariables = {
  input: CreateDocumentInput,
  condition?: ModelDocumentConditionInput | null,
};

export type CreateDocumentMutation = {
  createDocument:  {
    __typename: "Document",
    id: string,
    owner: string | null,
    storage_key: string | null,
    verify_status: boolean | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type UpdateDocumentMutationVariables = {
  input: UpdateDocumentInput,
  condition?: ModelDocumentConditionInput | null,
};

export type UpdateDocumentMutation = {
  updateDocument:  {
    __typename: "Document",
    id: string,
    owner: string | null,
    storage_key: string | null,
    verify_status: boolean | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type DeleteDocumentMutationVariables = {
  input: DeleteDocumentInput,
  condition?: ModelDocumentConditionInput | null,
};

export type DeleteDocumentMutation = {
  deleteDocument:  {
    __typename: "Document",
    id: string,
    owner: string | null,
    storage_key: string | null,
    verify_status: boolean | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type CreateMytypeMutationVariables = {
  input: CreateMytypeInput,
  condition?: ModelMytypeConditionInput | null,
};

export type CreateMytypeMutation = {
  createMytype:  {
    __typename: "Mytype",
    id: string,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type UpdateMytypeMutationVariables = {
  input: UpdateMytypeInput,
  condition?: ModelMytypeConditionInput | null,
};

export type UpdateMytypeMutation = {
  updateMytype:  {
    __typename: "Mytype",
    id: string,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type DeleteMytypeMutationVariables = {
  input: DeleteMytypeInput,
  condition?: ModelMytypeConditionInput | null,
};

export type DeleteMytypeMutation = {
  deleteMytype:  {
    __typename: "Mytype",
    id: string,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    owner: string | null,
    profile: string | null,
    avatar: string | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      owner: string | null,
      profile: string | null,
      avatar: string | null,
      createdAt: string | null,
      updatedAt: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetDocumentQueryVariables = {
  id: string,
};

export type GetDocumentQuery = {
  getDocument:  {
    __typename: "Document",
    id: string,
    owner: string | null,
    storage_key: string | null,
    verify_status: boolean | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type ListDocumentsQueryVariables = {
  filter?: ModelDocumentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDocumentsQuery = {
  listDocuments:  {
    __typename: "ModelDocumentConnection",
    items:  Array< {
      __typename: "Document",
      id: string,
      owner: string | null,
      storage_key: string | null,
      verify_status: boolean | null,
      createdAt: string | null,
      updatedAt: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetMytypeQueryVariables = {
  id: string,
};

export type GetMytypeQuery = {
  getMytype:  {
    __typename: "Mytype",
    id: string,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type ListMytypesQueryVariables = {
  filter?: ModelMytypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMytypesQuery = {
  listMytypes:  {
    __typename: "ModelMytypeConnection",
    items:  Array< {
      __typename: "Mytype",
      id: string,
      createdAt: string | null,
      updatedAt: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type SearchDocumentsQueryVariables = {
  filter?: SearchableDocumentFilterInput | null,
  sort?: SearchableDocumentSortInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SearchDocumentsQuery = {
  searchDocuments:  {
    __typename: "SearchableDocumentConnection",
    items:  Array< {
      __typename: "Document",
      id: string,
      owner: string | null,
      storage_key: string | null,
      verify_status: boolean | null,
      createdAt: string | null,
      updatedAt: string | null,
    } | null > | null,
    nextToken: string | null,
    total: number | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    owner: string | null,
    profile: string | null,
    avatar: string | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    owner: string | null,
    profile: string | null,
    avatar: string | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    owner: string | null,
    profile: string | null,
    avatar: string | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type OnCreateDocumentSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateDocumentSubscription = {
  onCreateDocument:  {
    __typename: "Document",
    id: string,
    owner: string | null,
    storage_key: string | null,
    verify_status: boolean | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type OnUpdateDocumentSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateDocumentSubscription = {
  onUpdateDocument:  {
    __typename: "Document",
    id: string,
    owner: string | null,
    storage_key: string | null,
    verify_status: boolean | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type OnDeleteDocumentSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteDocumentSubscription = {
  onDeleteDocument:  {
    __typename: "Document",
    id: string,
    owner: string | null,
    storage_key: string | null,
    verify_status: boolean | null,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type OnCreateMytypeSubscription = {
  onCreateMytype:  {
    __typename: "Mytype",
    id: string,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type OnUpdateMytypeSubscription = {
  onUpdateMytype:  {
    __typename: "Mytype",
    id: string,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};

export type OnDeleteMytypeSubscription = {
  onDeleteMytype:  {
    __typename: "Mytype",
    id: string,
    createdAt: string | null,
    updatedAt: string | null,
  } | null,
};
