import axios from 'axios'
import ButtonAccount from '@/components/lib/ButtonAccount/ButtonAccount.vue'

export default {
  components: {
    ButtonAccount
  },
  data () {
    return {
      obj: {
        Email: '',
        Password: ''
      },
      bool: true
    }
  },
  computed: {
    emptyInput () {
      this.bool = this.obj.Email === '' || this.obj.Password === ''
      return this.bool
    }
  },
  methods: {
    validateEmail (email) {
      // eslint-disable-next-line no-useless-escape
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      console.log(re.test(email))
      return re.test(email)
    },
    Enter (e) {
      if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault()
        this.login()
      }
    },
    login: async function () {
      if (!this.bool) {
        if (this.validateEmail(this.obj.Email)) {
          const getObj = {
            'Email': this.obj.Email,
            'Password': this.obj.Password
          }
          try {
            const { data, status } = await axios
              .post('http://192.168.1.6/chat.backend/api/Auth/Login', getObj)
            console.log('status = ', status)
            console.log('Data = ', data)
            if (status === 200) {
              console.log('Good Job')
            }
          } catch (error) {
            console.log(error)
          }
        }
      }
    }
  }
}
