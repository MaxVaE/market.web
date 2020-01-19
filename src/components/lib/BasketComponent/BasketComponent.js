import OrdersComponent from '@/components/lib/OrdersComponent/OrdersComponent.vue'
import { mapMutations } from 'vuex'

export default {
  components: {
    OrdersComponent
  },
  data () {
    return {
      placeOrder: true
    }
  },
  props: {
    sellProducts: Object
  },
  computed: {
    getSellProducts () {
      return this.sellProducts
    }
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
