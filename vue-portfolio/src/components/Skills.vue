<template>
    <div class="skills-section content-container">
        <div class="description-container">
            <h1 class="title-head">My Skills</h1>
            <p>Here my skill dasdasdasdajsjdjkashdjashd asdasjhdgajsdhjas djhasdhja sdhjasdjhasbdhjasdhjasd. asdbhga svdhasvdhasvdhgasvdasddas</p>
            <button href="" class="filled-button">Contact Me</button>
        </div>
        <CardSkills/>
    </div>
</template>

<script>
import CardSkills from './card/CardSkills.vue'

export default {
    components: { CardSkills }

}
</script>

<style lang="scss" scoped>
.content-container {
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 40px;
}
</style>