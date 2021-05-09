<template lang="html">
  <div v-html="article"></div>
</template>

<script>

export default {
  async asyncData({ params, $axios }){
    return {
      article: await $axios.$get(`/api/website?url=https://en.wikipedia.org/wiki/`)
    }
  }
}
</script>

<style lang="css">

iframe {
  width: 100vw;
  height: 100vh;
  border: 0;
  frameborder: 0;
  outline: 0;
  overflow-x: none;
}
</style>
