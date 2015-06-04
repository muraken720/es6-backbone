import { View } from 'backbone'

const mainTemplate = require('./main.html')

export default View.extend({
  template: mainTemplate,

  initialize () {
    this.listenTo(this.model, "change", this.render);
  },

  render() {
    this.$el.html(this.template(this.model.attributes))
    return this
  }

})
