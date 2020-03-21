import { HeaderComponent, FooterComponent, MarketComponent } from 'src/components'

export default {
  components: {
    FooterComponent,
    HeaderComponent,
    MarketComponent
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
