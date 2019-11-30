// import axios from 'axios'
import { BasketComponent } from 'src/components'

export default {
  components: {
    BasketComponent
  },
  data () {
    return {
      allProducts: [
        { image: 'http://html.xpager.ru/hakaton/img/photos/1.jpg', text: 'Hello World one', brand: 'Apple', price: '120 000 Р', lastPrice: '145 000 Р' },
        { image: 'http://html.xpager.ru/hakaton/img/photos/2.jpg', text: 'Hello World two Hello World two Hello World two Hello World two Hello World two Hello World two ', brand: 'HP', price: '100 000 Р', lastPrice: '115 000 Р' },
        { image: 'http://html.xpager.ru/hakaton/img/photos/1.jpg', text: 'Hello World one', brand: 'Apple', price: '120 000 Р', lastPrice: '145 000 Р' },
        { image: 'http://html.xpager.ru/hakaton/img/photos/2.jpg', text: 'Hello World two', brand: 'HP', price: '100 000 Р', lastPrice: '115 000 Р' },
        { image: 'http://html.xpager.ru/hakaton/img/photos/1.jpg', text: 'Hello World one', brand: 'Apple', price: '120 000 Р', lastPrice: '145 000 Р' },
        { image: 'http://html.xpager.ru/hakaton/img/photos/2.jpg', text: 'Hello World two', brand: 'HP', price: '100 000 Р', lastPrice: '115 000 Р' },
        { image: 'http://html.xpager.ru/hakaton/img/photos/1.jpg', text: 'Hello World one', brand: 'Apple', price: '120 000 Р', lastPrice: '145 000 Р' },
        { image: 'http://html.xpager.ru/hakaton/img/photos/2.jpg', text: 'Hello World two', brand: 'HP', price: '100 000 Р', lastPrice: '115 000 Р' },
        { image: 'http://html.xpager.ru/hakaton/img/photos/1.jpg', text: 'Hello World one', brand: 'Apple', price: '120 000 Р', lastPrice: '145 000 Р' },
        { image: 'http://html.xpager.ru/hakaton/img/photos/2.jpg', text: 'Hello World two', brand: 'HP', price: '100 000 Р', lastPrice: '115 000 Р' },
        { image: 'http://html.xpager.ru/hakaton/img/photos/1.jpg', text: 'Hello World one', brand: 'Apple', price: '120 000 Р', lastPrice: '145 000 Р' },
        { image: 'http://html.xpager.ru/hakaton/img/photos/2.jpg', text: 'Hello World two', brand: 'HP', price: '100 000 Р', lastPrice: '115 000 Р' }
      ],
      arraySellProducts: []
    }
  },
  methods: {
    addProduct (item) {
      this.arraySellProducts[this.arraySellProducts.length] = item
      this.lengthProduct()
    },
    lengthProduct () {
      return this.$emit('addsProducts', this.arraySellProducts.length)
    }
  }
}
