// const app = new Vue({
//     el: '#app',
//     data: {
//         message: 'hello world mother fucker!'
//     }
// });

const app = Vue.createApp({
    data(){
        return {
            message: 'version 3'
        }
    }
}).mount('#app');