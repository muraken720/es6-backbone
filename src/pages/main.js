import {View} from 'backbone'

const mainTemplate = require('./main.html')

export default View.extend({
  template: mainTemplate,

  initialize () {
    this.render()
  },

  render() {
    this.$el.html(this.template({name: 'muraken720'}))
    return this
  }

})
