import Home from './components/shared/Home.vue'
import About from './components/shared/About.vue'
import Skills from './components/shared/Skills.vue'
const myWork = resolve => {
  require.ensure(['./components/shared/MyWork.vue'],()=>{
    resolve(require('./components/shared/MyWork.vue'));
  });
};
import contactMe from './components/shared/ContactMe.vue'
export const routes = [
    {path:'/',component:Home},
    {path:'/skills',component:Skills},
    {path:'/work',component:myWork},
    {path:'/contact',component:contactMe},
    {path:'/about',component:About},
    { path: '*', redirect: '/' }
];