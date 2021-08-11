<script>
    export default {
        name: 'Failure',
        methods: {
            newGame() {
                this.$emit('activeCorrectEvent', 'GameCards');
            }
        }
    }
</script>


<template>
    <div class="container">
        <h1>Bilemediniz.</h1>
        <button @click="newGame">Yeni Oyun</button>
    </div>
</template>

<style scoped>
    .container{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: darkred;
    }
    .container h1{
        text-align: center;
        font-size: 333%;
        color: #fff;
    }
    .container button{
        width: 200px;
        background-color: #fff;
        color: darkred;
        border: 1px solid brown;
        height: 48px;
        border-radius: 5px;
        outline: none;
        font-size: 16px;
        transition: all .5s;
    }
    .container button:hover{
        cursor: pointer;
        background-color: darkgreen;
        color: #fff;
        transition: all .5s;
    }
</style>
