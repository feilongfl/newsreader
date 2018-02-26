<template>
  <div class="comments">
    <vue-disqus shortname="your_shortname_disqus"
                :identifier="page_id"
    />
  </div>
</template>

<script>
  import VueDisqus from 'vue-disqus/VueDisqus.vue'

  export default {
    props:[
      ''
    ],
    components: {
      'vue-disqus': VueDisqus
    }
  }
</script>
