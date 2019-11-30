export default {
  props: {
    lengthProducts: Number
  },
  data () {
    return {
      title: ['Акции', 'Бренды', 'Книги', 'Магазины', 'Сертификаты', 'Электроника'],
      openBasketBool: false
    }
  },
  computed: {
    basketOpen () {
      return !this.lengthProducts > 0
    }
  },
  methods: {
    clickSort (item) {
      this.$emit('sort', item)
    },
    clickBasket () {
      if (this.lengthProducts > 0) {
        this.openBasketBool = !this.openBasketBool
      }
      this.$emit('OpenBasket', this.openBasketBool)
    }
  }
}
