import { mapMutations, mapState } from 'vuex'

export default {
  data () {
    return {
      title: ['Акции', 'Бренды', 'Книги', 'Магазины', 'Сертификаты', 'Электроника'],
      tagsActiveFlags: { 'Акции': false, 'Бренды': false, 'Книги': false, 'Магазины': false, 'Сертификаты': false, 'Электроника': false }
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
      for (let tmp in this.tagsActiveFlags) {
        this.tagsActiveFlags[tmp] = false
      }
      this.tagsActiveFlags[item] = true
    },
    gitTags () {
      // TO DO
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
