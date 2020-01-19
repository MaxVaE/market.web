import { mapMutations, mapState } from 'vuex'

export default {
  data () {
    return {
      title: ['Акции', 'Бренды', 'Книги', 'Магазины', 'Сертификаты', 'Электроника']
    }
  },
  computed: {
    basketOpen () {
      return this.countAddProductsInBasket <= 0
    },
    ...mapState([
      'countAddProductsInBasket'
    ])
  },
  methods: {
    clickSort (item) {
      this.$emit('sort', item)
    },
    clickBasket () {
      if (this.countAddProductsInBasket > 0) {
        this.openBasket()
      }
    },
    ...mapMutations([
      'increment',
      'decrement',
      'openBasket'
    ])
  }
}
