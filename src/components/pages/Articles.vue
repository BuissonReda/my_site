<template lang="html">

  <section class="content articles">
    <h1 class="my-title">{{ t('articles') }}</h1>
    <ul class="articles">
      <li v-for="(item, index) in articles">
        <router-link class="link" :to="item.to">{{item.title}}</router-link>
      </li>
    </ul>
  </section>

</template>

<script lang="js">
  export default  {
    name: 'projects',
    props: [],
    mounted() {

    },
    data() {
      return {
        articles: [
          {
            avatar: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Vue.js_Logo.svg',
            title: 'How to make transitions when navigating in your Vue.js site',
            subtitle: "14 january 2019",
            to: "FirstArticle"
          },
          {
            avatar: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Vue.js_Logo.svg',
            title: 'How to make your own bash commands in MacOS',
            subtitle: "15 january 2019",
            to: "SecondArticle"
          }
        ]
      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
.my-title {
  font-size: 30px;
}

.content {
  margin: 40px;
}

.light {
  .articleTitle {
    color: black;
  }
}

li {
  margin-left: -40px;
}

.link {
  display: inline-block;
  font-size: 20px;
  margin-bottom: 20px;
}

</style>
