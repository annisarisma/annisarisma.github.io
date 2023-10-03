<template>
  <div class="about-section content-container">
    <div class="shape-container">
        <div class="shape"></div>
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <div class="description-container">
        <h1 class="title-head">About Me</h1>
        <h3>I’am Web Developer</h3>
        <p>Hi! My name is Annisa Risma Aqilah. I was undergradued from S1 Information System Telkom University Bandung West Java</p>
        <button href="" class="filled-button">Contact Me</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.shape-container {
    display: flex;
    gap: 36px;
    width: 50%;
    height: 300px;
    overflow: hidden;
    justify-content: center;
    .shape {
        width: 40px;
        height: 328px;
        background-color: brown;
        transform: rotate(30deg);
    }
}
.description-container {
}
</style>