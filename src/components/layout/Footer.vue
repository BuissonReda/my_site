<template lang="html">

  <footer class="footer">
    <div>{{ t('lastUpdated') }} 25/09/2019, 17h14 🔥</div>
    <div class="author">Buisson Réda 😎</div>
    <div>&copy; {{ currentYear }}</div>
  </footer>

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
.footer {
  padding-top: 15px;
  padding-bottom: 15px;
}

.footer div {
  margin-left: 40px;
  margin-top: 10px;
}

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
