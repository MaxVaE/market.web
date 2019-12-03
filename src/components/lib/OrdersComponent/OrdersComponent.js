import axios from 'axios'

export default {
  props: {
    sellProducts: Object
  },
  data () {
    return {
      profile: {
        firstName: '',
        lastName: '',
        email: '',
        adress: '',
        phone: ''
      }
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
      return this.profile.firstName === '' || this.profile.lastName === '' || this.profile.email === '' || this.profile.adress === '' || this.profile.phone === ''
    },
    postOrders: async function () {
      try {
        if (!this.checkNotEmpty()) {
          const postObj = JSON.stringify(this.profile)
          console.log('JSON', postObj)
          const { status } = await axios.post('URL', postObj)
          console.log(status)
        }
      } catch (error) {
        console.log('Error post Orders: ', error)
      }
    }
  }
}
