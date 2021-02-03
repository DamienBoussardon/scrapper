<template>
    <div id="content-checkbok">
      <input :id="identifiant" class="checkbox" type="checkbox" >
      <label :for="identifiant" >{{label}}</label>
    </div>

</template>

<script>
    export default {
        name: "Checkbox",
      props: ['label', 'identifiant'],
    }
</script>

<style scoped>
  #content-checkbok{
    display: flex;
    align-items: center;
  }
  input.checkbox{
    display: none;
  }
  input.checkbox + label {
    display: inline-block;
    line-height: 0.1;
    position: relative;
    padding: calc(3.4rem - 3.4rem * 0.54) 0 0.5rem calc(3.4rem + 1rem);
    min-height: 3.4rem;
  }


  input.checkbox + label:hover{
    cursor: pointer;
  }
  input.checkbox + label:before{
    content: "";
    height: 1.6rem;
    width: 1.6rem;
    position: absolute;
    left: 0.2rem;
    top: 0.7rem;
    background-repeat: no-repeat;
  }
  input.checkbox[disabled] + label:before {
    opacity: 0.5;
  }
  input.checkbox[disabled] + label {
    color: rgba(181,224,255, 1);
  }
  input.checkbox:checked + label:before {
    background: url(../assets/checkbox.svg);
  }
  input.checkbox + label:before {
    background-image: url(../assets/disable_checkbox.svg);
  }


  input.checkbox + label {
    display: inline-block;
    position: relative;
    padding:0 0 0 calc(3.4rem + 1rem);
    min-height: 3.4rem;
  }
  label{
    line-height: 55px !important;
  }
</style>
