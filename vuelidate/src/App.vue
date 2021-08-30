<script>
import { required, email, numeric, minLength, maxLength, sameAs, between } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      email : null,
      password : null,
      repassword : null,
      selectedCategory : null,
      categories : ["Yazılım", "Donanım", "Cloud", "Sunucular", "Unix", "Linux", "Mac OS", "Windows"],
      age: null,
      hobbies: []
    }
  },
  validations: {
    email: {
      required,
      email,
      /*
      unique(val, vm) {
        return val !== 'osmanerol@gmail.com' 
      }
      */
     unique(val) {
       return new Promise((resolve, reject) => {
         setTimeout(() => {
           resolve(val !== 'osmanerol@gmail.com')
         }, 1000)
       })
     }
    },
    password: {
      required,
      numeric,
      minLength: minLength(6),
      maxLength: maxLength(8)
    },
    repassword: {
      required,
      numeric,
      minLength: minLength(6),
      maxLength: maxLength(8),
      //sameAs: sameAs('password')
      sameAs: sameAs(vm => {
        return `${vm.password}00`
      })
    },
    age: {
      required,
      numeric,
      between: between(18,60)
    },
    selectedCategory: {
      checked(val, vm) {
        return vm.selectedCategory === 'Yazılım' ? true : false
      }
    },
    hobbies: {
      required,
      minLength: minLength(2),
      $each: {
        value: {
          required,
          minLength: minLength(6)
        }
      }
    }
  },
  methods: {
    onSubmit(){
      let form = {
        email : this.email,
        password : this.password,
        category : this.category,
        hobbies : this.hobbies,
      }
      console.log(form)
    },
    newHobby(){
      let hobby = {
        id: Math.random() * Math.random() * 1000,
        value: ''
      }
      this.hobbies.push(hobby)
    }
  }
}
</script>

<template>
  <div class="container">
    <h3 class="text-center mt-3">Vuelidate ile Form Kontrolü</h3>
    <div class="row">
      <div class="card col-5 p-4 mt-3 shadow">
        <form style="width: 350px" @submit.prevent="onSubmit">
          <div class="form-group">
            <label>E-posta Adresiniz</label>
            <input 
              v-model="email" 
              type="email" 
              class="form-control" 
              :class="{ 'is-invalid' : $v.email.$error}"
              placeholder="E-posta adresini giriniz"
              @blur="$v.email.$touch()"
            />
            <small class="form-text text-danger" v-if="!$v.email.required">Bu alan zorunludur</small>
            <small class="form-text text-danger" v-if="!$v.email.email">Geçerli e-posta adresi giriniz</small>
            <small class="form-text text-danger" v-if="!$v.email.unique">E-posta daha önce kaydedilmiş</small>
          </div>
          <div class="form-group">
            <label>Şifre</label>
            <input 
              v-model="password" 
              type="password" 
              class="form-control" 
              :class="{ 'is-invalid' : $v.password.$error}"
              placeholder="Şifrenizi giriniz"
              @blur="$v.password.$touch()"
            />
            <small class="form-text text-danger" v-if="!$v.password.required">Bu alan zorunludur</small>
            <small class="form-text text-danger" v-if="!$v.password.numeric">Şifre rakamlardan oluşmalıdır</small>
            <small class="form-text text-danger" v-if="!$v.password.minLength">Şifre en az {{ $v.password.$params.minLength.min }} rakamdan oluşmalıdır</small>
            <small class="form-text text-danger" v-if="!$v.password.maxLength">Şifre en çok {{ $v.password.$params.maxLength.max }} rakamdan oluşmalıdır</small>
          </div>
          <div class="form-group">
            <label>Şifre Tekrar</label>
            <input 
              v-model="repassword" 
              type="password" 
              class="form-control" 
              :class="{ 'is-invalid' : $v.repassword.$error}"
              placeholder="Şifrenizi tekrar giriniz"
              @blur="$v.repassword.$touch()"
            />
            <small class="form-text text-danger" v-if="!$v.repassword.required">Bu alan zorunludur</small>
            <small class="form-text text-danger" v-if="!$v.repassword.numeric">Şifre rakamlardan oluşmalıdır</small>
            <small class="form-text text-danger" v-if="!$v.repassword.minLength">Şifre en az {{ $v.password.$params.minLength.min }} rakamdan oluşmalıdır</small>
            <small class="form-text text-danger" v-if="!$v.repassword.maxLength">Şifre en çok {{ $v.password.$params.maxLength.max }} rakamdan oluşmalıdır</small>
            <small class="form-text text-danger" v-if="!$v.repassword.sameAs">Girilen şifreler birbirleriyle uyuşmuyor</small>
          </div>
          <div class="form-group">
            <label>Yaşınız</label>
            <input 
              v-model="age" 
              type="number" 
              class="form-control" 
              :class="{ 'is-invalid' : $v.age.$error}"
              placeholder="Şifrenizi tekrar giriniz"
              min="0"
              @blur="$v.age.$touch()"
            />
            <small class="form-text text-danger" v-if="!$v.age.required">Bu alan zorunludur</small>
            <small class="form-text text-danger" v-if="!$v.age.numeric">Yaş rakamlardan oluşmalıdır</small>
            <small class="form-text text-danger" v-if="!$v.age.between">Yaşınız {{ $v.age.$params.between.min }} ile {{ $v.age.$params.between.max}} arasında oluşmalıdır</small>
          </div>
          <div class="form-group">
            <label>Kayıt olmak istediğiniz kategori</label>
            <select 
              v-model="selectedCategory" 
              class="form-control"
              :class="{ 'is-invalid' : $v.selectedCategory.$invalid}"
            >
              <option v-for="(category, index) in categories" :key="index" :value="category">{{ category }}</option>
            </select>
            <small class="form-text text-danger" v-if="!$v.selectedCategory.checked">Sadece yazılım alanına ait kayıt oluşturabilirsiniz</small>
          </div>
          <a @click="newHobby" class="text-white btn btn-secondary rounded-0 btn-sm">İlgi Alanı Ekle</a>
            <small class="form-text text-danger" v-if="!$v.hobbies.required">Bu alan zorunludur</small>
            <small class="form-text text-danger" v-if="!$v.hobbies.minLength">İlgi alanlarınız en az {{ $v.hobbies.$params.minLength.min }} tane olmalıdır</small>
          <ul class="list-group mt-3 mb-3 border-0">
            <li v-for="(hobby,index) in hobbies" :key="index" class="list-group-item d-flex pl-2">
              <input 
                type="text" 
                class="form-control mr-2" 
              :class="{ 'is-invalid' : $v.hobbies.$each[index].$error}"
                v-model="hobby.value"
                @blur="$v.hobbies.$each[index].value.$touch()"
              />
              <button class="btn btn-sm btn-danger rounded-0" @click="hobbies.splice(index, 1)">Sil</button>
            </li>
          </ul>
          <button class="btn btn-outline-secondary rounded-0" :disabled="$v.$invalid">Kaydet</button>
        </form>
      </div>
      <div class="card col-5 p-4 mt-3 shadow ml-auto">
        <p>{{ $v.selectedCategory }}</p>
      </div>
    </div>
  </div>
</template>

