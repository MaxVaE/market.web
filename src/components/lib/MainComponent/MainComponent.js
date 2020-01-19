import axios from 'axios'
import BasketComponent from '@/components/lib/BasketComponent/BasketComponent.vue'
import { mapMutations, mapState } from 'vuex'

export default {
  components: {
    BasketComponent
  },
  data () {
    return {
      allProducts: [{ image: '1', text: 'Hello World one', brand: 'Apple', price: '120 000 Р', lastPrice: '145 000 Р' }],
      countBuyProduct: 0,
      objCounter: {
        counter: 1,
        allPriceProduct: 0
      },
      sellProducts: {
        arraySellProducts: [],
        allPrice: 0
      }
    }
  },
  computed: {
    ...mapState([
      'openBasketBool'
    ])
  },
  methods: {
    addProduct (item) {
      const length = this.sellProducts.arraySellProducts.length
      const indexProduct = this.sellProducts.arraySellProducts.findIndex((element) => {
        return element.prodId === item.prodId
      }, [item.prodId])
      if (indexProduct === -1) {
        this.sellProducts.arraySellProducts[length] = item
        this.sellProducts.arraySellProducts[length] = { ...this.sellProducts.arraySellProducts[length], ...this.objCounter }
        this.sellProducts.arraySellProducts[length].allPriceProduct += +this.sellProducts.arraySellProducts[length].finalPrice
        this.sellProducts.allPrice += +this.sellProducts.arraySellProducts[length].finalPrice
      } else {
        this.sellProducts.arraySellProducts[indexProduct].counter++
        this.sellProducts.arraySellProducts[indexProduct].allPriceProduct += +this.sellProducts.arraySellProducts[indexProduct].finalPrice
        this.sellProducts.allPrice += +this.sellProducts.arraySellProducts[indexProduct].finalPrice
      }
      this.countBuyProduct++
      this.increment()
    },
    ...mapMutations([
      'increment'
    ]),
    newData: async function () {
      try {
        const { data } = await axios.get('http://192.168.1.6/BlackFriday/12')
        this.allProducts = data
      } catch (error) {
        console.log(error)
      }
    },
    closeBasket (bool) {
      this.$emit('closeBasket', bool)
    }
  }
}

// {
//   'prodId': 144152323,
//   'title': '15.6\' Ноутбук Lenovo ThinkPad P51, черный',
//   'availability': true,
//   'price': '185439',
//   'finalPrice': '159520',
//   'category': 'Laptops',
//   'brand': 'Lenovo',
//   'quantity': 62,
//   'imageUrl': '/images/144152323.jpg',
//   'parameters': [
//     {
//       'title': 'Resolution',
//       'value': '3840x2160'
//     },
//     {
//       'title': 'Diagonal',
//       'value': '13.3\''
//     },
//     {
//       'title': 'OS',
//       'value': 'Windows 10 Home'
//     },
//     {
//       'title': 'SSD',
//       'value': '512'
//     },
//     {
//       'title': 'RAM',
//       'value': '12'
//     }
//   ]
// }
