<script>
export default {
  name: 'UserEdit',
  data () {
    return {
      save: false
    }
  },
  beforeRouteLeave (to, from, next) {
    if(this.save){
      next()
    }
    else{
      if(confirm("All information may be lost. Are you sure to exit ?")){
        next()
      }
      else{
        next(false)
      }
    }
  }
}
</script>

<template>
  <div>
    <h2 class="my-3">User Edit Component</h2>
    <hr>
    <p>Name: {{ $route.query.name }}</p>
    <p>LastName: {{ $route.query.lastname }}</p>  
    <button class="btn btn-primary" @click="save = true">Submit</button>
    <div style="height: 800px"></div>
    <p id="data">Hash fragment example</p>
  </div>
</template>

<style lang="scss">
</style>
