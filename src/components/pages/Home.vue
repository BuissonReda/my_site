<template>
  <div class="content">
    <h2 class="my-title">{{ t('hi') }} <span class="me">{{ t('name') }}</span> 👨</h2>
    <p class="presentation">{{ t('im') }} <span class="bold">{{ t('developer') }}</span> {{ t('from') }} Toulouse, France. {{ t('create') }} 
      <span class="bold">{{ t('websites') }}</span>, <span class="bold">{{ t('mobile_apps') }}</span> {{ t('and') }} <a href="https://github.com/BuissonReda" alt="github">{{ t('projects') }}</a>.
    </p>
    <p class="why">{{ t('why') }} 👨‍💻 </p>
    <h2 class="my-title">{{ t('last') }}</h2>
    <h2 class="my-title">{{ t('lastArticles') }}</h2>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      items: [
        {
          avatar: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Tangram-man.png',
          title: 'Tangram game',
          subtitle: "Tangram game made in HTML, CSS and the library D3.js.",
          link: "https://github.com/BuissonReda/tangram"
        },
        { divider: true, inset: true },
        {
          avatar: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
          title: 'Basik (CSS Framework)',
          subtitle: "A CSS Framework for building responsive websites with 12-grids system, buttons, colors, and various components",
          link: "http://www.basik-framework.fr/#/home"
        },
        { divider: true, inset: true },
        {
          avatar: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Ionic-logo-landscape.svg',
          title: 'Todos mobile app',
          subtitle: "A simple mobile todos application made with AngularJs & Ionic. Additionnaly you can have friends and send todos to your friends."
        },
        { divider: true, inset: true },
        {
          avatar: require('../../assets/images/vuejs_logo.png'),
          title: 'VueJs template',
          subtitle: "VueJs template, with various libraries installed such as vue-axios, vue-router, and a clean layout.",
          link: "https://github.com/BuissonReda/vuejs-template"
        },
        { divider: true, inset: true },
        {
          avatar: require('../../assets/images/vuejs_logo.png'),
          title: 'PWA template',
          subtitle: "A Progressive Web App template, made with Vue.js and Vuetify.",
          link: "https://github.com/BuissonReda/pwa-template"
        }
      ],
      articles: [
        {
          avatar: require('../../assets/images/vuejs_logo.png'),
          title: 'Vue.js tutorial',
          subtitle: "How to make transitions when navigating in your Vue.js site",
          to: "FirstArticle"
        },
        {
          avatar: require('../../assets/images/vuejs_logo.png'),
          title: 'Bash & Node.js tutorial',
          subtitle: "How to make your own bash commands in MacOS",
          to: "SecondArticle"
        }
      ]
    }
  },
  methods: {
    playSound (sound) {
      if (sound) {
        let audio = new Audio(sound)
        audio.play()
      }
    },
    playMusic() {
      this.playSound('../../assets/musics/background_music.mp3')
    }
  },
  mounted () {
    this.playSound('../../assets/musics/background_music.mp3')
  }
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

.my-title {
  margin-top: 30px;
}

.presentation {
  font-size: 20px;
  margin-top: 20px;
}

.why {
  font-size: 20px;
  margin-top: 15px;
}

.content {
  margin: 40px;
}
</style>
