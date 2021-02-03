import Vue from 'vue'
import Router from 'vue-router'
import NewsFile from '@/views/Newsfile'
import Statistique from '@/views/Statistique'
import Configuration from '@/views/Configuration'
import NavBar from '@/components/NavBar'


Vue.use(Router)

export default new Router({
  routes: [
    {
      mode: 'history',
      path: '/',
      name: 'NewsFile',
      components: {'default': NewsFile, 'sideBar': NavBar}
    },
    {
      path: '/Statistique',
      name: 'Statistique',
      components:  {'default': Statistique, 'sideBar': NavBar},

    },{
      path: '/Configuration',
      name: 'Configuration',
      components:  {'default': Configuration, 'sideBar': NavBar}
    },{
      path:'*',
      redirect:'/'
    }
  ]
})
