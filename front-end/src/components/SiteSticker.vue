<template>
  <div class="container">
    <div  v-for="sticker in stickers" v-bind:key="sticker.id" class="sticker">
      <div class="content_img">
        <div :class="{ activeSticker: sticker.state}"class="filter"></div>
        <img class="img_sticker" src="../assets/leboncoin.jpg"/>
      </div>
      <div class="section_etat_sticker">
        <div class="left_section">
          <p class="nameSite" >{{sticker.nameSite}}</p>
        </div>
        <div class="middle_section">
          <icon  name="circle" v-bind:class="{ active: sticker.state }"></icon>
        </div>
        <div class="right_section" >
          <p class="lastScrap" >{{sticker.lastScrap}}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
    export default {
      name: "SiteSticker",
      data () {
        return {
          stickers: [
            {
              nameSite: 'Leboncoin',
              state: true,
              lastScrap : '10:00',
            },
            {
              nameSite: 'Avendrealouer',
              state: false,
              lastScrap : '20:00',
            },
            {
              nameSite: 'Seloger.com',
              state: true,
              lastScrap : '10:00',
            }]
        }

      },
    }
</script>

<style scoped>
  .container{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

  }
  .content_img{
    height: 66%;
    width: 100%;
    position:relative;
    border: none !important;
    border-radius: 2px;
  }
  .sticker{
    width: 400px;
    height: 400px;
    background: #fff;
    margin: 50px;

    border-radius: 2px;
    box-shadow: 2px 2px 2px rgba(156, 156, 156, 0.25);
  }
  .img_sticker{
    height: 100%;
    width: 100%;
    border: none !important;
    z-index: 10;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
  }
  .filter{
    border: none !important;
    background: linear-gradient( 45deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100% );
    height: 100%;
    width:100%;
    border-radius: 2px;
    position: absolute;
    z-index: 100;
  }
  .section_etat_sticker{
    height: 34%;
    display: flex;
    justify-content: space-around;
    align-self: center;

  }
  .left_section, .middle_section, .right_section{
    height: 100%;
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p{
    margin:0;
  }
  .fa-icon{
    color: #ff004c;
    height: 22px;
    width: 22px;
  }
  .active{
    color: #00ffae;
  }
  .activeSticker{
    background: linear-gradient( 45deg, rgba(57, 186, 214, 0.1) 0%, rgba(255, 255, 161, 0.1) 100% ) ! important;
  }
</style>
