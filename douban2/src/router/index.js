import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/Home/home'
import audio from '../pages/Audio/audio'
import broadcast from '../pages/Broadcast/broadcast'
import group from '../pages/Group/group'
import mine from '../pages/Mine/mine'
import login from '../pages/Login/login'
import register from '../pages/Register/register'
//二级路由
import Film from '../components/Film'
import Read from '../components/Read'
import TV from '../components/TV'
import City from '../components/City'
import Music from '../components/Music'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
		{
		  path: '/audio',
		  name: 'audio',
		  component: audio,
		  children:[
    	{path:"Film",component:Film},
    	{path:"Read",component:Read},
    	{path:"TV",component:TV},
    	{path:"City",component:City},
    	{path:"Music",component:Music}
    ]},
		{
		  path: '/broadcast',
		  name: 'broadcast',
		  component: broadcast
		},
		{
		  path: '/group',
		  name: 'group',
		  component: group
		},
		{
		  path: '/mine',
		  name: 'mine',
		  component: mine
		},
		{
		  path: '/login',
		  name: 'login',
		  component: login
		},
		{
		  path: '/register',
		  name: 'register',
		  component: register
		}
  ]
})
