import { HeaderComponent, FooterComponent } from 'src/components'

export default {
  components: {
    FooterComponent,
    HeaderComponent
  },
  props: {
    title: String
  },
  data () {
    return {
      sort: ''
    }
  },
  methods: {
    sortParam (param) {
      this.sort = param
    }
  }
}
