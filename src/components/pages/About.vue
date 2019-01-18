<template lang="html">
  <section class="content">
    <h1 class="my-title">About me</h1>
    <div class="presentation">
      <p class="">Hi, I'm Buisson Réda, I'm a web developer from Toulouse, France.</p>
      <p class="why">I created this site to showcase my programming journey so far.
    </p>
    </div>
    <h1 class="my-title">Timeline</h1>
    <ul class="timeline">
      <li><span class="year">65 millions B.C</span> - Dinosaurs appear on Earth 🦖 🦕</li>
      <li><span class="year">1992</span> - I am born in Toulouse, France</li>
      <li><span class="year">2011</span> - I graduate from high school and start studying computer engineering</li>
      <li><span class="year">2013</span> - I get a DUT in University Institute of Blagnac, France</li>
      <li><span class="year">2013</span> - I reach the semi-final in a tournament of Shootmania. Video of my performance <a href="https://www.youtube.com/watch?v=d4Fyj1mZpM0">here</a></li>
      <li><span class="year">2014</span> - I get a Pro License in University Institute of Blagnac, France</li>
      <li><span class="year">2015</span> - I start working for a company named Ze-Watt, specialized in eletric mobility</li>
    </ul>

    <h1 class="my-title">Music</h1>
    <p class="music-text">Sometimes, I make music using Fl Studio. Check my <a href="https://soundcloud.com/r-da-buisson">Soundcloud</a> 🎼</p>
    
    <h1 class="my-title">Photography</h1>
    <p class="photography-text">I take a lot of pictures. Check my <a href="https://www.instagram.com/redabuisson/">Instagram</a> 🌇</p>

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
</style>
