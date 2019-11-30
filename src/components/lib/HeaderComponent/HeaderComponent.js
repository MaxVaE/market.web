export default {
  props: {
    lengthProducts: Number
  },
  data () {
    return {
      title: ['Акции', 'Бренды', 'Книги', 'Магазины', 'Сертификаты', 'Электроника'],
      basketClose: 'false'
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
    }
  }
}
