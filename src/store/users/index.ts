import Amplify, * as AmplifyModules from 'aws-amplify'
import * as gqlQueries from '../../graphql/queries'
import * as moment from 'moment';
const API = AmplifyModules.API;
const gqlOperation = AmplifyModules.graphqlOperation
import { Storage } from 'aws-amplify';


export default {
  namespaced: true,
  state: () => ({
    jwt: '',
    group: '',
    notificationList:[],
    username: '',
    userAvatar:'',
    userProvider:''
  }),
  getters: {
    userAvatar: state => {
      return state.userAvatar;
    },
    notificationList: state => {
      return state.notificationList;
    },
    notificationUnreadCount: state => {
      return state.notificationList.filter(noti => !noti.isRead).length
    },
    isAdmin: state => {
      return state.group.includes('AdminJsi') || state.group.includes('AdminAgmiru');
    }
  },
  actions: {
    userAvatarUpdate(context, data) {
      context.commit('avatarUpdate',data)
    },
    userProviderUpdate(context, data) {
      context.commit('userProviderUpdate',data)
    },
    async getUserAvatar(context) {
      const user: any = await API.graphql(gqlOperation(gqlQueries.getUser, {id: context.state.username }));
      if(user.data.getUser && user.data.getUser.avatar) {
        context.commit('avatarUpdate', user.data.getUser.avatar)
      } else if (!context.state.userAvatar) {
        context.commit('avatarUpdate','')
      }
    }
  },
  mutations: {
    jwtUpdate: (state:any, data:any) => state.jwt = data,
    groupUpdate: (state:any, data:any) => state.group = data,
    updateAvatarGoogle: (state:any, data:any) => {
      state.userAvatar = data
    },
    userNameUpdate: (state:any, data:any) => state.username = data,
    userProviderUpdate:  (state:any, data:any) => state.userProvider = data,

    avatarUpdate: (state:any, data:any)  => {
      switch(data.type) {
        case 'users/userAvatarUpdate' :
          state.userAvatar = data.userAvatar;
          break;
        default:
          state.userAvatar = data
      }
    }
  }
}
