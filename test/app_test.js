import assert from 'power-assert'
import {describe, it} from 'mocha'

import {Model, Collection} from 'backbone'

import Me from '../src/models/me'

describe('Model', () => {
  it('default new', () => {
    let obj = new Model()

    obj.set({name: 'Murata'})
    obj.set({age: 20})

    assert(obj.get('name') === 'Murata')
    assert(obj.get('age') === 20)
  })

  it('option new', () => {
    let obj = new Model({name: 'Kenichiro', age: 30})

    assert(obj.get('name') === 'Kenichiro')
    assert(obj.get('age') === 30)
  })

  it('model extend', () => {
    let obj = new Me()
    obj.set({name: 'Murata', age: 15, id: 101})

    assert(obj.id === 101)
    assert(obj.get('name') === 'Murata')
    assert(obj.get('age') === 15)
  })

  it('say method', () => {
    let obj = new Me()
    obj.set({name: 'Murata', age: 15, id: 101})

    assert(obj.say() === 'Hello Murata')
  })

})

describe('Collection#1', () => {
  it('option new array', () => {
    let obj1 = new Me({name: 'Murata', age: 15, id: 101})
    let obj2 = new Me({name: 'Kenichiro', age: 35, id: 102})

    let objs = new Collection([obj1, obj2])

    assert(objs.length === 2)
    assert(objs.at(0).id === 101)
    assert(objs.at(1).id === 102)
  })

  it('add item', () => {
    let obj1 = new Me({name: 'Murata', age: 15, id: 101})
    let obj2 = new Me({name: 'Kenichiro', age: 35, id: 102})

    let objs = new Collection([obj1, obj2])

    objs.add(new Model({name: "Acroquest", age: 20}))

    assert(objs.length === 3)

  })

  it('sort', () => {
    let obj1 = new Me({name: 'Murata', age: 15, id: 101})
    let obj2 = new Me({name: 'Kenichiro', age: 35, id: 102})

    let objs = new Collection([obj1, obj2])

    objs.add(new Model({name: "Acroquest", age: 20}))
    objs.add(new Model({name: "Technology", age: 10}))

    objs.comparator = (item)  => {
      return item.get("age")
    }

    objs.sort()

    assert(objs.at(0).get('age') === 10)

  })
})

describe('Collection#2', () => {
  let obj1 = new Me({name: 'Murata', age: 15, id: 101})
  let obj2 = new Me({name: 'Kenichiro', age: 35, id: 102})

  let objs = new Collection([obj1, obj2])

  objs.add(new Model({name: "Acroquest", age: 20}))
  objs.add(new Model({name: "Technology", age: 10}))

  objs.comparator = (item)  => {
    return item.get("age")
  }

  objs.sort()

  it('each', () => {
    const expected = [10, 15, 20, 35]

    objs.each( (item, index) => {
      assert(expected[index] === item.get('age'))
    })
  })

  it('find', () => {
    const actual = objs.find( (item) => {
      return item.get('age') === 20
    })

    assert(actual.get('age') === 20)
  })

  it('filter', () => {
    const actual = objs.filter( (item) => {
      return item.get('age') === 20
    })

    assert(actual[0].get('age') === 20)
  })

  it('where', () => {
    const actual = objs.where({age: 20})

    assert(actual[0].get('age') === 20)
  })

  it('max', () => {
    const actual = objs.max( (item) => {
      return item.get('age')
    })

    assert(actual.get('age') === 35)
  })
})
