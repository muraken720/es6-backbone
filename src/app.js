import $ from 'jquery'
import MainPage from './pages/main'
import Me from './models/me'

require('./styles/main.styl')

window.app = {
  init() {
    this.me = new Me({name: 'muraken720', age: 25})
    this.mainPage = new MainPage({el: $('.container'), model: this.me})
    this.mainPage.render()
  }
}

app.init();




