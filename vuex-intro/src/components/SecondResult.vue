<script>
  import { mapGetters } from 'vuex';

  export default {
    /*
    computed: mapGetters([
      'getDoubleCounter',
      'stringCounter'
    ])
    */
    computed: {
      ...mapGetters({
        double : 'getDoubleCounter',
        stringC :'stringCounter'
      }),
      value: {
        get() {
          return this.$store.getters.getValue;
        },
        set(value) {
          this.$store.dispatch('setValueData', value);
        }
      }
    }
  }
</script>

<template>
  <div>
    <p class="counter-container"> Sayaç : {{ double }}</p>
    <p class="counter-container"> Tıklama Sayısı : {{ stringC }}</p>
    <input type="text" v-model="value">
    <p>{{ value }}</p>
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
