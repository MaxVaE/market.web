import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      text: ''
    }
  },
  computed: {
    ...mapState({
      messages: state => state.messages.list
    })
  },
  methods: {
    ...mapActions({
      sendMessage: 'messages/send'
    }),
    noEnter (e) {
      if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault()
        this.handleSendClick()
      }
    },
    handleSendClick () {
      if (this.text) {
        if (/\S/.test(this.text)) {
          this.sendMessage(this.text)
          this.text = ''
        }
      }
    }

  },
  updated () {
    let length = this.$refs.element.length
    this.$refs.element[length - 1].scrollIntoView(false)
  }
}
