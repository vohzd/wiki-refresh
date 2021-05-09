<template lang="html">
  <div v-html="article"></div>
</template>

<script>

export default {
  async asyncData({ params, $axios }){
    return {
      article: await $axios.$get(`/api/website?url=https://en.wikipedia.org/wiki/${params.slug}`)
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

body {
  width: 50%;
  height: 100vh;
  margin: auto;
}

 .sidebar {
  width: 100%;
  font-size: 14px !important;
}

.sidebar ul {
  display: flex;

}

.infobox {
  position: fixed;
  left: 0;
  top: 0;
  width: 16% !important;
  font-size: 14px !important;
  background: rgba(0,0,0,0.1);
  text-align: center !important;
  border-radius: 8px;
  line-height: 18px;
  overflow: scroll;
}

.infobox-above {
  font-size: 32px;
  line-height: 1.2em;
}

.infobox tbody tr:nth-child(odd) {
  background: rgba(0,0,0,0.1) !important;
}

.toccolours {
  width: 100%;
  margin: 0px;
}

.collapsible {
  display: none;
}

.toccolours tbody tr {
  background: none !important;

}
.toccolours tbody tr th {
  text-align: center;
}
.toccolours tbody tr td {
  text-align: center;
}

.toccolours tbody tr td:last-child {
  font-size: 14px;
}
.toccolours tbody tr:nth-child(even) {
  background: rgba(0,0,0,0.15) !important;
}

.infobox tbody {
}

.infobox a.image {
  width: 100%;
}
.infobox td, .infobox th {
  padding: 8px !important;
}

.sidebar-title-with-pretitle, .sidebar-pretitle, .sidebar-list-title, .infobox-above, .infobox-subheader{
  background: none !important;
}

.infobox-header {
  color: white !important;
  background: rgba(255,255,255,0.1) !important;
}

.new {
  color: #710f48;
}

img {
  float: left;
  padding: 0 8px 8px 0px;
}

ol li {
  display: inline-block;
  font-size: 10px;
}



.thumbcaption {
  font-size: 12px;
  line-height: 12px;
}

.thumbinner {
  float: left;
}

#toc {
  position: fixed;
  right: 0px;
  top: 0px;
  font-size: 14px;
  border-radius: 8px;
  min-width: 12%;
  padding: 8px;
  background: rgba(0,0,0,0.1) !important;

}

#toc h2 {
  display: none;
}

.toclevel-2 {
  font-size: 12px;
  margin-left: 12px;
}

img {
  width: 100%;
  margin-top: 8px;
  display: inline;
}

.sidebar{
  background: var(--background) !important;
}
</style>
