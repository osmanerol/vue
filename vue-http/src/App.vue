<script>
export default {
  name: 'app',
  data () {
    return {
      username: null,
      userList: [],
      resource: { }
    }
  },
  methods: {
    submit() {
      let requestObject = { 
        username: this.username
      }
      let options = { }
      /*
      this.$http.post('users.json', requestObject).then(response => {
        console.log(response)
        this.username = null;
      })
      */
      //this.$resource('users.json').save(options, requestObject);
      this.resource.submitUser({}, requestObject);
    },
    getUsers() {
      //this.$resource('users.json').get().then(response => {
      this.$http.get('users.json').then(response => {
        this.userList = [];
        /*
        let data = response.data;
        for(let key in data){
          this.userList.push(data[key]);
        }
        */
        return response.json();
      }).then(data => {
        for(let key in data.userList){
          this.userList.push({
            key: key,
            data: data.userList[key]
          });
        }
      })
    },
    deleteUser(key) {
      // this.$http.delete(`users/${key}.json`).then(response => { })
      this.$resource(`users/${key}.json`).delete();
      this.userList = this.userList.filter(item => item.key != key)
    }
  },
  created() {
    const customActions = {
      submitUser : { 
        method : 'POST',
        url : 'users.json'      
      }
    }
    this.resource = this.$resource('users.json', {}, customActions);
  }
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-6 mx-auto">
        <h2>Vue Resource</h2>
        <hr>
        <div class="form-group">
          <input type="text" class="form-control" v-model="username">
          <button class="btn btn-primary mt-2" @click="submit">Submit</button>
        </div>
        <hr>
        <button class="btn btn-success" @click="getUsers">Get Users</button>
        <hr>
        <ul class="list-group">
          <li class="list-group-item" v-for="(user, index) in userList" :key="index">
            <span>{{ user.data.username }}</span>
            <button class="btn btn-danger" @click="deleteUser(user.key)">Delete</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
</style>
