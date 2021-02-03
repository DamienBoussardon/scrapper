<template>
    <div id="config">
        <SiteSticker/>
    </div>
</template>

<script>
  import SiteSticker from '../components/SiteSticker'

    export default {
        name: "Configuration",
        components: {
          SiteSticker
        }
    }
</script>

<style scoped>
   #config{
     width: 100%;
   }
</style>
