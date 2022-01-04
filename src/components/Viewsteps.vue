<template>
  <div class="hello">
    <p>Твои шаги: {{item}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return{
      item: Math.round(Math.random()*1000)
    }
  },
  /*mounted() {
    this.ChangeItem()
  },
  methods: {
    ChangeItem(){
      setInterval(() => this.item+=1, 1000)
    }
  }*/
}


</script>
<style scoped>
</style>
