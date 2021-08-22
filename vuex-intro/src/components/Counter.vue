<script>
import { mapMutations, mapActions } from 'vuex';

export default {
  /*
  methods : {
    incrementCounter(){
      //this.$store.state.counter += 1;
      this.$store.commit('increaseCounter', 1);
    },
    decrementCounter(){
      //this.$store.state.counter -= 1;
      this.$store.commit('decreaseCounter', 1);
    }
  }
  */
  methods: {
    ...mapMutations([
      'increaseCounter',
      'decreaseCounter'
    ]),
    ...mapActions([
      'increment',
      'decrement',
      'incrementAsync',
      'decrementAsync'
    ])
    /*
    increment(value) {
      this.$store.dispatch('increment', value);
    },
    decrement(value) {
      this.$store.dispatch('decrement', value);
    },
    incrementAsync(value) {
      this.$store.dispatch('incrementAsync', value);
    },
    decrementAsync(value) {
      this.$store.dispatch('decrementAsync', value);
    }
    */
  }
}
</script>

<template>
  <div>
    <button class="btn btn-success" @click="increaseCounter(1)">+ Arttır</button>
    <button class="btn btn-danger" @click="decreaseCounter(1)">- Azalt</button>
    <hr>
    <button class="btn btn-success" @click="increment(3)">+ Arttır</button>
    <button class="btn btn-danger" @click="decrement(2)">- Azalt</button>
    <hr>
    <button class="btn btn-success" @click="incrementAsync(3)">+ Arttır</button>
    <button class="btn btn-danger" @click="decrementAsync(2)">- Azalt</button>
  </div>
</template>

<style>
</style>
