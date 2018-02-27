<template>
  <section>
    <h1>
      {{id}}
    </h1>
    <fl-disqus :pageId="id" />
  </section>
</template>

<script>
  import disqus from '~/components/disqus/disqus.vue'

  export default {
    components: {
      'fl-disqus': disqus
    },
    asyncData({params}) {
      console.log('p => ', params) // for debug
      // Must be a number
      return {
        id: params.id
      }
    }
  }
</script>
