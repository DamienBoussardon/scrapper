<template>
  <div class="nav">
      <div class="container">
          <ul>
            <li><router-link to="/">News file</router-link></li>
            <li><router-link to="/Statistique">Statistique</router-link></li>
            <li><img class="notif" src="../assets/notification.svg" :class="notification"></li>
          </ul>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',
    props: ['notification'],
    data () {
      return {}
    }
}
</script>

<style scoped>
  .nav{
    height: 50px;
    background: #79C6FE;
    display: flex;
    justify-content: end;
    align-items: center;
  }
  .container{
    width: 100%;
  }
  ul {
    display: flex;
    justify-content:flex-end;
    list-style-type: none;
    padding: 0;
  }
  li {
    height:15px;
    display: inline-block;
    margin: 0 20px;
    color: #fff;
    font-size: 0.8em;
  }
  a{
    text-decoration: none;
    color: #fff;
  }
  .notif{
    width: 20px;
    height: 20px;
  }
</style>
