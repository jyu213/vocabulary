'use strict';
/* global Vue:false, axios:false, Cookies: false */
/* eslint object-shorthand: 0 */

axios.defaults.headers.common['x-csrf-token'] = Cookies.get('csrfToken');
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.response.use(function (res) {
  if (res && res.data && res.data.code === 0) {
    return res.data.data;
  } else {
    return Promise.reject(res);
  }
}, function (error) {
  return Promise.reject(error);
});

new Vue({
  el: '#app',
  data: {
    wordsList: [],
    words: '',
  },
  methods: {
    listData: function(completed) {
      axios.get('/api/words/list', { params: { completed } })
        .then(data => {
          this.wordsList = data?.list || [];
        }).catch(err => console.error('fetch err: ', err));
    },

    addWord: function() {
      const value = this.words && this.words.trim();
      const [ word = '', desc = '' ] = value.split(';');

      axios.post('/api/words/add', {
        word,
        desc,
      }).then(res => {
        this.words = '';
        this.listData();
      }).catch((err) => {
        console.log('err:', err);
      });
    },
    removeWord: function(todo) {
      axios.post(`/api/words/delete`, {
        id: todo.id
      })
        .then(() => {
          const index = this.wordsList.findIndex(x => x.id === todo.id);
          this.wordsList.splice(index, 1);
        });
    },
  },

  mounted() {
    this.listData();
  },
});
