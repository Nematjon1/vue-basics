// define a mixin object
var myMixin = {
  created: function () {
    this.testMethod()
  },
  methods: {
    testMethod: function () {
      console.log('hello from mixin!')
    }
  }
}

// define a component that uses this mixin
var Component = Vue.extend({
  mixins: [myMixin]
})

var component = new Component() // => "hello from mixin!"
