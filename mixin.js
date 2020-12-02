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

var mixin = {
  data: function () {
    return {
      msg: 'hello',
      foo: 'abcde'
    }
  }
}

new Vue({
  mixins: [mixin],
  data: function () {
    return {
      msg: 'goodbye',
      bar: 'def'
    }
  },
  created: function () {
    console.log(this.$data)
    // => { msg: "goodbye", foo: "abcde", bar: "def" }
  }
});

var mixin2 = {
  methods: {
    foo: function () {
      console.log('foo')
    },
    conflicting: function () {
      console.log('from mixin definition')
    }
  }
}

var vm = new Vue({
  mixins: [mixin2],
  methods: {
    bar: function () {
      console.log('bar')
    },
    conflicting: function () {
      console.log('from instance')
    }
  }
})

vm.foo() // => "foo"
vm.bar() // => "bar"
vm.conflicting() // => "from instance"
