const home = resolve=>{
    require.ensure(['./components/shared/Home.vue'],()=>{
        resolve(require('./components/shared.Home.vue'));
    },'home');
};const skills = resolve=>{
    require.ensure(['./components/shared/Skills.vue'],()=>{
        resolve(require('./components/shared.Skills.vue'));
    },'home');
};const myWork = resolve=>{
    require.ensure(['./components/shared/MyWork.vue'],()=>{
        resolve(require('./components/shared.MyWork.vue'));
    },'home');
};const contactMe = resolve=>{
    require.ensure(['./components/shared/ContactMe.vue'],()=>{
        resolve(require('./components/shared.ContactMe.vue'));
    },'home');
};