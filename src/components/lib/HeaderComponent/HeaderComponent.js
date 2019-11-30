export default {
  data () {
    return {
      title: ['Акции', 'Бренды', 'Книги', 'Магазины', 'Сертификаты', 'Электроника']
    }
  },
  methods: {
    clickSort (item) {
      this.$emit('sort', item)
    }
  }
}
