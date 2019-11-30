export default {
  data () {
    return {
      title: ['Акции', 'Бренды', 'Книги', 'Магазины', 'Сертификаты', 'Электроника', 'Корзина']
    }
  },
  methods: {
    clickSort (item) {
      this.$emit('sort', item)
    }
  }
}
