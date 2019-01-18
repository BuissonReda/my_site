<template lang="html">

  <v-footer class="pa-3 footer">
    <v-spacer></v-spacer>
    <div class="author">Buisson Réda</div>
    <div>&copy; {{ currentYear }}</div>
  </v-footer>

</template>

<script lang="js">
  export default  {
    name: 'footer',
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
</style>
