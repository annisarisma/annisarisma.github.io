<template>
    <div class="card-container">
        <div class="card-softskill">
            <div class="image-container">
                <slot name="image"></slot>
            </div>
            <div class="text-container">
                <slot name="title"></slot>
                <slot name="description"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, ref } from 'vue'
export default {

}
</script>

<style lang="scss" scope>
.card-container {
    display: flex;
    .card-softskill {
        width: 180px;
        height: 260px;
        background-color: red;
        border-radius: 8px;
        overflow: hidden;
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
}

.card-softskill:hover {
    .image-container {
        height: 100px;
    }
}

</style>