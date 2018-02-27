<template>
  <div class="comments">
    <vue-disqus shortname="feilongnews"
                :identifier="page_id"
    />
  </div>
</template>

<script>
  import VueDisqus from 'vue-disqus/VueDisqus.vue'

  export default {
    props: [
      'pageId'
    ],
    components: {
      'vue-disqus': VueDisqus
    }
  }
</script>
