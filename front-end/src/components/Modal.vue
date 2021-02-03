<template>
  <transition name="modal">
    <div id="modal">
      <div class="modal" >
        <button type="button" aria-label="Close modal" class="btn-close" @click="$emit('close')">
          <icon class="close-icon" name="times"></icon>
        </button>
        <div class="top-modal">
          <div class="content_img_website">
            <img class="img_website" src="#"/>
          </div>
          <div class="filter"></div>
          <img class="img_post" v-bind:src="post.url_image ? post.url_image : default_img"/>
        </div>
        <div class="bottom-modal">
          <div class="content-left">
            <div class="content-address">
              <h1>{{post.address}}</h1>
            </div>
            <div class="content-other-infos">
              <ul class="list-info">
                <li>Nombre de pièce : <span>{{post.pieces}}</span></li>
                <li>Type d'annonce : <span>{{post.type}}</span></li>
                <li>Nombre de mètre carré : <span>{{post.surface}}</span></li>
                <!--<li >Diagnostic de performance énergétique : <span>{{post.dpe}}</span></li>-->
                <li>Téléphone : <span>{{post.telephone}}</span></li>
              </ul>
            </div>
            <div class="content-description">
              <h4>Description</h4>
              <p>{{post.description}}</p>
            </div>
          </div>
          <div class="content-right">
            <div class="content-price">
              <p class="price">{{post.price}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'modal',
    props: [ 'post', 'open'],
    data() {
      return {
        default_img: "https://increasify.com.au/wp-content/uploads/2016/08/default-image.png"
      }
    }
  }
</script>

<style scoped>
  .modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease
  }
  #modal{
    height: 100vh;
    width: 100vw;
    z-index:9999;
    top: 0;
    left: 0;
    position: fixed;
    background-color: rgba(0,0,0,0.3);
  }
  .modal{
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10000;
    margin: 2vh 5vw 2vh 5vw;
    width: 90vw;
    height: 96vh;
    background-color: black;
  }
  .top-modal{
    height: 60%;
    width: 100%;
    margin: 0;
    background-color: deepskyblue;
  }
  .content-address{
    display: flex;
  }
  .content-address h1{
    margin: 0;
  }
  .bottom-modal{
    margin: 0;
    height: 40%;
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
  }
  .content-left{
    justify-content: space-around;
  }
  .content-right{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .content-left{
    width: 65%;
  }
  .content-price{
    margin-right: 3em;
  }
  h1{
    color: #8D8C8C;
    padding-left: 2rem;
  }
  h4{
    padding: 0;
    padding-left: 2em;
    padding-bottom: 0.4em;
    text-align: left;
    margin: 0;
    font-weight: bold;
  }
  .content-other-infos{
  }
  .content-description{

    text-align: justify;
  }
  .content-description p {
    margin: 0;
    padding-left: 4rem;
  }
  .content_img_website{
    position: absolute;
    z-index: 101;
    height: 50px;
    width: 50px;
  }
  .img_website{
    height: inherit;

  }
  .list-info{
    list-style: none;
    height: calc(100% - 2rem);
    margin: 0;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 7rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;

  }
  .price{
    font-family: Roboto;
    color: #79C6FE;
    font-size: 5vw;
    margin: 0;
  }
  li{
    color: #8D8C8C;
    text-align: left;
    padding-top: 0.1rem;
  }
  span{
    color: black;
    font-size: 1.1em;
  }
  .btn-close {
    position :absolute;
    z-index: 100000;
    top: 0.8em;
    right: 0.8em;
    border: none;
    font-size: 24px;
    cursor: pointer;
    font-weight: bold;
    color: #434343;
    background: transparent;
  }
  .close-icon{
    font-size: 2em;
  }
  .filter{
    border: none !important;
    background: linear-gradient( 45deg, rgba(57, 186, 214, 0.3) 0%, rgba(72, 145, 161, 0.1) 100% );
    height: 60%;
    width:100%;
    position: absolute;
    z-index: 100;
  }
  .img_post{
    height: 100%;
    width: 100%;
    border: none !important;
    z-index: 10;
    object-fit: cover;
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  .btn-close:hover .close-icon{
    color: white;
  }

</style>
