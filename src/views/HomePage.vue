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
        window.addEventListener('devicemotion', function (event) {
        tilt.push([event.acceleration.x * 2, event.acceleration.y * 2]);
    }, true);
        }
    }
}
</script>

<style scoped>

</style>