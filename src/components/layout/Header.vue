<template lang="html">
  <header class="header">
    <div class="header-left unselectable">
      <router-link class="logo" to="Home">Buisson Réda</router-link>
      <router-link to="About">About me</router-link>
      <router-link to="Articles">Articles</router-link>
      <span class="emoji" v-if="!isDarkModeEnabled" v-on:click="setDarkMode(true)">☀️</span>
      <span class="emoji" v-if="isDarkModeEnabled" v-on:click="setDarkMode(false)">🌙</span>
    </div>
  </header>
</template>

<script lang="js">
  export default  {
    name: 'header',
    props: [],
    mounted() {

    },
    data() {
      return {
      }
    },
    methods: {
      setDarkMode(mode) {
        this.$store.commit('switchDesignMode', mode)
      }
    },
    computed: {
      isDarkModeEnabled () {
        return this.$store.state.isDarkModeEnabled
      }
    }
}
</script>

<style scoped lang="scss">
$font-title: 'Saira', sans-serif;

 .emoji {
  padding-top: 10px !important;
  font-size: 20px;

  &:hover {
    cursor: pointer;
  }
}

.light {
  .header {
    overflow: hidden;
    background-color: #f1f1f1;
    padding: 20px 10px;
  }

  .header a {
    color: black;
    text-align: center;
    margin-right: 20px;
    padding: 12px;
    text-decoration: none;
    font-size: 18px; 
    line-height: 25px;
    border-radius: 4px;

    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }

  .header a.logo {
    font-size: 25px;
    font-family: $font-title;
    font-weight: 500;
    margin-right: 100px;
  }

  .header a:hover {
    background-color: #ddd;
    color: gray;
    cursor: pointer;

    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }

  .header a.logo:hover {
    background-color: #f1f1f1;
    color: gray;

    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }

  .header a.active {
    background-color: gray;
    color: white;
  }

  .header-left {
    float: left;
  }

  @media screen and (max-width: 500px) {
    .header a {
      float: none;
      display: block;
      text-align: left;
    }
    
    .header-right {
      float: none;
    }
  }

  .icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;

    &:hover {
      cursor: pointer;
    }
  }
  .icon-moon-o {
    width: 0.8232421875em;
  }
}

.dark {
  .header {
    overflow: hidden;
    background-color: #181919;
    padding: 20px 10px;
  }

  .header a {
    color: white;
    text-align: center;
    margin-right: 20px;
    padding: 12px;
    text-decoration: none;
    font-size: 18px; 
    line-height: 25px;
    border-radius: 4px;

    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }

  .header a.logo {
    font-size: 25px;
    font-family: $font-title;
    font-weight: 500;
    margin-right: 100px;
  }

  .header a:hover {
    background-color: #ddd;
    color: gray;
    cursor: pointer;

    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }

  .header a.logo:hover {
    background-color: #f1f1f1;
    color: gray;

    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }

  .header a.active {
    background-color: gray;
    color: white;
  }

  .header-left {
    float: left;
  }

  @media screen and (max-width: 500px) {
    .header a {
      float: none;
      display: block;
      text-align: left;
    }
    
    .header-right {
      float: none;
    }
  }

  .designIcon {
    &:hover {
      cursor: pointer;
    }
  }

  .moon-emoji {

  }
}
</style>
