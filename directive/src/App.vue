<script>
export default {
  name: 'App',
  directives: {
    'color': {
      bind(el, binding, vnode){
        let delay = 0;
        if(binding.modifiers['delay']){
          delay = 2000;
        }
        if(binding.modifiers['flash']){
          let firstColor = binding.value.mainColor || binding.value;
          let secondColor = binding.value.secondColor || '#fec008';
          let currentColor = firstColor;
          setTimeout(() => {
            setInterval(() => {
              currentColor == secondColor ? currentColor = firstColor : currentColor = secondColor;
              if(binding.arg == 'background'){ 
                el.style.backgroundColor = currentColor;
              }
              else{
                el.style.color = currentColor;
              }
            }, binding.value.delay || 1000)
          }, delay)
        } 
        else {
          setTimeout(() => {
            if(binding.arg == 'background'){ 
              el.style.backgroundColor = binding.value;
            }
            else{
              el.style.color = binding.value;
            }
          }, delay)
        }
      }
    },
    'custom-on': {
      bind(el, binding, vnode){
        const type = binding.arg;
        const fn = binding.value;
        el.addEventListener(type, fn);
        /*
        el.onclick = () => {
          binding.value();
        }
        */
      }
    }
  },
  methods: {
    clicked() {
      alert('Clicked');
    },
    mousemove() {
      alert('MouseMove');
    },
    mouseleave() {
      alert('MouseLeave');
    }
  },
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mx-auto">
        <h3>Vue.Js Directives</h3>
        <p v-text="'Hello World'" />
        <p v-html="'<b>Hello World</b>'" />
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-md-6 mx-auto">
        <h3>Custom Directive</h3>
        <p v-color:background.delay.flash="{ mainColor : 'green', secondColor : 'blue', delay : 500 }">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita incidunt nam sed in sunt suscipit recusandae debitis harum optio quaerat. Commodi illo perferendis dolore perspiciatis modi eligendi ipsum voluptatem minus.</p>
        <p v-color.delay.flash="'red'">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita incidunt nam sed in sunt suscipit recusandae debitis harum optio quaerat. Commodi illo perferendis dolore perspiciatis modi eligendi ipsum voluptatem minus.</p>
        <button class="btn btn-primary btn-sm" v-custom-on:click="clicked">Click me</button>
        <hr>
        <div class="custom-on" v-custom-on:mousemove="mousemove" v-custom-on:mouseleave="mouseleave" />
      </div>
    </div>
  </div>
</template>

<style>
.custom-on{
  width: 100px;
  height: 100px;
  border: 1px dashed #666;
}
</style>