<template lang="html">
  <section class="article">
    <div class="parallax">
      <v-parallax height="300" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
        <h1 class="my-title unselectable">{{ t('first_article_title') }}</h1>
        <h3 class="date unselectable">{{ t('first_article_date') }}</h3>
      </v-parallax>
    </div>

    <div class="content">
      <p>{{ t('first_article_content') }} 🔥
      </p>
      <p>{{ t('first_article_content_2') }}: </p>
      <pre v-highlightjs><code class="javascript">{{ sourcecode }}</code></pre>
      <p class="text">{{ t('first_article_content_3') }} 
        <a href="https://fr.vuejs.org/v2/guide/transitions.html">{{ t('here') }}</a>.
      </p>
      <p class="text">{{ t('first_article_content_4') }}:</p>
      <pre v-highlightjs><code class="css">{{ cssSourceCode }}</code></pre>
      <p class="text">{{ t('first_article_content_5') }} 🤠 </p>
      <p>{{ t('first_article_content_6') }}! 🎉</p>
    </div>
  </section>

</template>

<script lang="js">
  export default  {
    name: 'firstArticle',
    props: [],
    mounted() {

    },
    data() {
      return {
        sourcecode: `<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
 </template>`,
        cssSourceCode: `.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}`
      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
.article {
  font-size: 20px;

  .my-title {
    font-size: 40px;
    padding-left: 40px;
  }

  .image {
    width: 150px;
  }

  .date {
    color: white;
    font-weight: 300;
    padding-left: 40px;
  }

}

.content {
  margin: 40px;
}

.text {
  margin-top: 20px;
}

</style>
