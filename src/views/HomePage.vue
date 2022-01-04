<template>
    <div>
        Home
        <a href="/steps">Шаги</a>
        {{tilt}}
    </div>
</template>

<script>
export default {
    data(){
        return{
            tilt: []
        }
    },
    mounted() {
        this.GetCords(this.tilt)
    },
    methods:{
        GetCords(tilt){
    if(window.DeviceMotionEvent){    
            window.addEventListener('devicemotion', function (event) {
            tilt.push([event.accelerationIncludingGravity.x, accelerationIncludingGravity.y, event.accelerationIncludingGravity.z]);
        }, true);
    }
    if(window.DeviceOrientationEvent){
        window.addEventListener("deviceorientation", function(event){
            tilt.push([event.alpha, event.beta, event.gamma]);
        }, false);
    }
        }
    }
}
</script>

<style scoped>

</style>