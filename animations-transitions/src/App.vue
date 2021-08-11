<script>
import Post from './components/Post.vue';
import Home from './components/Home.vue';

export default {
  name: 'App',
  components: {
    Post,
    Home
  },
  data () {
    return {
      show: false,
      showJs: false,
      activeEffect: 'fade',
      elementWidth: 100,
      activeComponent: 'post',
      numberList: [1, 2, 3, 4, 5, 6, 7]
    }
  },
  methods: {
    beforeEnter(el) {
      el.style.width = this.elementWidth + 'px';
    },
    enter(el, done) {
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = (this.elementWidth + round * 10) + 'px';  
        round += 1; 
        if(round > 20) {
          clearInterval(interval);
          done();
        }
      }, 50)
    },
    afterEnter(el) {
    },
    afterEnterCanceled(el) {
    },
    beforeLeave(el) {
      this.elementWidth = 300;
      el.style.width = this.elementWidth + 'px';
    },
    leave(el, done) {
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = (this.elementWidth - round * 10) + 'px';  
        round += 1; 
        if(round > 20) {
          clearInterval(interval);
          done();
        }
      }, 50)
    },
    afterLeave(el) {
    },
    afterLeaveCanceled(el) {
    },
    addNewItem() {
      const position = Math.floor(Math.random() * this.numberList.length);
      this.numberList.splice(position, 0, this.numberList.length + 1);
    },
    removeItem(index) {
      this.numberList.splice(index, 1);
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="row mt-2">
      <div class="col-6 mx-auto">
        <h3>Animations & Transitions</h3>
        <hr>
        <select class="form-control" v-model="activeEffect">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <button class="btn btn-primary mt-2" @click="show = !show">Show / Hide Box</button>
        <hr>
        <transition :name="activeEffect">
          <div class="alert alert-success mt-2" v-if="!show">Alert Success Box</div>
        </transition>
        <hr>
        <transition :name="activeEffect" type="animation" appear>
          <div class="alert alert-warning mt-2" v-if="!show">Alert Warning Box</div>
        </transition>
        <hr>
        <transition
          enter-class=""
          enter-active-class="animate__animated animate__shakeX"
          leave-class=""
          leave-active-class="animate__animated animate__swing"  
          appear
        >
          <div class="alert alert-warning mt-2" v-if="!show">Alert Warning Box</div>
        </transition>
        <hr>
        <transition name="fade" mode="out-in">
          <div class="alert alert-success mt-2" v-if="show" key="success">Alert Success Box</div>
          <div class="alert alert-danger mt-2" v-else key="danger">Alert Danger Box</div>
        </transition>
        <hr>
        <button class="btn btn-primary mt-2" @click="showJs = !showJs">Show / Hide JS</button>
        <hr>
        <transition
          :css="false"
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @after-enter-canceled="afterEnterCanceled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @after-leave-canceled="afterLeaveCanceled"
        >
          <div class="animation-box" v-if="showJs">Alert Success Box</div>
        </transition>
        <hr>
        <h3>Dynamic Components Transition</h3>
        <button class="btn btn-danger" @click="activeComponent = 'post'">Post</button>
        <button class="btn btn-primary" @click="activeComponent = 'home'">Home</button>
        <br> <br>
        <transition name="fade" mode="out-in">
          <component :is="activeComponent"></component>
        </transition>
        <hr>
        <button class="btn btn-danger" @click="addNewItem">Add New Element</button>
        <ul class="list-group pb-3">
          <transition-group name="slide">
            <li class="list-group-item" v-for="(item, index) in numberList" :key="index" @click="removeItem(index)">{{ item }}</li>
          </transition-group>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.fade-enter{
  opacity: 0;
}

.fade-enter-active{
  transition: opacity 1s;
}

.fade-leave{
  opacity: 1;
}

.fade-leave-active{
  transition: opacity 1s;
  opacity: 0;
}

.slide-enter{
  opacity: 0;
}

.slide-enter-active{
  animation: slide-in 1s ease-out forwards;
  transition: opacity .5s;
}

.slide-leave{
  opacity: 1;
}

.slide-leave-active{
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
  position: absolute;
}

.slide-move{
  transition: transform 1s;
}

@keyframes slide-in {
  from{
    transform: translateY(20px);
  }
  to{
    transform: translateY(0px);
  }
}

@keyframes slide-out {
  from{
    transform: translateY(0px);
  }
  to{
    transform: translateY(20px);
  }
}

.animation-box{
  width: 100px;
  background-color: #fbbd08;
  border: 1px solid #666;
  height: 100px;
}
</style>
