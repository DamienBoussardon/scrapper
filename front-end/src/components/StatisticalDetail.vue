<template>
    <div id="content-details">
        <h1>Details</h1>
        <div id="container_info">
            <StatDetail></StatDetail>
        </div>
    </div>
</template>

<script>
  import StatDetail from './StatDetail'
    export default {
      name: "StatisticalDetail",
      data() {
        return {
          components:{
            StatDetail,
          }
        }
      }
    }
</script>

<style scoped>
    #content-details{

      height: calc(100vh - 60px);
      background: #F7F7F7;
      padding:50px 50px 50px 275px;

    }
  h1{
    border-top: 4px solid #8D8C8C;
    margin: 0px;
    color: #8D8C8C;
    width: 120px;
    text-align: center;
  }
</style>
