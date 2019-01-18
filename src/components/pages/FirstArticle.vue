<template lang="html">
  <section class="article">
    <div class="parallax">
      <v-parallax height="300" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
        <h1 class="my-title unselectable">How to make navigation transitions in your Vue.js site</h1>
        <h3 class="date unselectable">January 14, 2019</h3>
      </v-parallax>
    </div>

    <div class="content">
      <p>If you're making a Vue.js site and you want to have sweet transitions when you navigate,
         you're in the right place 🔥
      </p>
      <p>Go to your App.vue file, and write this template: </p>
      <pre v-highlightjs><code class="javascript">{{ sourcecode }}</code></pre>
      <p class="text">Notice the transition component. It's from Vue.js, you don't need a third party library 
        to use it. More info about it <a href="https://fr.vuejs.org/v2/guide/transitions.html">here</a>.
      </p>
      <p class="text">In the same file, add this css:</p>
      <pre v-highlightjs><code class="css">{{ cssSourceCode }}</code></pre>
      <p class="text">You can of course adjust the length of the transition, or change color, or do anything you 
        want 🤠 </p>
      <p>You have now navigation transitions in your Vue.js site! 🎉</p>
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
