<template lang="html">

  <section class="content articles">
    <h1 class="my-title">{{ t('articles') }}</h1>
    <v-list class="articles" two-line>
      <template v-for="(item, index) in articles">
        <v-subheader
          v-if="item.header"
          :key="item.header"
        >
          {{ item.header }}
        </v-subheader>

        <v-divider
          v-else-if="item.divider"
          :inset="item.inset"
          :key="index"
        ></v-divider>

        <v-list-tile
          v-else
          :key="item.title"
          :href="item.link"
          avatar
          :to="item.to"
          @click=""
        >
          <v-list-tile-avatar>
            <img :src="item.avatar">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title class="articleTitle" v-html="item.title"></v-list-tile-title>
            <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
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

</style>
