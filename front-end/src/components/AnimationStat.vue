<template>
    <div id="contentAnimation">
      <div class="content">

        <transition name="fade" appear>
          <div id="one" v-if="visible" ></div>
        </transition>

        <div class="one_space"></div>
        <div class="space"></div>
        <div class="one_space"></div>
        <div id="two"></div>
        <div class="one_space"></div>
        <div class="space"></div>
        <div class="one_space"></div>
        <div id="three"></div>
      </div>
    </div>

</template>

<script>
    export default {
      name : 'AnimationStat',
      data (){
          return {
            visible: true
          }
      },
      methods:{
        toggle: function (){
          this.visible = !this.visible
        }
    }
}
</script>

<style scoped>

a{
  position:absolute;
  top:100px
}

  .fade-enter-active,  .fade-leave-active {
    animation: alternate;

  }

   @keyframes glissement {

    0%{

         width: 100%;
       }

     100% {

       width: 0%;
     }
  }

  #contentAnimation{
    width: 25vw;
    height: 300px;
    position: absolute;
    right: 0px;
    top: calc(50% - 150px);
  }
  .content{
    position: relative;
  }
  #one, .one_space, #two, #three{
    width: 25vw;
    height: 60px;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    overflow-x: hidden;
  }
  #one{
     background: rgba(80,172,238,0.55);
     position: absolute;
     right: 0px;
     animation-duration: 5s;
     animation-name: glissement;
     animation-iteration-count: infinite;
     animation-direction: alternate-reverse;
   }
 .space{
    position: absolute;
    right: 0px;
  }
  #two{
    background: rgba(169,222,144,0.55);
    position: absolute;
    right: 0px;
    animation-duration: 6s;
    animation-name: glissement;
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;
  }
 /* #second_space{
    position: absolute;
    right: 0px;
  }*/
  #three{
    background: rgba(222,144,144,0.55);
    position: absolute;
    right: 0px;
    animation-duration: 4s;
    animation-name: glissement;
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;

  }

</style>
