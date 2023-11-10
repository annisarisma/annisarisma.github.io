<template>
    <a @click="togglemodal" class="button button-outline text-sm">Open modal</a>
    <div class="screen" v-if="showmodal" @click.self="togglemodal">
        <div class="modal-container">
            <div class="image-container">
                <img src="../../assets/images/certificate/pln.png" alt="">
            </div>
            <div class="button-group">
                <button @click="togglemodal" class="button button-primary font-bold">Close</button>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '../button/Button.vue';

export default {
    components: { Button },
    data() {
        return {
            showmodal: false
        }
    },
    methods: {
        togglemodal() {
            this.showmodal = !this.showmodal

            const body = document.querySelector("body"); 

            if (this.showmodal === true) { 
                // Disable scroll 
                body.style.overflow = "hidden"; 
            } else { 
                // Enable scroll 
                body.style.overflow = "auto"; 
            } 
        }
    },
}
</script>

<style>

</style>