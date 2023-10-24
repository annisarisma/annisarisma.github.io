<template>
    <div class="skills-section content-container">
        <div class="description-container">
            <h1 class="title-head">My Skills</h1>
            <p>Here my skill dasdasdasdajsjdjkashdjashd asdasjhdgajsdhjas djhasdhja sdhjasdjhasbdhjasdhjasd. asdbhga svdhasvdhasvdhgasvdasddas</p>
            <button href="" class="filled-button">Contact Me</button>
        </div>
        <div class="card-container-hard">
            <CardSkills v-for="hardSkill in hardSkills">
                <template v-slot:image>
                    <img :src="require('@/assets/images/' + hardSkill.image)">
                </template>
                <template v-slot:title>
                    <h4>{{ hardSkill.title }}</h4>
                </template>
            </CardSkills>

        </div>
        <!-- Softskill -->
        <div class="softskill-container">
            <div class="description-container">
                <h1>Softskills</h1>
                <p>In the dynamic world of web design and development, technical expertise is undoubtedly vital, but soft skills are equally crucial. Here are some key soft skills that define my approach to web development.</p>
            </div>
            <div class="card-container">
                <CardSoftSkills v-for="softSkill in softSkills" :key="softSkill.title" @mouseover="{showFullText = true; indexHover = softSkill.title}" @mouseleave="{showFullText = false; indexHover = softSkill.title}">
                    <template v-slot:image>
                        <img :src="require('@/assets/images/' + softSkill.image)">
                    </template>
                    <template v-slot:title>
                        <h4>{{ softSkill.title }}</h4>
                    </template>
                    <template v-slot:description>
                        <p>{{ showFullText && indexHover == softSkill.title ? softSkill.description : snippet }}</p>
                    </template>
                </CardSoftSkills>
            </div>
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
            hardSkills: [
                {title: 'HTML', image: 'github.png'},
                {title: 'CSS', image: 'css-logo.png'},
                {title: 'SASS', image: 'sass-logo.png'},
                {title: 'JavaScript', image: 'js-logo.png'},
                {title: 'JQuery', image: 'jquery-logo.png'},
                {title: 'AJAX', image: 'ajax-logo.png'},
                {title: 'PHP', image: 'php-logo.png'},
                {title: 'Vue', image: 'vue-logo.png'},
                {title: 'Bootstrap', image: 'bootstrap-logo.png'},
                {title: 'Tailwind', image: 'tailwind-logo.png'},
                {title: 'Laravel', image: 'laravel-logo.png'},
                {title: 'MySQL', image: 'mysql-logo.png'},
                {title: 'Postman', image: 'postman-logo.png'},
                {title: 'JMeter', image: 'jmeter-logo.png'},
                {title: 'Git', image: 'git-logo.png'},
                {title: 'GitHub', image: 'github-logo.png'},
                {title: 'Figma', image: 'figma-logo.png'},
                {title: 'Jira', image: 'jira-logo.png'},
                {title: 'Notion', image: 'notion-logo.png'},
                {title: 'VSCode', image: 'vscode-logo.png'},
                {title: 'Adobe Photoshop', image: 'photoshop-logo.png'},
                {title: 'Adobe Premiere', image: 'premiere-logo.png'},
                {title: 'Adobe After Effect', image: 'ae-logo.png'},
                {title: 'Adobe After Effect', image: 'html-logo.png'},
            ],
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
        background-color: #232323;
        border-radius: 8px;
        width: 100%;
        padding: 20px 0px;
        overflow: hidden;
        .description-container {
            width: 20%;
            padding: 0px 20px;
        }
        .card-container {
            margin: 0px 20px;
            width: 80%;
            display: flex;
            justify-content: space-evenly;
        }
    }
}
</style>