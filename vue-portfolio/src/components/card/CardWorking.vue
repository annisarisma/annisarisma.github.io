<template>
    <div class="card-working">
        <div class="description-container">
            <div class="header">
                <h3>{{ title }}</h3>
                <p>{{ date }}</p>
                <ButtonOutline :title="'View project'"></ButtonOutline>
            </div>
        </div>
        <div class="image-container">
            <!-- <img src="../../assets/images/working-image.png" alt=""> -->
            <img :src="require('../../assets/images/' + image)">
        </div>
        <div class="shadow"></div>
    </div>
</template>

<script>
import ButtonOutline from '../button/ButtonOutline.vue';

export default {
    components: { ButtonOutline },
    props: {
        title: String,
        image: String,
        date: String,
    }
}
</script>

<style>

</style>