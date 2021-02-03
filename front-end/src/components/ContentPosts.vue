<template>
  <div class="content_posts">
    <Post  v-for="post in sortedPosts " :key="post.id"  :post="post" />
    <div class="content_button_paginate">
      <button id="bnt-prev" @click="prevPage">Previous</button>
      <button id="bnt-next" @click="nextPage">Next</button>
    </div>
  </div>
</template>

<script>
  import Post from './Post'
  const axios = require('axios');
  export default {
    name: 'ContentPosts',
    components: {
      Post,
    },
    data(){
      return {
        posts: [],
        pageSize:6,
        currentPage:1
      }
    },
    mounted() {
      axios.get('http://localhost:8000/post').then(
        response => (this.posts = response.data)
      )
    },
    methods:{
      sort:function(s) {
        //if s == current sort, reverse
        if(s === this.currentSort) {
          this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
        }
        this.currentSort = s;
      },
      nextPage:function() {
        if((this.currentPage*this.pageSize) < this.posts.length) this.currentPage++;
      },
      prevPage:function() {
        if(this.currentPage > 1) this.currentPage--;
      }

    },
    computed:{
      sortedPosts:function() {
        return this.posts.sort((a,b) => {
          let modifier = 1;
          if(this.currentSortDir === 'desc') modifier = -1;
          if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
          if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
          return 0;
        }).filter((row, index) => {
          let start = (this.currentPage-1)*this.pageSize;
          let end = this.currentPage*this.pageSize;
          if(index >= start && index < end) return true;
        });
      }
    }
  }
</script>

<style scoped>
  .content_posts{
    width: 100%;
    height: 100%;
    background:#fff;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-left: 275px;
  }
  .content_button_paginate{
    position: fixed;
    bottom: 50px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  button{
    height: 30px;
    width: 80px;
    background-color: #50ACEE;
    color : white;
    border: none;
    border-radius: 3px;

  }
  #bnt-next{
    margin-left: 50px;
  }
</style>
