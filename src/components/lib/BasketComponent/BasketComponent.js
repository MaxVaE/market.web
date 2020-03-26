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
      'sellProducts'
    ])
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
      this.placeOrder = !this.placeOrder
    },
    editCounterProduct (productId) {
      const value = +event.target.value
      if (value > 0) {
        this.obj[productId] = +event.target.value
      }
      // product.allPriceProduct = product.counter * product.finalPrice
      // console.log(this.obj)
      // event.target.value = ''
    },
    plus (productId) {
      if (this.obj[productId] !== undefined) {
        const count = this.obj[productId]
        this.incrementCounter({ id: productId, count })
        this.increment(count)
      }
    },
    minus (productId) {
      if (this.obj[productId] !== undefined) {
        const count = this.obj[productId]
        const indexProduct = this.sellProducts.arraySellProducts.findIndex(element => element.prodId === productId)
        const positiveCount = this.sellProducts.arraySellProducts[indexProduct].counter - count > 0
        const newPrice = positiveCount ? this.sellProducts.arraySellProducts[indexProduct].finalPrice * count : this.sellProducts.arraySellProducts[indexProduct].allPriceProduct - this.sellProducts.arraySellProducts[indexProduct].finalPrice
        this.decrementCounter({ index: indexProduct, count, positiveCount, newPrice })
        this.decrementPrice(newPrice)
        this.decrement(positiveCount ? count : this.sellProducts.arraySellProducts[indexProduct].counter - 1)
      }
    }
  }
}
