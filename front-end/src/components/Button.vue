<template>
    <div id="button">
      <button class="button" :class="enable">
        <p>{{place}}</p>
        <icon :name="fontAwesome"></icon>
      </button>
    </div>
</template>

<script>
    export default {
      name: "Button",
      props: ['place', 'fontAwesome', 'enable'],
      data(){
        return{
        }
      },
    }
</script>

<style scoped>
  .button{
    width:210px;
    height: 35px;
    margin: 0px !important;
    background: #B5E0FF;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    border-radius: 4px;
    color:white;
    font-size: 0.9em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p{
    margin:0;
  }
  .active{
    background: #50ACEE;
  }
  .fa-icon{
    margin-left: 2em;
  }
</style>
