<script>
  export default {
    computed: {
      counter() {
        //return this.$store.state.counter * 2;
        return this.$store.getters.getDoubleCounter;
      }
    }
  }
</script>

<template>
  <div>
    <p class="counter-container"> Sayaç : {{ counter }}</p>
  </div>
</template>

<style scoped>
  .counter-container{
    border: 1px solid #aa7f08;
    padding: 10px 5px;
    background-color: #fbbd08;
    font-size: 20px;
    color: #000;
  }
</style>
