<script>
export default {
    name: 'Card',
    props: {
        card: Object
    }
}
</script>


<template>
    <div class="card">
        <img :src="card.image" alt="cat">
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
        margin-left: 15px;
    }
    .card:first-child{
        margin-left: 0;
    }
    .card:hover{
        box-shadow: 0px 5px 48px #666;
        transition: box-shadow .5s;
        cursor: pointer;
    }
    .card img {
        width: 100%;
        height: 100%;
    }
</style>
