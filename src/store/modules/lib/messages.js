import uniqid from 'uniqid'
import { MessageModel } from 'src/models'

export const ADD_MESSAGE = 'messages/add'

export default () => ({
  namespaced: true,
  state: {
    list: [
      new MessageModel({
        id: '1',
        from: 'Noname',
        text: 'Hey! How\'s it going?',
        timestamp: new Date('2019-09-30 19:58:33')
      })
    ]
  },
  mutations: {
    [ADD_MESSAGE] (state, message) {
      state.list = [...state.list, new MessageModel(message)]
    }
  },
  actions: {
    async send ({ commit }, text) {
      commit(ADD_MESSAGE, {
        id: uniqid(),
        from: 'Me',
        timestamp: new Date(),
        text
      })
    }
  }
})
