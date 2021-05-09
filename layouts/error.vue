<template lang="html">
  <div class="center-container mtx">
    <h2>Uh oh....</h2>
    <code class="mt mbx row">
      {{ error.message }}
    </code>
    <nuxt-link to="/" class="row">Go Home</nuxt-link>
  </div>
</template>

<script>
  export default {
    props: ["error"]
  }
</script>

<style lang="css">



</style>
