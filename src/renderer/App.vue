<template>
  <div id="app">
      <Slider v-model="vv" range></Slider>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'sysdetail',
    data () {
      return {
        vv: [20,50]
      }
    },
  }
</script>

<style>
  /* CSS */
</style>
