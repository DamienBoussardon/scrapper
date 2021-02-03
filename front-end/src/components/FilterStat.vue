<template>
    <div id="filterStat" :class="filterStat">

      <form action="Post" @submit.prevent="send" >

        <div class="top-section"  :class="topSection">

          <div id="first-section" class="section">
            <div class="content-first-part">
              <div class="content-input-text" :class="contentInputText">
                <input type="text" placeholder="Region">
                <input type="text" placeholder="Commune">
              </div>
              <div class="content-checkbox-stat" :class="contentCheckbox">
                <div class="input-form-stat"><check-agence :identifiant="idCheckAgence"  :label="labelAgence"/></div>
                <div class="input-form-stat"><check-particulier :identifiant="idCheckParticulier" :label="labelParticulier"/></div>
                <div class="input-form-stat"><check-maison :identifiant="idCheckMaison" :label="labelMaison"/></div>
                <div class="input-form-stat"><check-appart :identifiant="idCheckAppart" :label="labelAppart"/></div>
                <div class="input-form-stat"><check-commerce :identifiant="idCheckCommerce" :label="labelCommerce"/></div>
              </div>
            </div>
          </div>

          <div id="middle-section" class="section">
            <div class="content-select">
              <select name="Departement" >
                <option value="" disabled selected>Département</option>
                <option value="haute-vienne">Haute Vienne</option>
                <option value="creuse">Creuse</option>
                <option value="correze">Corrèze</option>
              </select>

              <select name="TypeOfStat">
                <option value="" disabled selected>Type de statistique</option>
                <option value="mettreCarre">Par m²</option>
                <option value="typeAnnonce">Type Annonce</option>
                <option value="dpe">DPE</option>
              </select>
            </div>
          </div>

          <div id="last-section" class="section">
            <div class="content-input-range">
              <div class="input-range-stat">
                <p>Price Range</p>
                <div class="item-range" data-role="rangePrice">
                  <range-price :tracker_id="firstTranckerId" :tracker_between_id="idTrackerRangePrice" :name_1st_input="firstIdRangePrice" :name_2nd_input="secondeIdRangePrice" :default_value_1st_input="mindef" :default_value_2nd_input="maxdef" :max_range_1st="maxrange" :max_range_2nd="maxrange" />
                </div>
              </div>

              <div class="input-range-stat">
                <p>M² Range</p>
                <div class="item-range" data-role="rangeM2">
                  <range-m2 :tracker_id="secondeTranckerId" :tracker_between_id="idTrackerRangeM2"  :name_1st_input="firstIdRangeM2" :name_2nd_input="secondeIdRangeM2" :default_value_1st_input="secondeMinValueRange" :default_value_2nd_input="secondeMaxValueRange" :max_range_1st="secondeMaxDefaultValueRange" :max_range_2nd="secondeMaxDefaultValueRange" />
                </div>
              </div>
              <div class="input-range-stat">
                <p>DPE Range</p>
                <div class="item-range" data-role="rangeDPE">
                  <range-dpe :tracker_id="thirdTrackerId" :tracker_between_id="idTrackerRangeDPE"  :name_1st_input="firstIdRangeDPE" :name_2nd_input="secondeIdRangeDPE" :default_value_1st_input="thirdMinValueRange" :default_value_2nd_input="thirdMaxValueRange" :max_range_1st="thirdMaxDefaultValueRange" :max_range_2nd="thirdMaxDefaultValueRange" />
                </div>
              </div>
            </div>
          </div>

        </div>

        <div class="bottom-section">
          <bnt-exec-stats :place="placeholder" v-on:click.native="send"  :fontAwesome="nameIcon"  ></bnt-exec-stats>
        </div>

      </form>
    </div>
</template>

<script>
  import Button from './Button'
  import Checkbox from './Checkbox'
  import InputRange from './InputRange'
    export default {
      name: "FilterStat",
      components:{
        'bnt-exec-stats' : Button,
        'check-agence' : Checkbox,
        'check-particulier' : Checkbox,
        'check-maison' : Checkbox,
        'check-appart' : Checkbox,
        'check-commerce' : Checkbox,
        'range-price' : InputRange,
        'range-m2' : InputRange,
        'range-dpe' : InputRange,

      },
      data() {
        return {
          filterStat: 'filterStat',
          topSection: 'top-section',
          contentInputText: 'content-input-text',
          contentCheckbox: 'content-checkbox-stat',
          placeholder: 'Executer',
          nameIcon: 'bolt',
          labelAgence : 'Agence',
          labelParticulier : 'Particulier',
          labelMaison : 'Maison',
          labelAppart : 'Appartement',
          labelCommerce : 'Commerce',
          mindef: 20,
          maxdef: 100,
          maxrange : 3500,
          firstIdRangePrice : 'range-1a',
          secondeIdRangePrice : 'range-1b',
          idTrackerRangePrice : 'input-range-tracker-between-1',
          firstTranckerId : 'tracker-1'
        }
      },
      computed:{
        idCheckAgence: function () {
          return 'check-1'
        },
        idCheckParticulier: function () {
          return 'check-2'
        },
        idCheckMaison: function () {
          return 'check-3'
        },
        idCheckAppart: function () {
          return 'check-4'
        },
        idCheckCommerce: function () {
          return 'check-5'
        },
        firstIdRangeM2: function(){
          return 'range-2a'
        },
        secondeIdRangeM2: function(){
          return 'range-2b'
        },
        idTrackerRangeM2: function () {
          return 'input-range-tracker-between-2'
        },
        firstIdRangeDPE: function(){
          return 'range-3a'
        },
        secondeIdRangeDPE: function(){
          return 'range-3b'
        },
        idTrackerRangeDPE: function () {
          return 'input-range-tracker-between-3'
        },
        secondeTranckerId: function (){
          return 'tracker-2'
        },
        thirdTrackerId: function (){
          return 'tracker-3'
        },
        secondeMinValueRange: function(){
          return 15
        },
        secondeMaxValueRange: function(){
          return 100
        },
        secondeMaxDefaultValueRange: function(){
          return 550
        },
        thirdMinValueRange: function(){
          return 2
        },
        thirdMaxValueRange: function(){
          return 4
        },
        thirdMaxDefaultValueRange: function(){
          return 6
        }
      },
      methods : {
        send: function(){
          if(this.filterStat = 'filterStat'){
            this.filterStat = 'filterStat-transform';
            this.topSection = 'top-section-transform';
            this.contentInputText = 'content-input-text-transform';
            this.contentCheckbox = 'content-checkbox-stat-transform';
            this.$on('displayResult')
            }
          }
        },
    }
</script>

<style scoped>
  #filterStat{
    background: #F7F7F7;
    padding:0;
    height: calc(100vh - 50px);
  }
  .filterStat{
    width: 60vw;
  }
  form{
    height: 100%;

  }
  .top-section{
    height: 80%;
    display: flex;
    justify-content: space-around;
  }
  .section{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .bottom-section{
    width: 100%;
    margin-top: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content-input-text{
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

  }
  .content-first-part{
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .content-select{
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .content-input-range{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content: center;
    height: 100%;
  }
  .content-checkbox-stat{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    height: 60%;
  }
  .input-form-stat{
    display: flex;
    align-items: center;
    justify-items: center;
  }
  .input-range-stat p{
    text-align: left;
    margin-bottom: 50px;
  }

  input[type=text], select{
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
  option{
    background: #DCDCDC;
    font-size: 1.2em;
  }
  .section{
    width: 100%;
  }

  /*Transfomation after execution post request*/

  .top-section-transform{
    height: auto;
    flex-direction: column;
  }
  .filterStat-transform{
    width: 345px;
  }
  .content-input-text-transform{
    height: 40%;
  }
  .content-checkbox-stat-transform{
    height: 60%;
  }


</style>
