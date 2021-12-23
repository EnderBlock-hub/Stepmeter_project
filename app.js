import  Vue from  'vue';

const App = {
    data(){
        return{
            cords: 1212,
            ff: ff()
        }
    }
}
function ff(){
    let acl = new Accelerometer({frequency: 60});
    acl.addEventListener('reading', () => {
        var xyz = [acl.x,acl.y,acl.z]
        return xyz
    });
    
    acl.start();
}
Vue.createApp(App).mount("#app")
/*
let acl = new Accelerometer({frequency: 60});
acl.addEventListener('reading', () => {
    var xyz = [acl.x,acl.y,acl.z]
    let cords = document.querySelector('#cords')
    for (i=0;i<3;i++){
    cords.textContent = i+1,". ",xyz[i];
}
});

acl.start();
*/