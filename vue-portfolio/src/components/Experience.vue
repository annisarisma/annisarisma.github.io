<template>
    <div class="experience-section content-container">
        <div class="container-header">
            <div class="container-text">
                <div class="text-title">
                    <h1 class="outer-text">EXPERIENCE</h1>
                    <h1 class="absolute-text">EXPERIENCE</h1>
                </div>
                <div class="description">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
            </div>
            <div class="container-shape">
                <img src="../assets/images/shape-experience.png" alt="">
            </div>
        </div>
        <div class="container-competition">
            <h3>Competition</h3>
            <div class="card-competition-container">
                <CardCompetition v-for="(competition, index) in competitions" :key="index" :class="{ 'last-item': index === competitions.length - 1 }">
                    <template v-slot:title><h4>{{ competition.title }}</h4></template>
                    <template v-slot:date><h5>{{ competition.date }}</h5></template>
                    <template v-slot:description><p>{{ competition.description }}</p></template>
                </CardCompetition>
            </div>
        </div>
        <div class="container-competition">
            <h3>Organization</h3>
            <div class="card-competition-container">
                <CardOrganization v-for="(organization, index) in organizations" :key="index" :class="{ 'last-item': index === organizations.length - 1 }">
                    <template v-slot:title><h4>{{ organization.title }}</h4></template>
                    <template v-slot:date><h5>{{ organization.date }}</h5></template>
                    <template v-slot:list>
                        <ul>
                            <li v-for="list in organization.lists">{{ list.description }}</li>
                        </ul>
                    </template>
                </CardOrganization>
            </div>
        </div>
        <div class="container-competition">
            <h3>Working</h3>
            <div class="card-competition-container">
                <CardOrganization v-for="(organization, index) in organizations" :key="index" :class="{ 'last-item': index === organizations.length - 1 }">
                    <template v-slot:title><h4>{{ organization.title }}</h4></template>
                    <template v-slot:date><h5>{{ organization.date }}</h5></template>
                    <template v-slot:list>
                        <ul>
                            <li v-for="list in organization.lists">{{ list.description }}</li>
                        </ul>
                    </template>
                </CardOrganization>
            </div>
        </div>
    </div>
</template>

<script>
import CardCompetition from './card/CardCompetition.vue';
import CardOrganization from './card/CardOrganization.vue';

export default {
    components: { CardCompetition, CardOrganization },
    data() {
        return {
            competitions: [
                {title: '20th Finalist GEMASTIK', date: '20 July 2022 - 14 Oct 2022', description: 'Lorem Ipsum is simply dummy text of the printing and when typesetting industry.'},
                {title: '4th Finalist UNITY', date: '20 July 2022 - 14 Oct 2022', description: 'Lorem Ipsum is simply dummy text of the printing and when typesetting industry.'},
                {title: '20th Finalist GEMASTIK', date: '20 July 2022 - 14 Oct 2022', description: 'Lorem Ipsum is simply dummy text of the printing and when typesetting industry.'},
                {title: '20th Finalist GEMASTIK', date: '20 July 2022 - 14 Oct 2022', description: 'Lorem Ipsum is simply dummy text of the printing and when typesetting industry.'},
            ],
            organizations: [
                {title: 'BPMSI', date: '20 July 2022 - 14 Oct 2022', lists: [{description: 'Lorem Ipsum is simply dummy text of the printing and when typesetting industry.'}, {description: 'List 2'}, {description: 'List 3'},]},
                {title: 'BPMSI', date: '20 July 2022 - 14 Oct 2022', lists: [{description: 'Lorem Ipsum is simply dummy text of the printing and when typesetting industry.'}, {description: 'List 2'}, {description: 'List 3'},]},
                {title: 'BPMSI', date: '20 July 2022 - 14 Oct 2022', lists: [{description: 'Lorem Ipsum is simply dummy text of the printing and when typesetting industry.'}, {description: 'List 2'}, {description: 'List 3'},]},
                {title: 'BPMSI', date: '20 July 2022 - 14 Oct 2022', lists: [{description: 'Lorem Ipsum is simply dummy text of the printing and when typesetting industry.'}, {description: 'List 2'}, {description: 'List 3'},]},
                {title: 'BPMSI', date: '20 July 2022 - 14 Oct 2022', lists: [{description: 'Lorem Ipsum is simply dummy text of the printing and when typesetting industry.'}, {description: 'List 2'}, {description: 'List 3'},]},
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
.experience-section {
    flex-direction: column;
    justify-content: start;
    margin-top: 120px;
    .container-header {
        position: relative;
        margin-bottom: 120px;
        .container-text {
            .text-title {
                position: relative;
                .outer-text {
                    -webkit-text-stroke: 1px #FEFEFE; /* Lebar dan warna tepi teks (misalnya, hitam) */
                    color: transparent;
                    font-size: 180px;
                }
                .absolute-text {
                    font-size: 40px;
                    bottom: 8px;
                    position: absolute;
                }
            }
            .description {
                margin-top: 20px;
                width: 40%;
            }
        }
        .container-shape {
            position: absolute;
            right: 0px;
            bottom: -140px;
            z-index: -100;
        }

    }
    .container-competition {
        margin-top: 80px;
        width: 100%;
        h3 {
            width: max-content;
            padding: 12px 0px;
            border-bottom: solid 1px #FEFEFE;
        }
        
        .card-competition-container {
            margin-top: 20px;
            display: flex;
            gap: 20px;
            width: 100%;
            padding-bottom: 20px;
            overflow-x: scroll;
        }
        ::-webkit-scrollbar {
            height: 6px;
        }
        ::-webkit-scrollbar-track {
            box-shadow: inset 0 0 5px rgb(20, 134, 124); 
            border-radius: 10px;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: #F4143D; 
            border-radius: 8px;
            min-width: 20px;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            background: #b30000; 
        }

    }
}
</style>