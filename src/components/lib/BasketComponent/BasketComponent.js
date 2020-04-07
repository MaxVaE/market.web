import OrdersComponent from '@/components/lib/OrdersComponent/OrdersComponent.vue'
import { mapMutations, mapState } from 'vuex'

export default {
  components: {
    OrdersComponent
  },
  data () {
    return {
      placeOrder: true,
      obj: {}
    }
  },
  computed: {
    ...mapState([
      'sellProducts',
      'countAddProductsInBasket'
    ]),
    haveCountBasket () {
      return this.countAddProductsInBasket > 0
    }
  },
  methods: {
    ...mapMutations([
      'openBasket',
      'removeProduct',
      'decrementPrice',
      'decrement',
      'increment',
      'incrementCounter',
      'decrementCounter'
    ]),
    deletedProduct (product) {
      this.removeProduct(product.prodId)
      this.decrement(product.counter)
    },
    openOrders () {
      if (this.haveCountBasket) {
        this.placeOrder = !this.placeOrder
      }
    },

    editCounterProduct (productId) {
      const value = +event.target.value
      if (value > 0) {
        this.obj[productId] = +event.target.value
      } else if (this.obj[productId] !== undefined) {
        this.obj[productId] = 0
      }
    },
    plus (productId) {
      const count = this.obj[productId] !== undefined ? this.obj[productId] : 1
      this.incrementCounter({ id: productId, count })
      this.increment(count)
    },
    minus (productId) {
      const count = this.obj[productId] !== undefined ? this.obj[productId] : 1
      const indexProduct = this.sellProducts.arraySellProducts.findIndex(element => element.prodId === productId)
      const positiveCount = this.sellProducts.arraySellProducts[indexProduct].counter - count > 0
      const newPrice = positiveCount ? this.sellProducts.arraySellProducts[indexProduct].finalPrice * count : this.sellProducts.arraySellProducts[indexProduct].allPriceProduct - this.sellProducts.arraySellProducts[indexProduct].finalPrice
      this.decrement(positiveCount ? count : this.sellProducts.arraySellProducts[indexProduct].counter - 1)
      this.decrementCounter({ index: indexProduct, count, positiveCount, newPrice })
      this.decrementPrice(newPrice)
    }
  }
}
