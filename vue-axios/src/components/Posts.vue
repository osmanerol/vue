<script>
import customAxios from '../customAxios'

export default {
  data(){
    return {
      postList: []
    }
  },
  methods : {
    getPostList() {
      customAxios.get('/posts.json')
      .then(response => {
        console.log(response.data)
        for(let key in response.data){
          this.postList.push({ ...response.data[key], id: key})
        }
      })
      .catch(error => {
        alert(error)
      })
    }
  },
  created() {
    this.getPostList()
  }
}
</script>

<template>
  <div class="container-fluid pt-5">
    <h1 class="text-center">Yazı Listesi</h1>
    <hr>
    <div class="d-flex flex-wrap flex-row justify-content-center align-items-center">
      <div class="card m-1" v-for="(item, index) in postList" :key="index">
        <img class="card-img-top" :src="item.thumbnail" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{ item.title }}</h5>
          <p class="card-text">{{ item.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .card {
    width: 300px;
  }
</style>
