<script>
import AppSwitch from './Switch.vue';

export default {
  name: 'App',
  components: {
    AppSwitch
  },
  data() {
    return {
      userData: {
        username: '',
        password: '',
        age: null,
        message: '',
        interests: [],
        gender: null,
        cities: ['İstanbul', 'Ankara', 'İzmir', 'Bursa'],
        selectedCity: null
      },
      switched: false,
      isSubmitted: false
    }
  },
  methods: {
    submit() {
      this.isSubmitted = true;    
    }
  }
}
</script>

<template>
  <div class="container">
    <h3>Form Verileriyle Çalışmak</h3>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <div class="panel panel-warning">
          <div class="panel-heading">
            <h4>Başvuru Formu</h4>
          </div>
          <div class="panel-body">
            <form>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="email">Kullanıcı Adı</label>
                    <input 
                      type="text" 
                      id="username" 
                      class="form-control" 
                      :value="userData.username"
                      @input="userData.username = $event.target.value"
                    >
                  </div>
                  <div class="form-group">
                    <label for="password">Şifre</label>
                    <input 
                      type="password" 
                      id="password" 
                      class="form-control" 
                      v-model.lazy.trim="userData.password"
                    >
                  </div>
                  <div class="form-group">
                    <label for="age">Yaş</label>
                    <input 
                      type="number" 
                      id="age" 
                      class="form-control" 
                      min="0"
                      v-model.number.trim="userData.age"
                    >
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 form-group">
                  <label for="message">Açıklama</label><br>
                  <textarea 
                    id="message" 
                    rows="3" 
                    class="form-control"
                    v-model="userData.message" 
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label>
                      <input type="checkbox" value="yazilim" v-model="userData.interests"> Yazılım
                    </label>
                    <label>
                      <input type="checkbox" value="donanim" v-model="userData.interests"> Donanım
                    </label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 form-group">
                  <label>
                    <input type="radio" name="gender" value="erkek" v-model="userData.gender"> Erkek
                  </label>
                  <label>
                    <input type="radio" name="gender" value="kadin" v-model="userData.gender"> Kadın
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 from-group">
                  <label>Şehir</label>
                  <select class="form-control" v-model="userData.selectedCity">
                    <option 
                      v-for="(city, index) in userData.cities" 
                      :key="index"
                      :selected="city == 'İzmir'"
                    >
                      {{ city }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 form-group">
                  <app-switch v-model="switched" />
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-md-12">
                  <button
                    class="btn btn-primary"
                    @click.prevent="submit"
                  >
                    Gönder!
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-6" v-if="isSubmitted">
          <div class="panel panel-info">
            <div class="panel-heading">
              <h4>Form Verileri</h4>
            </div>
            <div class="panel-body">
              <p>Kullanıcı Adı: {{ userData.username }}</p>
              <p>Şifre: {{ userData.password }}</p>
              <p>Yaş: {{ userData.age }}</p>
              <!-- multiline gostermek icin -->
              <p style="white-space : pre">Açıklama: {{ userData.message }}</p>
              <p><strong>İlgi Alanları</strong></p>
              <ul>
                <li v-for="(interest, index) in userData.interests" :key="index">{{ interest }}</li>
              </ul>
              <p>Cinsiyet: {{ userData.gender }}</p>
              <p>Şehir: {{ userData.selectedCity }}</p>
              <p>Toggle: {{ switched }}</p>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>
