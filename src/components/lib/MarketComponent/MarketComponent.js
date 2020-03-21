import axios from 'axios'
import BasketComponent from '@/components/lib/BasketComponent/BasketComponent.vue'
import { mapMutations, mapState } from 'vuex'

export default {
  components: {
    BasketComponent
  },
  data () {
    return {
      allProducts: [
        { prodId: 144152323,
          title: '15.6\' Ноутбук Lenovo ThinkPad P51, черный',
          brand: 'Lenovo',
          price: 185439,
          finalPrice: 159520,
          category: 'Laptops',
          quantity: 62,
          imageUrl: '/images/144152323.jpg',
          availability: true
        },
        { prodId: 144252323,
          title: '15.6\' Ноутбук Asser AP999, черный',
          brand: 'ASSER',
          price: 185339,
          finalPrice: 139520,
          category: 'Laptops',
          quantity: 57,
          imageUrl: '/images/144152323.jpg',
          availability: true
        }
      ]
    }
  },
  computed: {
    ...mapState([
      'openBasketBool'
    ])
  },
  methods: {
    ...mapMutations([
      'increment',
      'addProduct',
      'incrementPrice'
    ]),
    addSellProduct (product) {
      this.addProduct(product)
      this.incrementPrice(+product.finalPrice)
      this.increment()
    },
    getProducts: async function () {
      try {
        const { data } = await axios.get('http://192.168.1.6/BlackFriday/12')
        this.allProducts = data
      } catch (error) {
        console.log(error)
      }
    }
  }
}
