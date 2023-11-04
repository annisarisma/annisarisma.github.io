<template>
    <div class="project-section content-container" id="project">
        <div class="header-text">
            <h1>My Amazing Project</h1>
            <p>Here are some of the projects I have worked on before, and I thoroughly enjoyed the development process during each of them. Each project represents a unique opportunity for me to apply my skills and creativity to solve real-world problems and deliver meaningful solutions. I take great pride in the work I've accomplished, and I'm committed to continuously improving and expanding my abilities as a developer to contribute effectively to future projects.</p>
        </div>
        <div class="card-container">
            <CardProject
            v-for="(project, index) in projects"
            :key="project.id"
            :index="index+1"
            :title="project.title"
            :date="project.date"
            :role="project.role"
            :image="project.image_cover"
            :id="project.id"></CardProject>
        </div>
    </div>
</template>

<script>
import Button from './button/Button.vue';
import CardProject from './card/CardProject.vue';

export default {
    components: {Button, CardProject},
    data() {
        return {
            projects: [
                {
                    id: 1,
                    title: 'Anjaman',
                    date: 'February 2022 - July 2022',
                    role: 'Fullstack Web Developer',
                    image_cover: 'cover-anjaman.png',
                },
                {
                    id: 2,
                    title: 'PLN Archive V1',
                    date: 'July 2022 - Augustus 2022',
                    role: 'Fullstack Web Developer',
                    image_cover: 'cover-archivev1.png',
                },
                {
                    id: 3,
                    title: 'Internal Audit Management System',
                    date: 'Augustus 2022 - December 2022',
                    role: 'Fullstack Web Developer',
                    image_cover: 'cover-iams.png',
                },
                {
                    id: 4,
                    title: 'PLN Archive V2',
                    date: 'Augustus 2022 - December 2022',
                    role: 'Fullstack Web Developer',
                    image_cover: 'cover-archivev2.png',
                },
                {
                    id: 5,
                    title: 'NutriHive',
                    date: 'April 2023 - May 2023',
                    role: 'UI/UX Developer',
                    image_cover: 'cover-nutrihive.png',
                },
                {
                    id: 6,
                    title: 'Halal Food',
                    date: 'September 2022 - Augustus 2023',
                    role: 'Backend Developer',
                    image_cover: 'cover-halalfood.png',
                },
                {
                    id: 7,
                    title: 'Laravel Vue API',
                    date: 'Augustus 2022 - September 2023',
                    role: 'Fullstack Developer',
                    image_cover: 'cover-laravelvueapi.png',
                },
                {
                    id: 8,
                    title: 'CSV System',
                    date: 'September 2022 - October 2023',
                    role: 'Fullstack Developer',
                    image_cover: 'cover-laravelvueapi.png',
                },
                {
                    id: 9,
                    title: 'Revamped Web Portfolio',
                    date: 'October 2023 - November 2023',
                    role: 'Frontend Developer',
                    image_cover: 'cover-revampedwebportfolio.png',
                },
            ]
        }
    },

}
</script>

<style>

</style>