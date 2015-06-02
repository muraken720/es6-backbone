import {Model} from 'backbone'

export default Model.extend({
  defaults: {
    name : '',
    age : 0
  },

  say() {
    return 'Hello ' + this.get('name')
  }
})
