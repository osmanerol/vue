<template>
    <div>
        <h1>New Memory</h1>        
    </div>
</template>

<script>
export default {
    activated() {
        console.log('activated');
    },
    deactivated() {
        console.log('de-activated');
    }
}
</script>

<style lang="scss" scoped>
div.memory{
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px #666;
    padding: 20px 20px;
    margin-top: 20px;
}
</style>