<template>
    <div>
        Home
        <a href="/steps">Шаги</a>
        <div class="motion">{{motion}}</div>
        <div class="orientation">{{orientation}}</div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            motion: [],
            orientation:[]
        }
    },
    mounted() {
        this.GetCords(this.motion,this.orientation)
    },
    methods:{
        GetCords(motion,orientation){
    if(window.DeviceMotionEvent){    
            window.addEventListener('devicemotion', function (event) {
            motion.push([event.acceleration.x * 2, event.acceleration.y * 2,event.acceleration.z * 2]);
        }, true);
    }
    if(window.DeviceOrientationEvent){
        window.addEventListener("deviceorientation", function(event){
            orientation.push([event.alpha, event.beta, event.gamma]);
        }, false);
    }
        }
    }
}
</script>

<style scoped>
.motion{
    color: red;
}
.orientation{
    color: green;
}
</style>