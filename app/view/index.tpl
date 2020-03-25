<html>
  <head>
    <title>Vocabulary</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/todomvc-common@1.0.5/base.css">
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/todomvc-app-css@2.1.2/index.css">

    <style>
      .view {
        position: relative;
      }
      .destroy {
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
      }
    </style>

  </head>
  <body>
    {% raw %}
    <div id="app">
      <section class="words-box">
        <header class="header">
          <h1>words</h1>
          <input
            :style="{width: '100%', height: '36px', lineHeight: '36px'}"
            placeholder="Add word, split with ;"
            v-model="words"
            @keyup.enter="addWord"
          >
        </header>
        <section class="main" v-show="wordsList.length">
          <ul class="words-list">
            <li class="words" v-for="word in wordsList" :key="word.id">
              <div class="view">
                <p class="title">{{ word.word }}</p>
                <p class="desc">{{ word.desc }}</p>

                <button class="destroy" @click="removeWord(word)">Delete</button>
              </div>
            </li>
          </ul>
        </section>
      </section>
    </div>
    {% endraw %}
  </body>
  <script src="//cdn.jsdelivr.net/npm/vue"></script>
  <script src="//cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  <script src="//cdn.jsdelivr.net/npm/js-cookie/src/js.cookie.min.js"></script>
  <script src="/public/main.js"></script>
</html>