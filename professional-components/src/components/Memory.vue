<template>
    <div>
        <div class="memory">
            <slot name="heading" />
        </div>
        <div class="memory">
            <slot name="content" />
        </div>
        <div class="memory">
            <slot />
        </div>
        <div class="memory">
            <slot name="author">
                <h3>Deneme Slot</h3>
            </slot>
        </div>
    </div>
</template>

<script>
export default {
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