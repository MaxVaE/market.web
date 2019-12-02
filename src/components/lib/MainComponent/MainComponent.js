import axios from 'axios'
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
      allProducts: [],
      countBuyProduct: 0,
      objCounter: {
        counter: +1,
        allPriceProduct: +0
      },
      sellProducts: {
        arraySellProducts: [],
        allPrice: +0
      }
    }
  },
  methods: {
    addProduct (item) {
      let idNotSimilar = true
      const length = this.sellProducts.arraySellProducts.length
      let i
      for (i = 0; i < length; i++) {
        if (this.sellProducts.arraySellProducts[i].prodId === item.prodId) {
          this.sellProducts.arraySellProducts[i].counter++
          this.sellProducts.arraySellProducts[i].allPriceProduct += +this.sellProducts.arraySellProducts[i].finalPrice
          idNotSimilar = false
          break
        }
      }
      if (idNotSimilar) {
        this.sellProducts.arraySellProducts[length] = item
        this.sellProducts.arraySellProducts[length] = Object.assign(this.sellProducts.arraySellProducts[length], this.objCounter)
        this.sellProducts.arraySellProducts[i].allPriceProduct += +this.sellProducts.arraySellProducts[i].finalPrice
      }
      this.sellProducts.allPrice += +this.sellProducts.arraySellProducts[i].finalPrice
      this.countBuyProduct++
      this.lengthProduct()
    },
    lengthProduct () {
      return this.$emit('addsProducts', this.countBuyProduct)
    },
    newData: async function () {
      try {
        const { data } = await axios.get('http://192.168.1.6/BlackFriday1/BalckFriday/12')
        this.allProducts = data
      } catch (error) {
        console.log(error)
      }
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
