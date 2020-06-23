import * as AmplifyModules from 'aws-amplify';
import * as gqlMutations from '../graphql/mutations';
import * as gqlQueries from '../graphql/queries';
import DateUtils from "src/utils/DateUtils";

export default class UserService {
  public static async getUser (userId) {
    let userQuery: any = await AmplifyModules.API.graphql(AmplifyModules.graphqlOperation(gqlQueries.getUser, {id : userId}))
    console.log(userQuery)
    if (userQuery.data.getUser) {
      return userQuery.data.getUser
    } else {
      return null
    }
  }
}
