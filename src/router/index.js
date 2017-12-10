import Vue from 'vue'
import Router from 'vue-router'
import home from 'components/home/home'
import quiz from 'components/quiz/quiz'
import fun from 'components/fun/fun'
import part1 from 'components/home/part1'
import part2 from 'components/home/part2'
import part3 from 'components/home/part3'
import item from 'components/quiz/item'
import score from 'components/quiz/score'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: 'home',
    },
    {
      path: '/home',
      component: home,
      children: [
        {
          path: '/part1',
          name: 'part1',
          component: part1
        },
        {
          path: '/part2',
          component: part2
        },
        {
          path: '/part3',
          component: part3
        }
      ]
    },
    {
      path: '/quiz',
      component: quiz,
      children: [
        {
          path: '/item',
          component: item
        },
        {
          path:'/score',
          component:score
        }
      ]
    },
    {
      path: '/fun',
      component: fun
    }
  ]
})
