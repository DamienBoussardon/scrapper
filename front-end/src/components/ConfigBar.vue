<template>
  <div class="config">
      <div class="container">
        <div class="content_form">
          <form action="POST" >
            <div class="form_section_url">
              <label for="url">Site à parcourir</label>
              <input type="text" placeholder="URL" v-model="valueInputUrl">
            </div>
            <div class="form_section_region">
              <label for="region">Région à parcourir</label>
              <input type="text" class="input" id="input-reg" v-model="valueInuptRegion" v-on:keypress="checkIfNotEmpty">
            </div>
            <div class="form_section_button">
                <bnt :place="placeholder" :fontAwesome="nameIcon" :enable="activ" ></bnt>
            </div>
          </form>
        </div>
        <div class="content_button">
          <router-link :to="{name: 'Configuration'}">
            <bnt :place="otherPlaceholder" :fontAwesome="otherIcon" :enable="act" ></bnt>
          </router-link>
        </div>

      </div>
  </div>
</template>

<script>
  import Button from './Button'
  export default {
    name: 'ConfigBar',
    data() {
      return {
        placeholder: 'Executer',
        nameIcon: 'bolt',
        act : 'active',
        activ : null,
        valueInputUrl : '',
        valueInuptRegion: '',
      }
    },
    components: {
      'bnt': Button,
    },
    computed: {
      otherPlaceholder: function () {
        return 'Configuration'
      },
      otherIcon: function () {
        return 'cog'
      }
    },
    methods :{
      checkIfNotEmpty(){
        if(this.valueInputUrl != ''){
          this.activ = 'active'
        }
      }
    }
  }

</script>

<style scoped>
  button{
    margin: 0!important;
  }
  .config{
    width: 275px;
    height: 100%;
    background:#F7F7F7;
    margin: 0 !important;
    left: 0;
    display: flex;
    justify-content: end;
    align-items: center;
    position: fixed;
  }
  .container{
    margin: 10px 10px;
    width: 100%;

    height: calc(100% - 60px);
  }
  .content_form{
    height:75%
  }
  form{
    height: 100%;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .form_section_region .form_section_button{
    height: 33%;
  }
  .form_section_button{
    display: flex;
    justify-content: center;
  }
  .content_button{
    height:25%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .fa-icon{
    margin-left: 2em;
  }
  input[type=text]{
    margin-top: 1em;
    width: 210px;
    height: 35px;
    top: 222px;
    background: rgba(255, 255, 255, 0.6);
    border: 1px solid #79C6FE;
    box-sizing: border-box;
    border-radius: 2px;
    padding-left: 1em;
  }
  button{
    width:210px;
    height: 35px;
    background: #50ACEE;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    border-radius: 4px;
    color:white;
    font-size: 0.9em;
  }


</style>













