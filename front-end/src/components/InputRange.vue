<template>
  <div id="content-range">
    <div class="input-range-container">
      <div class="input-range-tracker"></div>
      <span :id="tracker_id" ></span>
      <div :id="tracker_between_id"  ></div>
      <input class="range-lower range" type="range"  :max="max_range_1st" :value="default_value_1st_input" name="range-lower" :id="name_1st_input">
      <input class="range-upper range" type="range"  :max="max_range_2nd" :value="default_value_2nd_input" name="range-upper" :id="name_2nd_input">
    </div>

  </div>
</template>

<script>
  import { customeInput }  from '../custominput'
  import { displayValues }  from '../valueRange'
  export default {
    name: "InputRange",
    props: ['label_range', 'name_1st_input', 'min_range_1st', 'max_range_1st', 'default_value_1st_input', 'name_2nd_input', 'min_range_2nd', 'max_range_2nd', 'default_value_2nd_input', 'tracker_between_id', 'tracker_id'],

    mounted() {
      displayValues();
      customeInput();
    }
  }
</script>

<style scoped>
  #content-range {

  }
  .input-range-container {
    position: relative;
    width: 200px;
    height: 20px;
  }
  .input-range-tracker {
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 10px;
    margin-top: -5px;
    border-radius: 10px;
    background: LightGray;
    pointer-events: none;
  }
  span{
    position: absolute;
    top: -30px;
    left: 55px;
  }
  #input-range-tracker-between-1, #input-range-tracker-between-2, #input-range-tracker-between-3 {
    position: absolute;
    left: 0;
    top: 50%;
    width: 0;
    height: 10px;
    margin-top: -5px;
    border-radius: 10px;
    background: #50ACEE;
    pointer-events: none;
  }
  input[type="range"] {
    appearance: none;
    position: absolute;
    display: block;
    width: 100%;
    background: transparent;
  }

  input[type="range"]:not(*:root) {
    pointer-events: none;
  }
  input[type="range"]::-webkit-slider-runnable-track {
    background: transparent;
  }
  input[type="range"]::-webkit-slider-thumb, input[type="range"]::-webkit-media-slider-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    border: 0;
    border-radius: 50%;
    pointer-events: auto;
  }
  .range-lower::-webkit-slider-thumb, .range-lower::-webkit-media-slider-thumb {
    background: #50ACEE;
    margin-top: -2px;
  }
  .range-upper::-webkit-slider-thumb, .range-upper::-webkit-media-slider-thumb {
    background: #50ACEE;
    margin-top: -2px;
  }
  input[type="range"]::-moz-range-track {
    background: transparent;
  }
  input[type="range"]::-moz-range-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    border: 0;
    border-radius: 50%;
    pointer-events: auto;
  }
  .range-lower::-moz-range-thumb {
    background: LightSkyBlue;
  }
  input[type="range"]::-ms-track {
    background: transparent;
    border-color: transparent;
    color: transparent;
    z-index: 1;
  }
  input[type="range"]::-ms-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    border: 0;
    border-radius: 50%;
  }
  .range-lower::-ms-thumb {
    background: LightSkyBlue;
  }


</style>
