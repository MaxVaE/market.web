import axios from 'axios'

export default {
  props: {
    sellProducts: Object
  },
  data () {
    return {
      profile: {
        firstName: 'firstName',
        lastName: 'lastName',
        email: 'email',
        address: 'adress',
        phone: 'phone'
      },
      orders: {
        count: 0,
        id: 0
      },
      arrayOrders: []
    }
  },
  computed: {
    getSellProducts () {
      return this.sellProducts
    }
  },
  methods: {
    Enter (e) {
      if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault()
        this.postOrders()
      }
    },
    checkNotEmpty () {
      return this.profile.firstName === '' || this.profile.lastName === '' || this.profile.email === '' || this.profile.address === '' || this.profile.phone === ''
    },
    postOrders: async function () {
      try {
        if (!this.checkNotEmpty()) {
          const array = this.combineArray(this.sellProducts.arraySellProducts)
          console.log('weergresdg: ', array)
          const postObj = JSON.stringify({ ...this.profile, array })
          console.log({ ...this.profile, array })
          console.log('JSON', postObj)
          const { status } = await axios.post('http://192.168.1.6/BlackFriday1/BlackFriday', postObj, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
          console.log(status)
        }
      } catch (error) {
        console.log('Error post Orders: ', error)
      }
    },
    combineArray (array) {
      return array.map((element) => {
        this.orders.count = element.counter
        this.orders.id = element.prodId
        return this.orders
      }, [this.orders])
    }
  }
}
