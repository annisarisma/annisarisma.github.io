<template>
    <div class="card-working">
        <p class="date">{{ date }}</p>
        <div class="description-container">
            <div class="header">
                <h3>{{ title }}</h3>
                <p>{{ place }}</p>
                <Button :title="'View project'" :routername="'ProjectDetail'" :id="id"></Button>
            </div>
        </div>
        <div class="image-container">
            <img :src="require('../../assets/images/' + image)">
        </div>
        <div class="shadow"></div>
    </div>
</template>

<script>
import ButtonOutline from '../button/ButtonOutline.vue';
import Button from '../button/Button.vue';

export default {
    components: { ButtonOutline, Button },
    props: {
        title: String,
        image: String,
        date: String,
        id: String,
        place: String
    }
}
</script>

<style>

</style>