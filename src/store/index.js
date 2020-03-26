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

      incrementCounter (state, edit) {
        const indexProduct = state.sellProducts.arraySellProducts.findIndex(element => element.prodId === edit.id)
        state.sellProducts.arraySellProducts[indexProduct].counter += edit.count
        state.sellProducts.arraySellProducts[indexProduct].allPriceProduct += edit.count * state.sellProducts.arraySellProducts[indexProduct].finalPrice
        state.sellProducts.allPrice += edit.count * state.sellProducts.arraySellProducts[indexProduct].finalPrice
      },
      decrementCounter (state, edit) {
        state.sellProducts.arraySellProducts[edit.index].counter -= edit.positiveCount ? edit.count : 0
        state.sellProducts.arraySellProducts[edit.index].allPriceProduct -= edit.newPrice
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
