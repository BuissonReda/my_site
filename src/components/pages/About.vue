<template lang="html">
  <section class="content">
    <h1 class="my-title">{{ t('about') }}</h1>
    <div class="presentation">
      <p class="">{{ t('hi_2') }}.</p>
      <p class="why">{{ t('why_2') }}.</p>
    </div>
    <h1 class="my-title">{{ t('timeline') }}</h1>
    <ul class="timeline">
      <li><span class="year">{{ t('before') }}</span> - {{ t('dinosaurs') }} 🦖 🦕</li>
      <li><span class="year">1992</span> - {{ t('born') }}</li>
      <li><span class="year">2011</span> - {{ t('bac') }}</li>
      <li><span class="year">2013</span> - {{ t('dut') }}</li>
      <li><span class="year">2013</span> - {{ t('shootmania') }} <a class="link" href="https://www.youtube.com/watch?v=d4Fyj1mZpM0">{{ t('here') }}</a></li>
      <li><span class="year">2014</span> - {{ t('blagnac') }}</li>
      <li><span class="year">2015</span> - {{ t('job') }}</li>
    </ul>

    <h1 class="my-title">{{ t('music') }}</h1>
    <p class="music-text">{{ t('flstudio') }} <a href="https://soundcloud.com/r-da-buisson">Soundcloud</a> 🎼</p>
    
    <h1 class="my-title">{{ t('photography') }}</h1>
    <p class="photography-text">{{ t('take') }} <a href="https://www.instagram.com/redabuisson/">Instagram</a> 🌇</p>

    <div v-if="isHatimVisible">
      <img class="hatim-picture" src="../../assets/images/vuejs_logo.png" alt="hatim"/>
    </div>

  </section>

</template>

<script lang="js">
  export default  {
    name: 'about',
    props: [],
    mounted() {

    },
    data() {
      return {
        isHatimVisible: false
      }
    },
    methods: {
      onkey (event) {
        if (event.key == "Enter") {
          this.isHatimVisible = !this.isHatimVisible
        }
      }
    },
    computed: {

    },
    created: function () {
      window.addEventListener('keydown', this.onkey)
    },
    beforeDestroy: function () {
      window.removeEventListener('keydown', this.onkey)
    },
}
</script>

<style scoped lang="scss">


.my-title {
  font-size: 30px;
  margin-top: 30px;
}

.presentation {
  font-size: 20px;
  margin-top: 10px;
}

.why {
  margin-top: 15px;
  margin-bottom: 45px;
}

ul {
  li {
    margin-top: 10px;
  }
}

.year {
  font-weight: 550;
}

.timeline {
  font-size: 20px;
}

.music-text {
  font-size: 20px;
  margin-top: 10px;

  a {
    text-decoration: none;
  }
}

.photography-text {
  font-size: 20px;
  margin-top: 10px;
}

.content {
  margin: 40px;
}

.hatim-picture {
  width: 200px;
}
</style>
