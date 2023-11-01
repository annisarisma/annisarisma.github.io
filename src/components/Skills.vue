<template>
    <div class="skills-section content-container">
        <div class="description-container">
            <h1 class="title-head">My Skills</h1>
            <p>I believe that skills can be refined and continuously acquired when pursued with passion. I'm delighted to have the opportunity to engage in a field filled with such capabilities. Here are the skills I have.</p>
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
                <p>In the dynamic world of web design and development, technical expertise is undoubtedly vital, but softskills are equally crucial. Here are some key soft skills that define my approach to web development.</p>
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
                        <p>{{ showFullText && indexHover == softSkill.title ? softSkill.description : limitWords(softSkill.description, 5) }}</p>
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
                {title: 'HTML', image: 'html-logo.png'},
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
                {title: 'Xampp', image: 'xampp-logo.png'},
            ],
            softSkills: [
                {title: 'Attention to Detail', description: 'I possess a strong attention to detail, ensuring that even the smallest aspects of a project are thoroughly considered and refined for quality and accuracy.', image: 'attentiontodetail.jpg'},
                {title: 'Critical Thinking', description: 'My critical thinking skills enable me to analyze complex problems from multiple angles, allowing for effective decision-making and innovative solutions.', image: 'criticalthinking.jpg'},
                {title: 'Problem Solving', description: 'I excel in problem-solving. Identify issues, evaluate alternatives, and implement effective solutions, contributing to project success.', image: 'problemsolving.jpg'},
                {title: 'Adaptability', description: 'I am highly adaptable, readily embracing change and adjusting to new circumstances, which ensures flexibility in various work environments.', image: 'adaptability.jpg'},
                {title: 'Fast Learner', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptates sapiente at deleniti, iste dolore odio quod.', image: 'fastlearner.jpg'},
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
    methods: {
        limitWords(text, wordLimit) {
            const words = text.substring(0, 20) + '...';

            return words;
        }
    }

}
</script>

<style lang="scss">
.skills-section {
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
        .description-container {
            width: 100%;
            padding: 0px 20px;
        }
        .card-container {
            margin: 0px 20px;
            gap: 20px;
            width: 80%;
            display: flex;
            justify-content: space-evenly;
        }
    }
}
</style>