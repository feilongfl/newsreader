<template>
  <nuxt-link :to="'/news/' + id">
    <!--{{id}}-->
    <b-card>
      <b-media no-body>
        <b-media-aside vertical-align="center" v-if="imgsrc">
          <!--<b-img blank blank-color="#ccc" width="128" height="128" alt="placeholder"/>-->
          <b-img blank-color="#ccc"
                 width="128"
                 height="128"
                 v-lazy="imgsrc"
                 alt=""/>
        </b-media-aside>
        <b-media-body class="ml-3">
          <h5 class="mt-0">{{title}}</h5>
          <div>{{date}}</div>
          <p>
            {{description}}
          </p>
        </b-media-body>
      </b-media>
    </b-card>
  </nuxt-link>
</template>

<script>
  export default {
    props: [
      'imgsrc',
      'title',
      'description',
      'date',
      'source',
      'id'
    ]
  }
</script>

<style>
  a {
    color: black;
  }

  a:hover {
    color: black;
    text-decoration: none;
  }
</style>
