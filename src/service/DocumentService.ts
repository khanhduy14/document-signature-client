import * as AmplifyModules from 'aws-amplify';
import * as gqlMutations from '../graphql/mutations';
import * as gqlQueries from '../graphql/queries';
import DateUtils from "src/utils/DateUtils";

export default class DocumentService {
  public static async getDocument(filter = {}, orderBy = null) {
    console.log('123')
    const queryLimit = 100;
    let arg = {
      limit: queryLimit,
      sort: {field: orderBy ? orderBy : 'createdAt'}
    };
    if(filter){
      arg = { ...arg, ...filter };
    }
    let documentListQuery: any = await AmplifyModules.API.graphql(AmplifyModules.graphqlOperation(gqlQueries.searchDocuments, arg))
    let documentList = documentListQuery.data.searchDocuments.items;
    let nextToken = documentListQuery.data.searchDocuments.nextToken;
    const total = documentListQuery.data.searchDocuments.total

    while (nextToken) {
      arg = {...arg, ...{nextToken: nextToken}};
      documentListQuery = await AmplifyModules.API.graphql(AmplifyModules.graphqlOperation(gqlQueries.searchDocuments, arg))
      nextToken = documentListQuery.data.searchDocuments.nextToken;
      const nextItems = documentListQuery.data.searchDocuments.items;
      documentList = [...documentList,...nextItems];
    }

    documentList = documentList.map((item,key)=>{
      item.index = ++key;
      item.registerDate = DateUtils.dateDefaultStr(item.createdAt);
      return item;
    })

    return {
      data: documentList,
      nextToken: nextToken,
      total: total
    }
  }

  public static async createDocument(data) {
    const input = {
      storage_key : data,
      verify_status: false
    }
    await AmplifyModules.API.graphql(AmplifyModules.graphqlOperation(gqlMutations.createDocument, {input}))
  }
}
