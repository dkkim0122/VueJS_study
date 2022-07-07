Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{todo.text}}</li>',
})

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
  },
})
app.message = 'Hello again!'

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'Loaded!',
  },
})
app2.message = 'hello~'

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true,
    buttonTitle: '메세지 감추기',
  },
  methods: {
    showMessage: function () {
      if (this.seen) {
        this.seen = false
        this.buttonTitle = '메세지 보이기'
      } else {
        this.seen = true
        this.buttonTitle = '메세지 감추기'
      }
    },
  },
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [{ text: 'javascript' }, { text: 'react' }, { text: 'eveything!' }],
  },
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello, I am John!',
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    },
  },
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: '',
  },
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Watermelon' },
      { id: 1, text: 'Apple' },
      { id: 2, text: 'Banana' },
    ],
  },
})
