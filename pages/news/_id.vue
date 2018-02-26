<template>
  <h1>
    {{id}}
  </h1>
</template>

<script>
  import disqus from '~/components/disqus/disqus.vue'
  export default {
    components: {
      disqus
    },
    asyncData ({ params }) {
      console.log('p => ', params) // for debug
      // Must be a number
      return {
        id: params.id
      }
    }
  }
</script>
