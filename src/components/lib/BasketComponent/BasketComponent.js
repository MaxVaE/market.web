import OrdersComponent from '@/components/lib/OrdersComponent/OrdersComponent.vue'

export default {
  components: {
    OrdersComponent
  },
  props: {
    sellProducts: Object
  },
  data () {
    return {
      basketOpen: true
    }
  },
  computed: {
    getSellProducts () {
      return this.sellProducts
    }
  },
  methods: {
    Orders () {
      this.basketOpen = !this.basketOpen
    },
    closeBasket () {
      this.basketOpen = false
      this.$emit('closeBasket', false)
    }
  }
}
