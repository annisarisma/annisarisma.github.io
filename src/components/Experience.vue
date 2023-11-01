<template>
    <div class="experience-section content-container">
        <div class="container-header">
            <div class="container-text" data-aos="fade-right">
                <div class="text-title">
                    <h1>EXPERIENCE</h1>
                    <p>Throughout my journey, I've gained a wealth of experience, from active involvement in college organizations, winning competitions, and completing internships companies. These experiences have been extraordinary opportunities for me.</p>
                </div>
                <div class="button-container">
                    <Button :title="'Working'" :hash="'#working'"></Button>
                    <Button :title="'Competition'" :hash="'#competition'"></Button>
                    <Button :title="'Organization'" :hash="'#organization'"></Button>
                </div>
            </div>
            <div class="container-image" data-aos="fade-up">
                <img src="../assets/images/image-experience.png">
            </div>
        </div>

        <!-- Working -->
        <div class="container-experience" id="working">
            <h3 class="title-text-border" data-aos="fade-right">Working</h3>
            <div class="content-experience">
                <div class="card-working-container">
                    <CardWorking
                    v-for="(job, index) in jobs"
                    :title="job.title" 
                    :date="job.place" 
                    :image="job.image"
                    data-aos="fade-up"></CardWorking>
                </div>
            </div>
        </div>

        <!-- Competition -->
        <div class="container-experience" id="competition">
            <h3 class="title-text-border">Competition</h3>
            <div class="content-experience">
                <div class="card-competition-container">
                    <CardCompetition
                    v-for="(competition, index) in competitions"
                    :title="competition.title"
                    :date="competition.date"
                    ></CardCompetition>
                </div>
                <div class="right-container">
                    <h1>Successfully achieving milestones throughout my academic journey.</h1>
                    <p>My academic journey has been a fulfilling and enriching experience filled with dedication, hard work, and the pursuit of excellence. I take great pride in the opportunity I've had to achieve victory in several competitions. Winning these competitions has been a source of immense satisfaction and a testament to my dedication and hard work.</p>
                    <ButtonOutline :title="'View competition project'" :hash="'#\project'" class="mt-8"></ButtonOutline>
                </div>
            </div>
        </div>

        <!-- Organization -->
        <div class="container-experience" id="organization">
            <h3 class="title-text-border">Organization</h3>
            <div class="content-experience">
                <div class="card-organization-container">
                    <CardOrganization 
                    v-for="(organization, index) in organizations" 
                    :title="organization.title" 
                    :place="organization.place" 
                    :date="organization.date"
                    :lists="organization.lists"
                    >
                    </CardOrganization>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CardCompetition from './card/CardCompetition.vue';
import CardOrganization from './card/CardOrganization.vue';
import CardWorking from './card/CardWorking.vue';
import Button from './button/Button.vue';
import ButtonOutline from './button/ButtonOutline.vue';

export default {
    components: { CardCompetition, CardOrganization, CardWorking, Button, ButtonOutline },
    data() {
        return {
            jobs: [
                {
                    title: 'Fullstack Web Application Developer (Intern)',
                    place: 'PT PLN UPP JBT',
                    image: 'logo-pln.png'
                },
                {
                    title: 'Fullstack Web Application Developer (Intern)',
                    place: 'PT PLN UPP JBT',
                    image: 'logo-kalla.png'
                },
                {
                    title: 'Fullstack Web Application Developer (Freelance)',
                    place: 'PT PLN UPP JBT',
                    image: 'logo-pln.png'
                },
            ],
            competitions: [
                {
                    title: '1st Winner of SISFOFEST UI/UX National Website Design Competition 2023', 
                    date: 'March 2023', 
                },
                {
                    title: '3rd Winner of AISC UI/UX National Mobile Application Competition 2023', 
                    date: 'December 2022', 
                },
                {
                    title: '4th Finalist of UNITY UI/UX National Competition 2023', 
                    date: 'May 2023', 
                },
                {
                    title: '20th Finalist of GEMASTIK ICT Business Competition 2022', 
                    date: 'October 2022', 
                },
            ],
            organizations: [
                {
                    title: 'Coordinator of Media and Information Commission BPMSI',
                    place: 'BPMSI Telkom University',
                    date: '20 July 2022 - 14 Oct 2022',
                    lists: [
                        {description: 'Managed communication strategies, content creation, and digital presence for the organization (Bumper, VB, Social Media Content) using adobe.'},
                        {description: 'Collaborated closely with various departments to ensure the smooth execution of commission.'},
                        {description: 'Delivered a relevant and compelling information through social media post such as Instagram and Line OA.'},
                        {description: 'Contributed as a leader of Media and Information Commission at the BPMSI,'},
                    ]
                },
                {
                    title: 'Staff of Logistic, Publication, Decoration, and Documentation Division',
                    place: 'Panitia Pemilihan Umum HMSI Telkom University',
                    date: 'November 2021 - January 2022',
                    lists: [
                        {description: 'Contributed as a staff of Logistic, Publication, Decoration (Design), and Documentation during Pemilihan Umum HMSI 2022.'},
                        {description: 'Collaborated closely with various departments to ensure the smooth execution of logistics and publication'},
                        {description: 'Created a division needs such as bumper, poster, VB, platform meeting, and social media content.'},
                    ]
                },
                {
                    title: 'Expert Staff of Development Commission BPMSI',
                    place: 'BPMSI Telkom University',
                    date: 'February 2021 - February 2022',
                    lists: [
                        {description: 'Expert Staff of Development Commission BPMSI'},
                        {description: 'Expert Staff of Development Commission BPMSI'},
                        {description: 'Supervised Human Resource Development, Entrepreneur, and Caderization Division of Himpunan - Mahasiswa Sistem Informasi'},
                    ]
                },
            ],
        }
    },
}
</script>

<style lang="scss">
.experience-section {
    flex-direction: column;
    justify-content: start;
    margin-top: 220px;
    .container-header {
        display: flex;
        margin-bottom: 20px;
        justify-content: space-between;
        .container-text {
            width: 50%;
            .text-title {
                p {
                    margin-top: 12px;
                }
            }
            .button-container {
                margin-top: 20px;
                display: flex;
                gap: 20px;
                .button {
                    width: max-content;
                }
            }
        }
        .container-image {
            width: 45%;
            img {
                width: 100%;
            }
        }

    }
    .container-experience {
        width: 100%;
        margin-top: 180px;
    }
}
</style>