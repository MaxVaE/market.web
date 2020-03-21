import axios from 'axios'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      profile: {
        firstName: {
          error: {
            errorFlag: false,
            errorText: ''
          },
          name: 'Ваше имя',
          text: ''
        },
        lastName: {
          error: {
            errorFlag: false,
            errorText: ''
          },
          name: 'Ваша фамилия',
          text: ''
        },
        email: {
          error: {
            errorFlag: false,
            errorText: ''
          },
          name: 'Ваша почта',
          text: ''
        },
        address: {
          error: {
            errorFlag: false,
            errorText: ''
          },
          name: 'Ваш адрес',
          text: ''
        },
        phone: {
          error: {
            errorFlag: false,
            errorText: ''
          },
          name: 'Ваш телефон',
          text: ''
        }
      },
      orders: {
        count: 0,
        id: 0
      },
      arrayOrders: []
    }
  },
  computed: {
    ...mapState([
      'sellProducts'
    ])
  },
  methods: {
    Enter (e) {
      if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault()
        this.postOrders()
      }
    },
    errorName (profileObj) {
      if (profileObj.text === '') {
        profileObj.error.errorFlag = true
        profileObj.error.errorText = '*Заполните поле'
      } else {
        profileObj.error.errorFlag = false
        profileObj.error.errorText = ''
      }
    },
    checkNotEmpty () {
      return this.profile.firstName.text === '' || this.profile.lastName.text === '' || this.profile.email.text === '' || this.profile.address.text === '' || this.profile.phone.text === ''
    },
    postOrders: async function () {
      try {
        for (let profileObj in this.profile) {
          this.errorName(this.profile[profileObj])
        }
        if (!this.checkNotEmpty()) {
          const array = this.combineArray(this.sellProducts.arraySellProducts)
          console.log('weergresdg: ', array)
          const postObj = JSON.stringify({ ...this.profile, array })
          console.log({ ...this.profile, array })
          console.log('JSON = ', postObj)
          const { status } = await axios.post('http://192.168.1.6/BlackFriday', postObj, {
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

// для валидации используй vuelidate
