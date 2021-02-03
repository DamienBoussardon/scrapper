<template>
  <div class="container" >
    <div  class="post" @click="selectPost(post)">
      <div class="content_img">
        <div class="filter"></div>
        <img class="img_post" v-bind:src="post.url_image ? post.url_image : default_img"/>
      </div>
      <div class="info_post">
        <div class="left_info_post">
          <p class="address" >{{post.address}}</p>
        </div>
        <div class="right_info_post" >
          <p class="right_post" >{{post.type}}</p>
          <p class="right_post" >{{post.price}}</p>
        </div>
      </div>
    </div>
    <modal v-show='showModal' :post="selectedPost" @close="deselect" />
  </div>
</template>


<script>
  import  modal  from './Modal';

  export default {
    name: 'Post',
    props:['post'],
    components :{
      modal
    },
    data (){
      return {
        default_img : 'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png',
        showModal : false,
        selectedPost : null,
      }
    },
    methods: {
      selectPost(post) {
        this.selectedPost = post;
        this.showModal = true
      },
      deselect() {
        this.selectedPost = null;
        this.showModal = false
      }
    }
  }
</script>


<style scoped>

  .content_img{
    height: 66%;
    width: 100%;
    position:relative;
    border: none !important;
  }
  .post{
    width: 500px;
    height: 250px;
    background: #fff;
    margin-left: 45px;
    margin-top: 45px;
    border-radius: 2px;
    box-shadow: 2px 2px 2px rgba(156, 156, 156, 0.25);
  }
  .img_post{
    height: 100%;
    width: 100%;
    border: none !important;
    z-index: 10;
    object-fit: cover;
  }
  .filter{
    border: none !important;
    background: linear-gradient( 45deg, rgba(57, 186, 214, 0.3) 0%, rgba(72, 145, 161, 0.1) 100% );
    height: 100%;
    width:100%;
    position: absolute;
    z-index: 100;
  }
  .info_post{
    display: flex;
  }
  .left_info_post{
    width: 50%;
    justify-content: center;
  }
  .right_info_post{
    width: 50%;
    justify-content: end;
  }
  .right_post{
    margin-right: 15px;
    text-align: right;
  }
  .address{
    margin-left: 15px;
    text-align: left;
    align-items: center;
  }
</style>
