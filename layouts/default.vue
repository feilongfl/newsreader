<template>
  <section>
    <!--navbar-->
    <fl-nav />
    <!--body-->
    <div style="padding-top: 50px">
      <nuxt />
    </div>
  </section>
</template>

<script>
  import nav from '~/components/nav/nav.vue'
  import Logo from '~/components/Logo.vue'

  export default {
    components: {
      'fl-nav': nav,
      Logo
    }
  }
</script>

<style>
  html {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }
</style>
