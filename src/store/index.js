import Vue from 'vue'
import Vuex from 'vuex'

// import * as modules from './modules'

Vue.use(Vuex)

export default function () {
  const store = new Vuex.Store({
    state: {
      countAddProductsInBasket: 0,
      openBasketBool: false
    },
    mutations: {
      increment (state) {
        state.countAddProductsInBasket++
      },
      decrement (state) {
        state.countAddProductsInBasket--
      },
      openBasket (state) {
        state.openBasketBool = !state.openBasketBool
      }
    }
  })

  return store
}
