<template>
    <div class="card-softskill">
        <div class="image-container">
            <slot name="image"></slot>
        </div>
        <div class="text-container">
            <slot name="title"></slot>
            <slot name="description"></slot>
        </div>
    </div>
</template>

<script>
import { computed, ref } from 'vue'
export default {

}
</script>

<style lang="scss">
.card-softskill {
    width: 180px;
    height: 258px;
    background-color: #FEFEFE;
    border-radius: 8px;
    overflow: hidden;
    color: #232323;
    .image-container {
        width: 100%;
        height: 200px;
        transition: height 0.3s;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .text-container {
        padding: 8px;
        h3 {
            margin-bottom: 6px;
        }
    }
}

.card-softskill:hover {
    .image-container {
        height: 100px;
    }
}

</style>