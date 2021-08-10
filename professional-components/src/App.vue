<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <div class="btn btn-primary btn-sm" @click="selectedComponent = 'author'">Author</div>
        <div class="btn btn-primary btn-sm" @click="selectedComponent = 'memory'">Memory</div>
        <div class="btn btn-primary btn-sm" @click="selectedComponent = 'new-memory'">New Memory</div>
        <hr>
        <p>{{ selectedComponent }}</p>
        <hr>
        <keep-alive>
          <component :is="selectedComponent">
            <h1 slot="heading">Title</h1>
            <p slot="content">Body</p>
            <p>No Slot</p>
          </component>
        </keep-alive>
        <hr>
        <component :is="selectedComponent">
          <h1 slot="heading">Title</h1>
          <p slot="content">Body</p>
          <p>No Slot</p>
        </component>
        <!--
        <memory>
          <h1 slot="heading">Title</h1>
          <p slot="content">Body</p>
          <p>No Slot</p>
        </memory>
        -->
      </div>
    </div>
  </div> 
</template>

<script>
import Author from './components/Author.vue';
import Memory from './components/Memory.vue';
import NewMemory from './components/NewMemory.vue';

export default {
  components: {
    Author,
    Memory,
    NewMemory
  },
  data() {
    return {
      selectedComponent: "memory"
    }
  }
}
</script>
