<template lang="html">

  <v-footer class="pa-3 footer">
    <div>{{ t('lastUpdated') }} 12/2/2019, 21h50</div>
    <a href="https://www.facebook.com/reda.buisson" class="fa fa-facebook"></a>
    <a href="https://twitter.com/BuissonRda" class="fa fa-twitter"></a>
    <a href="https://www.linkedin.com/in/r%C3%A9da-buisson-1a042b153/" class="fa fa-linkedin"></a>
    <a href="https://www.instagram.com/redabuisson/" class="fa fa-instagram"></a>
    <v-spacer></v-spacer>
    <div class="author">Buisson Réda</div>
    <div>&copy; {{ currentYear }}</div>
  </v-footer>

</template>

<script lang="js">
  export default  {
    name: 'myFooter',
    props: [],
    mounted() {

    },
    data() {
      return {
        currentYear: new Date().getFullYear()
      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
.light {
  .footer {
    background-color: #f1f1f1 !important;
    color: black !important;
  }
}

.dark {
  .footer {
    background-color: #181919 !important;
    color: white !important;
  }
}

.author {
  margin-right: 8px;
}

.fa {
  border-radius: 5px;
  padding: 5px;
  font-size: 20px;
  width: 50px;
  text-align: center;
  text-decoration: none;
  margin-left: 30px;
}

.fa:hover {
  opacity: 0.7;
}

.fa-facebook {
  background: #3B5998;
  color: white;
}

.fa-twitter {
  background: #55ACEE;
  color: white;
}

.fa-linkedin {
  background: #007bb5;
  color: white;
}

.fa-youtube {
  background: #bb0000;
  color: white;
}

.fa-instagram {
  background: #125688;
  color: white;
}
</style>
