<template>
    <div class="skills-section content-container">
        <div class="description-container">
            <h1 class="title-head">My Skills</h1>
            <p>Here my skill dasdasdasdajsjdjkashdjashd asdasjhdgajsdhjas djhasdhja sdhjasdjhasbdhjasdhjasd. asdbhga svdhasvdhasvdhgasvdasddas</p>
            <button href="" class="filled-button">Contact Me</button>
        </div>
        <CardSkills/>
        <!-- Softskill -->
        <div class="softskill-container">
            <div class="description-container">
                <h1>Softskills</h1>
                <p>asjdhasdiasdh</p>
            </div>
            <CardSoftSkills v-for="softSkill in softSkills" :key="softSkill.title" @mouseover="{showFullText = true; indexHover = softSkill.title}" @mouseleave="{showFullText = false; indexHover = softSkill.title}">
                <template v-slot:image>
                    <img src="../assets/images/softskill-image.png" alt="">
                </template>
                <template v-slot:title>
                    <h3>Attention to Detail</h3>
                </template>
                <template v-slot:description>
                    <p>{{ showFullText && indexHover == softSkill.title ? softSkill.description : snippet }}</p>
                </template>
            </CardSoftSkills>
        </div>
    </div>
</template>

<script>
import CardSkills from './card/CardSkills.vue'
import CardSoftSkills from './card/CardSoftSkill.vue'

import { computed, ref } from 'vue'

export default {
    components: { CardSkills, CardSoftSkills },
    data() {
        return {
            softSkills: [
                {title: 'Attention to Detail', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptates sapiente at deleniti, iste dolore odio quod.', image: 'softskill-image.png'},
                {title: 'Attention to Detail 2', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptates sapiente at deleniti, iste dolore odio quod.', image: 'softskill-image.png'},
                {title: 'Attention to Detail 3', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptates sapiente at deleniti, iste dolore odio quod.', image: 'softskill-image.png'},
                {title: 'Attention to Detail 4', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptates sapiente at deleniti, iste dolore odio quod.', image: 'softskill-image.png'},
                {title: 'Attention to Detail 5', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptates sapiente at deleniti, iste dolore odio quod.', image: 'softskill-image.png'},
            ],
            showFullText: false,
            indexHover: null,
        }
    },
    // methods: {
    //     // 👇 set id
    //     showHide(id) {
    //         this.showFullText = !this.showFullText;
    //         this.indexHover = id;
    //     }
    // },
    setup() {
        let posts = ref(
            {title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptates sapiente at deleniti, iste dolore odio quod error iure dolorum."}
        )
        
        const snippet = computed(() => {
            return posts.value.title.substring(0, 20) + '...'; // Mengambil 50 karakter pertama
        });

        return { snippet };
    },

}
</script>

<style lang="scss" scoped>
.content-container {
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 40px;
    .softskill-container {
    display: flex;
        .description-container {
            width: 380px;
        }
    }
}
</style>