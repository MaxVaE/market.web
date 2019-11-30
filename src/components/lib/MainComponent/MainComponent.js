// import axios from 'axios'
import BasketComponent from '@/components/lib/BasketComponent/BasketComponent.vue'

export default {
  components: {
    BasketComponent
  },
  props: {
    openBasket: Boolean
  },
  data () {
    return {
      allProducts: [
        { id: 1, image: 'http://html.xpager.ru/hakaton/img/photos/1.jpg', text: 'Hello World one', brand: 'Apple', price: '120 000 Р', lastPrice: '145 000 Р', count: 1 },
        { id: 2, image: 'http://html.xpager.ru/hakaton/img/photos/2.jpg', text: 'Hello World two Hello World two Hello World two Hello World two Hello World two Hello World two ', brand: 'HP', price: '100 000 Р', lastPrice: '115 000 Р', count: 1 },
        { id: 3, image: 'http://html.xpager.ru/hakaton/img/photos/1.jpg', text: 'Hello World one', brand: 'Apple', price: '120 000 Р', lastPrice: '145 000 Р', count: 1 },
        { id: 4, image: 'http://html.xpager.ru/hakaton/img/photos/2.jpg', text: 'Hello World two', brand: 'HP', price: '100 000 Р', lastPrice: '115 000 Р', count: 1 },
        { id: 5, image: 'http://html.xpager.ru/hakaton/img/photos/1.jpg', text: 'Hello World one', brand: 'Apple', price: '120 000 Р', lastPrice: '145 000 Р', count: 1 },
        { id: 6, image: 'http://html.xpager.ru/hakaton/img/photos/2.jpg', text: 'Hello World two', brand: 'HP', price: '100 000 Р', lastPrice: '115 000 Р', count: 1 },
        { id: 7, image: 'http://html.xpager.ru/hakaton/img/photos/1.jpg', text: 'Hello World one', brand: 'Apple', price: '120 000 Р', lastPrice: '145 000 Р', count: 1 },
        { id: 8, image: 'http://html.xpager.ru/hakaton/img/photos/2.jpg', text: 'Hello World two', brand: 'HP', price: '100 000 Р', lastPrice: '115 000 Р', count: 1 },
        { id: 9, image: 'http://html.xpager.ru/hakaton/img/photos/1.jpg', text: 'Hello World one', brand: 'Apple', price: '120 000 Р', lastPrice: '145 000 Р', count: 1 },
        { id: 10, image: 'http://html.xpager.ru/hakaton/img/photos/2.jpg', text: 'Hello World two', brand: 'HP', price: '100 000 Р', lastPrice: '115 000 Р', count: 1 },
        { id: 11, image: 'http://html.xpager.ru/hakaton/img/photos/1.jpg', text: 'Hello World one', brand: 'Apple', price: '120 000 Р', lastPrice: '145 000 Р', count: 1 },
        { id: 12, image: 'http://html.xpager.ru/hakaton/img/photos/2.jpg', text: 'Hello World two', brand: 'HP', price: '100 000 Р', lastPrice: '115 000 Р', count: 1 }
      ],
      arraySellProducts: [],
      countBuyProduct: 0
    }
  },
  methods: {
    addProduct (item) {
      let idNotSimilar = true
      for (let i = 0; i < this.arraySellProducts.length; i++) {
        if (this.arraySellProducts[i].id === item.id) {
          this.arraySellProducts[i].count++
          idNotSimilar = false
          break
        }
      }
      if (idNotSimilar) {
        this.arraySellProducts[this.arraySellProducts.length] = item
      }
      this.countBuyProduct++
      this.lengthProduct()
    },
    lengthProduct () {
      return this.$emit('addsProducts', this.countBuyProduct)
    }
  }
}
