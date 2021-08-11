<script>
export default {
    name: 'DefaultCard'
}
</script>


<template>
    <div class="card">
    </div>
</template>

<style scoped>
    .card{
        width: 200px;
        height: 232px;
        border-radius: 6px;
        border: 1px solid #666;
        background-color: purple;
        transition: box-shadow .5s;
        background-image: url('../assets/default.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        box-shadow: 0px 9px 55px #666;
    }
    .card:hover{
        cursor: pointer;
    }
</style>
