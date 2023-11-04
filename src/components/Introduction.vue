<template>
  <div class="home-section content-container">
    <div class="description-container" data-aos="fade-right">
        <h1>Annisa Risma Aqilah</h1>
        <p>I'm a dedicated and detail-oriented individual with a strong work ethic, who thrives on precision and impeccable organization. As a full-stack developer, I bring these qualities into every project, ensuring that every line of code and every element of design is executed with meticulous attention.</p>
        <div class="icon-container">
            <a href="https://github.com/annisarisma">
                <font-awesome-icon icon="fa-brands fa-github" class="icon"/>
            </a>
            <a href="https://www.linkedin.com/in/annisarisma/">
                <font-awesome-icon icon="fa-brands fa-linkedin" class="icon"/>
            </a>
            <a href="https://www.instagram.com/aqilah117/">
                <font-awesome-icon icon="fa-brands fa-instagram" class="icon"/>
            </a>
        </div>
        <div class="button-group">
            <Button :title="'Read more'"></Button>
            <ButtonOutline :title="'View my project'"></ButtonOutline>
        </div>
    </div>
    <div class="image-splash-container" data-aos="fade-left">
        <div class="image-container">
            <img src="../assets/images/photo-formal.png" alt="photo-formal" class="photo-formal">
        </div>
        <img src="../assets/images/shape-red.png" alt="shape-red" class="shape-red">
        <img src="../assets/images/shape-orange.png" alt="" class="shape-orange">
    </div>
  </div>
</template>

<script>
import Button from './button/Button.vue';
import ButtonOutline from './button/ButtonOutline.vue';


export default {
    components: { Button, ButtonOutline }
}
</script>

<style lang="scss">


</style>