<template>
    <div class="softskill-container">
        <div class="description-container">
            <h1>Softskills</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptates sapiente at deleniti, iste dolore odio quod error iure dolorum.</p>
        </div>
        <div class="card-container">
            <div class="card-softskill">
                <div class="image-container">
                    <img src="../../assets/images/softskill-image.png" alt="">
                </div>
                <div class="text-container">
                    <h3>Lorem ipsum dolor sit amet.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, illum recusandae. Rem nostrum tempora officiis exercitationem inventore, quia doloribus reprehenderit?</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scope>
.softskill-container {
    display: flex;
    .description-container {
        width: 380px;
    }
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
                height: 60%;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }
    }
}

</style>