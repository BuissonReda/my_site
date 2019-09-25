<template lang="html">

  <section class="content articles">
    <h1 class="my-title">{{ t('articles') }}</h1>
    <ul class="articles">
      <li>
        <router-link class="link" to="FirstArticle">
          How to make transitions when navigating in your Vue.js site
        </router-link>
      </li>
      <li>
        <router-link class="link" to="SecondArticle">
          How to make your own bash commands in MacOS
        </router-link>
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
    color: rgba(0, 0, 0, 0.7);
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
