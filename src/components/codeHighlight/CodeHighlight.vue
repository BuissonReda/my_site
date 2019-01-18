<template lang="html">
  <pre v-highlightjs class="inlineCode"><code class="grayText">{{ code }}</code></pre>
</template>

<script lang="js">
  export default  {
    name: 'code-highlight',
    props: ['code']
}
</script>

<style scoped lang="scss">
.inlineCode {
  color: #918e8e !important;
  display: inline;
}

.grayText {
  display: inline;
  color: #918e8e !important;
  padding: 2px;
}
</style>
