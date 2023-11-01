<template>
  <div class="about-section content-container" id="about">
    <div class="shape-container">
        <div class="shape"></div>
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <div class="description-container">
        <h1 class="title-head">About Me</h1>
        <h3>I'am Web Developer</h3>
        <p>Hi! My name is Annisa Risma Aqilah. I have a solid foundation in both front-end and back-end technologies, and I love turning creative concepts into user-friendly applications.</p>
        <button href="" class="filled-button">Contact Me</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.about-section {
  padding: 80px 0px;
  margin-bottom: 120px;
}
.shape-container {
  display: flex;
  gap: 36px;
  width: 40%;
  height: 280px;
  overflow: hidden;
  justify-content: center;
  .shape {
      width: 40px;
      height: 328px;
      background-color: brown;
      transform: rotate(30deg);
  }
}
</style>