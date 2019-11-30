import { HeaderComponent, FooterComponent, MainComponent } from 'src/components'

export default {
  components: {
    FooterComponent,
    HeaderComponent,
    MainComponent
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
