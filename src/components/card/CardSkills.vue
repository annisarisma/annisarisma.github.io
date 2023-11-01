<template>
    <div class="card-hardskill">
        <div class="image-hardskill-container">
            <slot name="image"></slot>
        </div>
        <slot name="title"></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.image-hardskill-container {
    width: 60px;
    height: 60px;
    margin-bottom: 8px;
    img {
        background: transparent;
        width: 100%;
        object-fit: cover;
    }
}
</style>