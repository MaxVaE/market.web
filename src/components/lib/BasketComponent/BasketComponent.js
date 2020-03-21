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
      'openBasket'
    ]),
    openOrders () {
      this.placeOrder = !this.placeOrder
    }
  }
}
