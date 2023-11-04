<template>
    <div class="card-project">
        <div class="header-text">
            <div class="title-text">
                <h1>{{ index }}</h1>
                <p>{{ date }}</p>
            </div>
            <div class="description-text">
                <h3>{{ title }}</h3>
                <p>{{ role }}</p>
            </div>
        </div>
        <div class="image-container">
            <img :src="require('../../assets/images/' + image)" alt="">
        </div>
        <p class="date-hover">{{ date }}</p>
        <div class="button-container">
            <Button :title="'Read more'" :routername="'ProjectDetail'" :id="id">
            </Button>
        </div>
    </div>
</template>

<script>
import Button from '../button/Button.vue';

export default {
    components: {Button},
    props: {
        index: String,
        date: String, 
        title: String,
        role: String,
        id: String,
        image: String
    },

}
</script>

<style>

</style>