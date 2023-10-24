<template>
    <div class="project-section content-container">
        <div class="header-text">
            <h1>My Amazing Project</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and when typesetting industry. Lorem Ipsum is simply dummy text of the printing and when typesetting industry.</p>
        </div>
        <div class="card-container">
            <div class="card-project" @mouseover="{cardHover = true;}" @mouseleave="{cardHover = false;}" :class="{'hover': cardHover}">
                <div class="header-text">
                    <div class="title-text">
                        <h1>01</h1>
                        <p>Feb 2022 - July 2022</p>
                    </div>
                    <div class="description-text">
                        <h3>ANJAMAN</h3>
                        <p>Fullstack Web Application Development</p>
                    </div>
                </div>
                <div class="image-container">
                    <img src="../assets/images/default.png" alt="">
                </div>
                <p class="date-hover">Feb 2022 - July 2022</p>
                <div class="button-container">
                    <Button>
                        <template v-slot:title>Read more</template>
                    </Button>
                </div>
            </div>
            <div class="card-project">
                <div class="header-text">
                    <div class="title-text">
                        <h1>01</h1>
                        <p>Feb 2022 - July 2022</p>
                    </div>
                    <div class="description-text">
                        <h3>ANJAMAN</h3>
                        <p>Fullstack Web Application Development</p>
                    </div>
                </div>
                <div class="image-container">
                    <img src="../assets/images/default.png" alt="">
                </div>
                <p class="date-hover">Feb 2022 - July 2022</p>
                <div class="button-container">
                    <Button>
                        <template v-slot:title>Read more</template>
                    </Button>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import Button from './button/Button.vue';

export default {
    components: {Button},
    data() {
        return {
            cardHover: false
        }
    },

}
</script>

<style>

</style>