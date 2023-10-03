<template>
  <div class="home-section content-container">
    <div class="description-container">
        <h1>Annisa Risma Aqilah</h1>
        <p>Web Application Developer Enthusiast</p>
        <div class="icon-container">
            <font-awesome-icon icon="fa-brands fa-github" class="icon"/>
            <font-awesome-icon icon="fa-brands fa-linkedin" class="icon"/>
            <font-awesome-icon icon="fa-brands fa-instagram" class="icon"/>
        </div>
        <button href="" class="filled-button">Read More</button>
    </div>
    <div class="image-container">
        <img src="../assets/images/photo-formal.png" alt="photo-formal" class="photo-formal">
        <img src="../assets/images/shape-red.png" alt="shape-red" class="shape-red">
        <img src="../assets/images/shape-orange.png" alt="" class="shape-orange">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.content-container {
    height: 50rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px 280px;
    .description-container {
        width: 40%;
        text-align: left;
        color: white;
        h1 {
            width: 236px;
            margin-bottom: 20px;
        }
        .icon-container {
            display: flex;
            width: 100%;
            gap: 20px;
            margin-top: 12px;
        }
    }

    .image-container {
        width: 40%;
        position: relative;
        .shape-red {
            background-color: transparent;
            position: absolute;
            right: 0;
            bottom: 0;
            z-index: -100;
        }
        .shape-orange {
            background-color: transparent;
            position: absolute;
            left: 68px;
            bottom: -24px;
        }
        .photo-formal {
            background-color: transparent;
        }
    }
}


</style>