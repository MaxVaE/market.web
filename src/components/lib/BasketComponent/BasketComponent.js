import OrdersComponent from '@/components/lib/OrdersComponent/OrdersComponent.vue'
import { mapMutations, mapState } from 'vuex'

export default {
  components: {
    OrdersComponent
  },
  data () {
    return {
      placeOrder: true
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
      'decrement'
    ]),
    deletedProduct (product) {
      this.removeProduct(product.prodId)
      this.decrement(product.counter)
    },
    openOrders () {
      this.placeOrder = !this.placeOrder
    }
  }
}
