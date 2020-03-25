import Vue from 'vue'
import Vuex from 'vuex'

// import * as modules from './modules'

Vue.use(Vuex)

export default function () {
  const store = new Vuex.Store({
    state: {
      countAddProductsInBasket: 0,
      openBasketBool: false,
      sellProducts: {
        arraySellProducts: [],
        allPrice: 0
      }
    },
    mutations: {
      increment (state, number = 1) {
        state.countAddProductsInBasket += number
      },
      decrement (state, number = 1) {
        state.countAddProductsInBasket -= number
      },
      openBasket (state) {
        state.openBasketBool = !state.openBasketBool
      },
      incrementPrice (state, price) {
        state.sellProducts.allPrice += price
      },
      decrementPrice (state, price) {
        state.sellProducts.allPrice -= price
      },

      addProduct (state, payload) {
        let indexProduct = state.sellProducts.arraySellProducts.findIndex(element => element.prodId === payload.prodId)
        if (indexProduct === -1) {
          indexProduct = state.sellProducts.arraySellProducts.length
          const objCounter = {
            counter: 0,
            allPriceProduct: 0
          }
          state.sellProducts.arraySellProducts[indexProduct] = { ...payload, ...objCounter }
        }
        state.sellProducts.arraySellProducts[indexProduct].counter++
        state.sellProducts.arraySellProducts[indexProduct].allPriceProduct += +payload.finalPrice
      },
      removeProduct (state, productId) {
        const index = state.sellProducts.arraySellProducts.findIndex(elem => elem.prodId === productId)
        state.sellProducts.allPrice -= state.sellProducts.arraySellProducts[index].allPriceProduct
        state.sellProducts.arraySellProducts.splice(index, 1)
      }
    }
  })

  return store
}
