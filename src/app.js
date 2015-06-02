import $ from 'jquery'
import MainPage from './pages/main'

require('./styles/main.styl')

$(() => {
  new MainPage({el: $('.container')})
  //Backbone.history.start();
})



