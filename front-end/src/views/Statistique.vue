<template>

  <div class="stat">
    <div class="stat-top">
      <FilterStat ></FilterStat>
      <AnimationStat></AnimationStat>
    </div>
    <div class="stat-bottom">
      <StatisticalDetail></StatisticalDetail>
    </div>

  </div>
</template>


<script>
import FilterStat from '../components/FilterStat'
import AnimationStat from '../components/AnimationStat'
import StatisticalDetail from '../components/StatisticalDetail'
export default{
  name: 'Statistique',
  components:{
    FilterStat,
    AnimationStat,
    StatisticalDetail,
  },
}

</script>

<style scoped>
 .stat-top{
       overflow-x: hidden;
       display:flex;

     }
 .stat-bottom{

 }

</style>
