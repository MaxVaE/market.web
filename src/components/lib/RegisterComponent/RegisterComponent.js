import axios from 'axios'
import ButtonAccount from '@/components/lib/ButtonAccount/ButtonAccount.vue'

export default {
  components: {
    ButtonAccount
  },
  data () {
    return {
      obj: {
        UserName: '',
        Email: '',
        Password: '',
        ConfirmPassword: ''
      },
      bool: true
    }
  },
  computed: {
    emptyInput () {
      this.bool = this.obj.Email === '' || this.obj.Password === '' || this.obj.ConfirmPassword === '' || this.obj.UserName === ''
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
      const bool = this.bool
      const obj = this.obj
      if (!bool) {
        if (this.validateEmail(obj.Email) && obj.UserName !== null) {
          if (obj.Password === obj.ConfirmPassword) {
            const postObj = {
              'UserName': obj.UserName,
              'Email': obj.Email,
              'Password': obj.Password
            }
            console.log(postObj)
            try {
              const { status } = await axios.post('http://192.168.1.6/chat.backend/api/Account/Register', postObj)
              console.log('status = ', status)
              console.log('Yes')
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
}
