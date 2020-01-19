import { HeaderComponent, FooterComponent, MainComponent } from 'src/components'

export default {
  components: {
    FooterComponent,
    HeaderComponent,
    MainComponent
  },
  data () {
    return {
      sort: 'Наши товары'
    }
  },
  methods: {
    sortParam (param) {
      this.sort = param
    }
  }
}
