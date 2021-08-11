<script>
import GameCards from './components/GameCards.vue';
import Failure from './components/Failure.vue';
import Celebrate from './components/Celebrate.vue';

export default {
    name: 'App',
    components: {
        GameCards,
        Failure,
        Celebrate
    },
    data() {
        return {
            activeComponent: 'GameCards'
        }
    }
}
</script>


<template>
    <transition-group name="slide-container" mode="out-in">
        <component 
            key="main-component"
            :is="activeComponent"
            @activeCorrectEvent="activeComponent = $event"
        ></component>
        <canvas id="canvas" key="canvas" v-show="activeComponent == 'Celebrate'"/>
    </transition-group>
</template>

<style>
    body{
        font-family: sans-serif;
    }
    .slide-container-enter{
    }
    .slide-container-enter-active{
        animation: slide-in .3s ease-out forwards;
    }
    .slide-container-leave{
    }
    .slide-container-leave-active{
        animation: slide-out .3s ease-out forwards;
    }
    @keyframes slide-in {
        from{
            transform: translateX(-1000px);
        }
        to{
            transform: translateX(0px);
        }
    }
    @keyframes slide-out {
        from{
            transform: translateX(0px);
        }
        to{
            transform: translateX(1000px);
        }
    }
</style>
