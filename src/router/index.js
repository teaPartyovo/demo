import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from "../views/Admin.vue"
import Shedule from "../views/admPage/LabScheduling.vue"
import Sem from "../views/admPage/SemesterManage.vue"
import Approval from "../views/admPage/Approval.vue"
import StuMange from "../views/admPage/stuMange.vue"
import TeaMange from "../views/admPage/teaMange.vue"
import ExpMange from "../views/admPage/expMange.vue"
import Visit from "../views/visiter.vue"
import Home from "../views/home.vue"
import Exper from "../views/Experimenter.vue"
import Tea from "../views/Teacher.vue"
import Stu from "../views/Stu.vue"

import RepairHandling from "../views/expPage/RepairHandling.vue"
import LabApplication from "../views/stuPage/LabApplication.vue"
import CourseApplication from "../views/teaPage/CourseApplication.vue"
import RepairApplication from "../views/teaPage/RepairApplication.vue"

Vue.use(VueRouter)

// const router = [
//     { path: '/index', component: Index },
//     { path: '/login', component: Login }
// ]
const routes = [
  {
    path: '/',
    component: Visit,
    redirect: '/login',
    children:[
      {
        path:'/login',
        component: Home
      }
    ]
  },
  {
    path: '/admin',
    component: Main,
    redirect: '/ahome',
    children:[
      {
        path: '/ahome',
        component: Home
      },
      {
        path: '/sem',
        component: Sem
      },
      { 
        path: '/shedule', 
        component: Shedule 
      },
      { path: '/approval', 
        component: Approval
      },
      { path: '/stumange', 
        component: StuMange
      },
      { path: '/teamange', 
        component: TeaMange
      },
      {
        path: '/expmange',
        component: ExpMange
      }
    ]
  },
  {
    path: '/tea',
    component: Tea,
    redirect: '/thome',
    children:[
      {
        path:'/thome',
        component: Home
      },
      {
        path:'/course-application',
        component: CourseApplication
      },
      {
        path:'/repair-application',
        component: RepairApplication
      },
    ]
  },
  {
    path: '/exper',
    component: Exper,
    redirect: '/ehome',
    children:[
      {
        path: '/ehome',
        component: Home
      },
      {
        path:'/repair-handling',
        component: RepairHandling
      }
    ]
  },
  {
    path: '/stu',
    component: Stu,
    redirect: '/shome',
    children:[
      {
        path:'/shome',
        component: Home
      },
      {
        path:'/lab-application',
        component: LabApplication
      },
    ]
  }

  
]
const router = new VueRouter({
  routes
})

export default router