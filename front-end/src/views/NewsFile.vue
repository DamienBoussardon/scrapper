<template>
  <div class="new_file">
    <ConfigBar/>
    <ContentPosts/>
  </div>
</template>

<script>
import ConfigBar from '../components/ConfigBar'
import ContentPosts from '../components/ContentPosts'
  export default {
    name: 'NewsFile',
    components: {
      ConfigBar,
      ContentPosts,
    }
  }

</script>

<style scoped>
  .new_file{
    height: 100vh;
    display: flex;
    background: #F7F7F7;
  }
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>



