<template>
  <v-app :dark="isDarkModeEnabled ? true : false" id="app" :class="{dark: isDarkModeEnabled, light: !isDarkModeEnabled}">
    <MyHeader/>
    <vue-progress-bar/>
      <v-content class="content">
        <transition name="fade" mode="out-in">
          <router-view/>
        </transition>
      </v-content>
    <MyFooter/>
  </v-app>
</template>

<script>
import MyHeader from './components/layout/Header'
import MyFooter from './components/layout/Footer'

export default {
  name: 'App',
  components: { MyHeader, MyFooter },
  mounted () {
    this.$Progress.finish()
    const language = localStorage.getItem('language') || 'french'
    this.$translate.setLang(language)
  },
  created () {
    this.$Progress.start()
    this.$router.beforeEach((to, from, next) => {
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress
        this.$Progress.parseMeta(meta)
      }
      this.$Progress.start()
      //  continue to next page
      next()
    })
    this.$router.afterEach((to, from) => {
      this.$Progress.finish()
    })    
  },
  computed: {
    isDarkModeEnabled () {
      return this.$store.state.isDarkModeEnabled
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Linotte, 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

p {
  font-family: 'Avenir';
}

.light {
  .bold {
    font-weight: 550;
  }

 p a, .link {
   color: blue;

    &:hover {
      color: #13518c;
      -webkit-transition: all 0.5s;
      transition: all 0.5s;
    }
  }
}

.dark {
  .bold {
    font-weight: 600;
  }

  p a, .link {
    color: #fc8d44;

    &:hover {
      color: #e6701c;
      -webkit-transition: all 0.5s;
      transition: all 0.5s;
    }
  }
}

a {
  text-decoration: none;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}

.my-title {
  font-size: 30px;
  font-weight: 530;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}

.unselectable {
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;          /* Likely future */      
}

.light {
  .content {
    background-color: white;
    color: #2b2c2d;
  }
}

.dark {
  .content {
    background-color: #353838;
    color: #e0e1e2;
  }
}

.dark {
  background-color: #353838;
  color: #e0e1e2;
}

@font-face {
  font-family: logoFont;
  src: url('assets/fonts/AzedoFont/Azedo-Light.otf');
}

@font-face {
  font-family: Linotte;
  src: url('assets/fonts/Linotte_Semi_Bold/JCFonts - Linotte SemiBold.otf');
}
</style>
