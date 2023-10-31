<template>
    <div class="project-section content-container">
        <div class="header-text">
            <h1>My Amazing Project</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and when typesetting industry. Lorem Ipsum is simply dummy text of the printing and when typesetting industry.</p>
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
                description: 'Anjaman" is an application designed to facilitate the sale of handwoven crafts by micro, small, and medium enterprises (UMKM) in Sumatra. It serves as a platform that connects both sellers and buyers within the realm of handwoven craftsmanship.',
                image: 'splash-anjaman.png',
                technologies: [
                    {image: 'miro-logo.png'},
                    {image: 'figma-logo.png'},
                    {image: 'visualparadigm-logo.png'},
                    {image: 'html-logo.png'},
                    {image: 'css-logo.png'},
                    {image: 'bootstrap-logo.png'},
                    {image: 'js-logo.png'},
                    {image: 'jquery-logo.png'},
                    {image: 'html-logo.png'},
                    {image: 'css-logo.png'},
                    {image: 'jquery-logo.png'},
                    {image: 'bootstrap-logo.png'},
                    {image: 'php-logo.png'},
                    {image: 'laravel-logo.png'},
                    {image: 'mysql-logo.png'},
                    {image: 'git-logo.png'},
                    {image: 'github-logo.png'},
                    {image: 'slack-logo.png'},
                ],
                icon: 'fa-list-check',
                header: 'Anjaman Web Application Development Project',
                sub_header: 'Telkom University',
                description_header: 'My fulfilling journey as a Full-Stack Developer for Anjaman has been a source of immense pride. My responsibilities extended to both front-end and back-end development, encompassing the creation of a robust and intuitive marketplace. Throughout my role in the development of Anjaman, I was entrusted with the task of optimizing its features to enhance the user experience. As a dedicated Full-Stack Developer, I delved into refining the functionalities of the platform, ensuring that it operated seamlessly for both artisans and buyers.',
                image_header: 'description-anjaman.png',
                tags: [
                    {title: 'Go to github', link: 'https://github.com/SI-RPL-2022/SI4306_A_ANJAMAN.git'},
                ],
                tasks: [
                    {list: 'Built a full-stack application for MSMEs (Micro, Small, and Medium Enterprises) that sell handwoven craft from Sumatra.'},
                    {list: 'Contributed as a full-stack developer and constructed 10 features.'},
                    {list: 'Spearheading both front-end and back-end development to create a holistic, high-performing platform for Anjaman.'},
                    {list: 'Implementing special features such as product ratings, reviews, and recommendations to elevate the quality of service.'},
                    {list: 'Within the Scrum methodology, I actively participated in sprint planning, sprint reviews.'},
                    {list: 'Designed and managed the database infrastructure'},
                    {list: 'Managed documentation and collaborated using version control. Made regular, well-documented commits, and actively engaged in code reviews to maintain code quality and team collaboration.'},
                ],
                trailer: 'trailer-investhive.mp4',
                models: [
                    {
                        title: 'Built with',
                        title_span: 'Analyzed',
                        description: 'Application development analysis for Anjaman involves a comprehensive examination of the unique needs of Sumatran artisans and potential buyers. It results in a detailed requirement document that guides the development process, ensuring the creation of a user-friendly and secure platform that empowers artisans and enriches Sumatra\'s cultural heritage.',
                        technologies: [
                            {image: 'miro-logo.png'},
                            {image: 'figma-logo.png'},
                            {image: 'visualparadigm-logo.png'},
                        ],
                        cards: [
                            {
                                title: 'User Stories',
                                description: 'user-focused descriptions of specific functionalities or features. They outline what users can do on the platform, such as listing products, searching for crafts, or making purchases. These stories help capture user requirements and guide the development process.',
                                image: 'model-anjaman-userstories.png'
                            },
                            {
                                title: 'Backlog',
                                description: 'The backlog is a prioritized list of tasks and features that need to be implemented in the Anjaman application. It\'s a dynamic document that evolves as new requirements emerge, ensuring that the team works on the most valuable features first.',
                                image: 'model-anjaman-backlog.png'
                            },
                            {
                                title: 'Sequence Diagram',
                                description: 'Sequence diagrams in Anjaman illustrate the interactions and flow of information between different components of the application. They visually represent how users and the system interact, helping in understanding the behavior and functionality of the platform.',
                                image: 'model-anjaman-sequence.png'
                            },
                        ]
                    },
                    {
                        title: 'Dive Inside',
                        title_span: 'Frontend',
                        description: 'This journey ventures deeply into the domain of frontend development, transforming designs into code. The code produced aligns precisely with the previously established UI design, ensuring seamless execution and functionality.',
                        technologies: [
                            {image: 'figma-logo.png'},
                            {image: 'html-logo.png'},
                            {image: 'css-logo.png'},
                            {image: 'bootstrap-logo.png'},
                            {image: 'js-logo.png'},
                            {image: 'jquery-logo.png'},
                        ],
                        cards: [
                            {
                                title: 'Figma to Code',
                                description: 'Transforming Design elements into HTML and CSS code, ensuring pixel-perfect accuracy and responsiveness across different screen sizes and devices. The goal was to bring the beautifully crafted UI to life, creating an engaging and user-friendly experience.',
                                image: 'model-anjaman-figmatocode.png'
                            },
                            {
                                title: 'Assets and Libraries',
                                description: 'Streamlining Resources for Efficiency To optimize the development process, I efficiently managed assets and libraries required for the Anjaman project. This involved organizing and integrating essential resources such as data tables, Bootstrap, and jQuery libraries.',
                                image: 'model-anjaman-assetsandlibraries.png'
                            },
                            {
                                title: 'Layouting',
                                description: 'Structuring Pages for MVC Harmony As part of the Anjaman project, within the Model-View-Controller (MVC) architecture of the Laravel framework. Organized and managed the frontend (Views) to align with the application\'s logic and data handling (Models and Controllers).',
                                image: 'model-anjaman-layouting.gif'
                            },
                        ],
                    },
                    {
                        title: 'Built Through',
                        title_span: 'Backend',
                        description: 'In the development journey of Anjaman, I took charge of constructing the backend infrastructure using the Laravel framework. Developed and implemented the core functionalities, and data management.',
                        technologies: [
                            {image: 'html-logo.png'},
                            {image: 'css-logo.png'},
                            {image: 'jquery-logo.png'},
                            {image: 'bootstrap-logo.png'},
                            {image: 'php-logo.png'},
                            {image: 'laravel-logo.png'},
                            {image: 'mysql-logo.png'},
                            {image: 'git-logo.png'},
                            {image: 'github-logo.png'},
                            {image: 'slack-logo.png'},
                        ],
                        cards: [
                            {
                                title: 'Git',
                                description: 'Code collaboration was streamlined using Git, with each commit referencing specific issues previously assigned. This approach ensured that the codebase was consistently aligned with the project\'s requirements and objectives.',
                                image: 'model-anjaman-git.png'
                            },
                            {
                                title: 'Github Issue',
                                description: 'Structured issue tracking for project enhancement of Anjaman, with issues being created based on in-depth analysis of Product Backlog Items (PBIs). ',
                                image: 'model-anjaman-githubissue.png'
                            },
                            {
                                title: 'Github Kanban',
                                description: 'Progress monitoring and workflow management were facilitated through GitHub Kanban boards. Kanban boards were employed to organize tasks, set priorities, and monitor work flow.',
                                image: 'model-anjaman-githubkanban.png'
                            },
                            {
                                title: 'Slack',
                                description: 'Slack, utilized for Communication, and progress updates, throughout the development of the Anjaman application.',
                                image: 'model-anjaman-slack.png'
                            },
                        ],
                    },
                ]
                },
                {
                    id: 2,
                    title: 'PLN Archive V1',
                    date: 'July 2022 - Augustus 2022',
                    role: 'Fullstack Web Developer',
                    image_cover: 'cover-archivev1.png',
                    description: 'PLN Archive V1 is an application meticulously designed to streamline and manage the extensive archives within PLN (Perusahaan Listrik Negara), ensuring meticulous organization across various departments and sectors of the organization.',
                    image: 'splash-anjaman.png',
                    technologies: [
                        {image: 'miro-logo.png'},
                        {image: 'figma-logo.png'},
                        {image: 'visualparadigm-logo.png'},
                        {image: 'html-logo.png'},
                        {image: 'css-logo.png'},
                        {image: 'bootstrap-logo.png'},
                        {image: 'js-logo.png'},
                        {image: 'jquery-logo.png'},
                        {image: 'html-logo.png'},
                        {image: 'css-logo.png'},
                        {image: 'bootstrap-logo.png'},
                        {image: 'php-logo.png'},
                        {image: 'laravel-logo.png'},
                        {image: 'ajax-logo.png'},
                        {image: 'mysql-logo.png'},
                        {image: 'git-logo.png'},
                        {image: 'github-logo.png'},
                        {image: 'slack-logo.png'},
                    ],
                    icon: 'fa-list-check',
                    header: 'PLN\'s Archive Web Application Development Project',
                    sub_header: 'PT PLN UPP JBT',
                    description_header: 'The journey of developing the PLN Archive project during my internship was an invaluable experience. This project aimed to create an application for PT PLN (Perusahaan Listrik Negara), Indonesia\'s state-owned electricity company, with a primary focus on optimizing their archiving and data management processes.',
                    image_header: 'description-archivev1.png',
                    tags: [
                        {title: 'Go to github', link: 'https://github.com/SI-RPL-2022/SI4306_A_ANJAMAN.git'},
                    ],
                    tasks: [
                        {list: 'Developed an Archive Management application to enhance administrative and financial processes at PT PLN.'},
                        {list: 'Contributed as a fullstack web developer and analyzed the feature to boost an effectiveness and efficiency of application.'},
                        {list: 'Successfully completed Version 1 (V.1) during internship'},
                        {list: 'Implement responsive and user-friendly web interfaces based on design specifications.'},
                        {list: 'Build and maintain the server-side logic and databases for efficient data storage and retrieval.'},
                        {list: 'Design and maintain the database schema to efficiently store and manage vast amounts of archival data.'},
                    ],
                    trailer: 'trailer-investhive.mp4',
                    models: [
                        {
                            title: 'Built with',
                            title_span: 'Analyzed',
                            description: 'The analysis phase in developing the PLN Archive V1 application involves a meticulous examination of PT PLN\'s archiving requirements, data management workflows, and organizational needs.',
                            technologies: [
                                {image: 'miro-logo.png'},
                                {image: 'figma-logo.png'},
                                {image: 'visualparadigm-logo.png'},
                                {image: 'drawio-logo.png'},
                            ],
                            cards: [
                                {
                                    title: 'Brainstorming Feature',
                                    description: 'Brainstorming feature involves a collaborative effort to identify and analyze the specific functionalities and capabilities required by PT PLN. This process gathers input from stakeholders, and development teams to define the scope and purpose of the application.',
                                    image: 'model-archivev1-brainstormingfeature.png'
                                },
                                {
                                    title: 'User Acceptance',
                                    description: 'User acceptance determine whether they meet PT PLN\'s expectations and operational requirements. Ensured that the application aligns with their workflows and usability expectations.',
                                    image: 'model-archivev1-useracceptance.png'
                                },
                                {
                                    title: 'Database Design',
                                    description: 'Database design for PLN Archive V1 encompasses the creation of a structured and efficient database schema.  It involves modeling the database tables, relationships, and data storage methodologies.',
                                    image: 'model-archivev1-databasedesign.png'
                                },
                            ]
                        },
                        {
                            title: 'Dive Inside',
                            title_span: 'Frontend',
                            description: 'This journey ventures deeply into the domain of frontend development, transforming designs into code. The code produced aligns precisely with the previously established UI design, ensuring seamless execution and functionality.',
                            technologies: [
                                {image: 'figma-logo.png'},
                                {image: 'html-logo.png'},
                                {image: 'css-logo.png'},
                                {image: 'bootstrap-logo.png'},
                                {image: 'js-logo.png'},
                                {image: 'jquery-logo.png'},
                            ],
                            cards: [
                                {
                                    title: 'Figma to Code',
                                    description: 'Figma to Code for PLN Archive V1 involves the transformation of UI/UX designs from Figma into functional HTML, CSS, and other necessary web development code.',
                                    image: 'model-archivev1-figmatocode.png'
                                },
                                {
                                    title: 'Assets and Libraries',
                                    description: 'Assets and Libraries Management for PLN Archive V1 encompasses the organization and integration of essential assets and libraries required for application development.',
                                    image: 'model-archivev1-assetsandlibraries.png'
                                },
                                {
                                    title: 'Layouting',
                                    description: ' Structural organization of pre-designed pages within the Laravel MVC (Model-View-Controller) framework.',
                                    image: 'model-archivev1-layouting.gif'
                                },
                            ],
                        },
                        {
                            title: 'Built Through',
                            title_span: 'Backend',
                            description: 'Backend development for the PLN Archive V1 application involves the creation and implementation of the server-side components and functionalities that power the application.',
                            technologies: [
                                {image: 'php-logo.png'},
                                {image: 'laravel-logo.png'},
                                {image: 'mysql-logo.png'},
                            ],
                            cards: [
                                {
                                    title: 'MVC Laravel',
                                    description: 'The development of PLN Archive V1 adheres to the Model-View-Controller (MVC) architectural pattern in the Laravel framework. This approach segregates the application\'s components into distinct layers',
                                    image: 'model-archivev1-mvclaravel.png'
                                },
                                {
                                    title: 'Optimized Feature',
                                    description: 'Optimization focuses on enhancing the functionallity feature, and addressing performance issues, ensuring it performs efficiently and meets user expectations that already defined before.',
                                    image: 'model-archivev1-optimizedfeature.gif'
                                },
                                {
                                    title: 'REST Concept',
                                    description: 'Progress monitoring and workflow management were facilitated through GitHub Kanban boards. Kanban boards were employed to organize tasks, set priorities, and monitor work flow.',
                                    image: 'model-anjaman-githubkanban.png'
                                },
                            ],
                        },
                        {
                            title: 'Forge a Streamlined',
                            title_span: 'Development Process',
                            description: 'An organized and efficient development process is essential for successful application development. In this journey, we illustrate how meticulous planning and well-coordinated steps contribute to achieving better outcomes in application development.',
                            technologies: [
                                {image: 'git-logo.png'},
                                {image: 'github-logo.png'},
                            ],
                            cards: [
                                {
                                    title: 'Git',
                                    description: 'Enables to maintain a well-structured and organized codebase of PLN\'s Archive V1. Using Git commits that reference previously assigned issues',
                                    image: 'model-archivev1-git.png'
                                },
                                {
                                    title: 'Github Issue',
                                    description: 'create GitHub issues based on our detailed analysis of Product Backlog Items (PBIs). These issues serve as a central hub for tracking progress, discussing specific tasks, and monitoring our development roadmap.',
                                    image: 'model-archivev1-githubissue.png'
                                },
                                {
                                    title: 'Github Kanban',
                                    description: 'Code review is an integral part of our development process for PLN Archive V1. Confirming that the application\'s features function as expected and meet the established quality benchmarks.',
                                    image: 'model-archivev1-codereview.png'
                                },
                            ],
                        },
                    ]
                },
                {
                    id: 3,
                    title: 'Internal Audit Management System',
                    date: 'Augustus 2022 - December 2022',
                    role: 'Fullstack Web Developer',
                    image_cover: 'cover-iams.png',
                    description: 'Internal Audit Management System (IAMS) is an application designed to support internal audits for the Kalla Group company. It\'s customized to meet the specific needs of the organization and enhances the way internal audits are conducted and managed.',
                    image: 'splash-iams.png',
                    technologies: [
                        {image: 'miro-logo.png'},
                        {image: 'figma-logo.png'},
                        {image: 'html-logo.png'},
                        {image: 'css-logo.png'},
                        {image: 'bootstrap-logo.png'},
                        {image: 'js-logo.png'},
                        {image: 'jquery-logo.png'},
                        {image: 'php-logo.png'},
                        {image: 'laravel-logo.png'},
                        {image: 'ajax-logo.png'},
                        {image: 'mysql-logo.png'},
                        {image: 'git-logo.png'},
                        {image: 'github-logo.png'},
                    ],
                    icon: 'fa-list-check',
                    header: 'Internal Audit Management System Web Application',
                    sub_header: 'PT KALLA Group',
                    description_header: 'The development process of the IAMS (Internal Audit Management System) involved a systematic approach to meet the specific needs of the Kalla Group. It began with a thorough analysis of the company\'s internal audit requirements. After defining the scope, the team designed a user-friendly interface and built the necessary features to support internal audit operations.',
                    image_header: 'description-iams.png',
                    tags: [
                        {title: 'Go to page', link: ''},
                    ],
                    tasks: [
                        {list: 'Built a web based application using the SCRUM methodology.'},
                        {list: 'Built a website-based application with HTML, CSS, SASS, Bootstrap, AJAX, JQuery, JavaScript, PHP, Laravel, and MySQL.'},
                        {list: 'Contributed as a full-stack developer, handling both the backend and frontend development tasks.'},
                        {list: 'Developed the front-end user interface based on design specifications, ensured a user-friendly and responsive experience.'},
                        {list: 'Collaborated as a team developer using a GitHub repository.'},
                        {list: 'Collaborated with the project manager and stakeholders to provide progress updates and address any issues.'},
                        {list: 'Optimized application performance and tested functionality with QA for seamless usage.'},
                        {list: 'Successfully completed 2 sprints in a project and successfully completed 12 PBI at second sprint'},
                    ],
                    trailer: 'trailer-investhive.mp4',
                    models: [
                        {
                            title: 'Built with',
                            title_span: 'Analyzed',
                            description: 'The analysis phase in developing the IAMS application involves a requirements, data management workflows, and organizational needs.',
                            technologies: [
                                {image: 'miro-logo.png'},
                                {image: 'figma-logo.png'},
                            ],
                            cards: [
                                {
                                    title: 'Use Case Feature',
                                    description: 'Use case features in the IAMS application provide a comprehensive overview of various scenarios and functionalities, illustrating how the system interacts with users and external components.',
                                    image: 'model-iams-usecasefeature.png'
                                },
                                {
                                    title: 'User Acceptance',
                                    description: 'User acceptance determine whether they meet IAMS expectations and requirements. Ensured that the application aligns with their workflows and usability expectations.',
                                    image: 'model-iams-useracceptance.png'
                                },
                                {
                                    title: 'Analysis System',
                                    description: 'This step defines the project\'s scope, customizing IAMS to meet specific needs, revolutionizing internal audits.',
                                    image: 'model-iams-analysissystem.png'
                                },
                                {
                                    title: 'Database Design',
                                    description: 'Database design for the IAMS application enhances a structured and efficient database schema. It involves modeling the database tables, relationships, and data storage methodologies.',
                                    image: 'model-iams-databasedesign.png'
                                },
                            ]
                        },
                        {
                            title: 'Dive Inside',
                            title_span: 'Frontend',
                            description: 'This journey ventures deeply into the domain of frontend development, transforming designs into code. The code produced aligns precisely with the previously established UI design, ensuring seamless execution and functionality.',
                            technologies: [
                                {image: 'figma-logo.png'},
                                {image: 'html-logo.png'},
                                {image: 'css-logo.png'},
                                {image: 'bootstrap-logo.png'},
                                {image: 'js-logo.png'},
                                {image: 'jquery-logo.png'},
                            ],
                            cards: [
                                {
                                    title: 'Figma to Code',
                                    description: 'Figma to Code for IAMS application involves the transformation from Figma into functional HTML, CSS, and other necessary web development code.',
                                    image: 'model-iams-figmatocode.png'
                                },
                                {
                                    title: 'Assets and Libraries',
                                    description: 'Assets and Libraries Management for IAMS required for application development. Such as Datatables, Select2, JQuery, Bootstrap',
                                    image: 'model-iams-assetsandlibraries.png'
                                },
                                {
                                    title: 'Layouting',
                                    description: ' Structural organization of pre-designed pages within the Laravel MVC (Model-View-Controller) framework.',
                                    image: 'model-iams-layouting.gif'
                                },
                            ],
                        },
                        {
                            title: 'Built Through',
                            title_span: 'Backend',
                            description: 'Backend development for the IAMS application involves the creation and implementation of the server-side components and functionalities that power the application.',
                            technologies: [
                                {image: 'php-logo.png'},
                                {image: 'laravel-logo.png'},
                                {image: 'mysql-logo.png'},
                                {image: 'js-logo.png'},
                                {image: 'ajax-logo.png'},
                            ],
                            cards: [
                                {
                                    title: 'MVC Laravel',
                                    description: 'The development of PLN Archive V1 adheres to the Model-View-Controller (MVC) architectural pattern in the Laravel framework. This approach segregates the application\'s components into distinct layers',
                                    image: 'model-iams-mvclaravel.png'
                                },
                                {
                                    title: 'Optimized Feature',
                                    description: 'Optimization focuses on enhancing the functionallity feature, and addressing performance issues, ensuring it performs efficiently and meets user expectations that already defined before.',
                                    image: 'model-iams-optimizedfeature.gif'
                                },
                                {
                                    title: 'REST Concept',
                                    description: 'IAMS application is developed with a strong adherence to the Representational State Transfer (REST) architectural concept in Laravel.',
                                    image: 'model-anjaman-githubkanban.png'
                                },
                            ],
                        },
                        {
                            title: 'Forge a Streamlined',
                            title_span: 'Development Process',
                            description: 'An organized and efficient development process is essential for successful application development. In this journey, we illustrate how meticulous planning and well-coordinated steps contribute to achieving better outcomes in application development.',
                            technologies: [
                                {image: 'git-logo.png'},
                                {image: 'github-logo.png'},
                                {image: 'jira-logo.png'},
                            ],
                            cards: [
                                {
                                    title: 'Git',
                                    description: 'Enables to maintain a well-structured and organized codebase of IAMS application. Using Git commits to involves a clear and descriptive message that explains the changes made',
                                    image: 'model-iams-git.png'
                                },
                                {
                                    title: 'Collaborated on Jira',
                                    description: 'Enables to maintain a well-structured and organized codebase of IAMS application. Using Git commits that reference previously assigned issues',
                                    image: 'model-iams-collaboratedonjira.png'
                                },
                                {
                                    title: 'Code Review',
                                    description: 'Confirming that the application\'s features function as expected and meet the established quality benchmarks.',
                                    image: 'model-iams-codereview.png'
                                },
                                {
                                    title: 'Daily Stand Up Meet',
                                    description: 'Enhance the communication, and collaboration in a regular team meeting to discuss the progress, challenges, and plans for the day',
                                    image: 'model-iams-dailystandupmeet.png'
                                },
                            ],
                        },
                    ]
                },
                {
                    id: 4,
                    title: 'PLN Archive V2',
                    date: 'Augustus 2022 - December 2022',
                    role: 'Fullstack Web Developer',
                    image_cover: 'cover-archivev2.png',
                    description: 'The Archive PLN V2 is a revamped version of the previous application, built with enhanced features and improved functionalities. This application serves as a comprehensive system designed to efficiently manage and organize the extensive archives within the PLN (Perusahaan Listrik Negara).',
                    image: 'splash-archivev2.png',
                    technologies: [
                        {image: 'miro-logo.png'},
                        {image: 'figma-logo.png'},
                        {image: 'html-logo.png'},
                        {image: 'css-logo.png'},
                        {image: 'bootstrap-logo.png'},
                        {image: 'js-logo.png'},
                        {image: 'jquery-logo.png'},
                        {image: 'php-logo.png'},
                        {image: 'laravel-logo.png'},
                        {image: 'ajax-logo.png'},
                        {image: 'xampp-logo.png'},
                        {image: 'mysql-logo.png'},
                        {image: 'git-logo.png'},
                        {image: 'github-logo.png'},
                    ],
                    icon: 'fa-list-check',
                    header: 'PLN\'s Archive V2 Web Application Development',
                    sub_header: 'PT PLN UPP JBT',
                    description_header: 'As a full-stack developer for Archive PLN V2, I take pride in contributing to the enhancement and optimization of existing features. My focus is on ensuring a seamless user experience and improving the application to meet the evolving needs of PLN.',
                    image_header: 'description-archivev2.png',
                    tags: [
                        {title: 'Go to page', link: ''},
                    ],
                    tasks: [
                        {list: 'Revamped the application with an advanced, clean, and user-friendly interface.'},
                        {list: 'Developed an application using HTML, CSS, SASS, Bootstrap, AJAX, JQuery, JavaScript, PHP, Laravel, and MySQL.'},
                        {list: 'Built upon the existing foundations and enhanced their functionality'},
                        {list: 'Managed hosting responsibilities on the company\'s local servers.'},
                        {list: 'Ensured optimal performance and accessibility through user acceptance testing.'},
                        {list: 'Successfully deployed application on a local server at PT PLN.'},
                    ],
                    trailer: 'trailer-investhive.mp4',
                    models: [
                        {
                            title: 'Dive Inside',
                            title_span: 'Frontend',
                            description: 'This journey ventures deeply into the domain of frontend development, transforming designs into code. The code produced aligns precisely with the previously established UI design, ensuring seamless execution and functionality.',
                            technologies: [
                                {image: 'figma-logo.png'},
                                {image: 'html-logo.png'},
                                {image: 'css-logo.png'},
                                {image: 'bootstrap-logo.png'},
                                {image: 'js-logo.png'},
                                {image: 'jquery-logo.png'},
                            ],
                            cards: [
                                {
                                    title: 'Figma to Code',
                                    description: 'Figma to Code for IAMS application involves the transformation from Figma into functional HTML, CSS, and other necessary web development code.',
                                    image: 'model-archivev2-figmatocode.png'
                                },
                                {
                                    title: 'Assets and Libraries',
                                    description: 'Assets and Libraries Management for IAMS required for application development. Such as Datatables, Select2, JQuery, Bootstrap',
                                    image: 'model-archivev2-assetsandlibraries.png'
                                },
                                {
                                    title: 'Layouting',
                                    description: ' Structural organization of pre-designed pages within the Laravel MVC (Model-View-Controller) framework.',
                                    image: 'model-archivev2-layouting.gif'
                                },
                            ],
                        },
                        {
                            title: 'Built Through',
                            title_span: 'Backend',
                            description: 'Backend development for the IAMS application involves the creation and implementation of the server-side components and functionalities that power the application.',
                            technologies: [
                                {image: 'php-logo.png'},
                                {image: 'laravel-logo.png'},
                                {image: 'mysql-logo.png'},
                                {image: 'js-logo.png'},
                                {image: 'ajax-logo.png'},
                            ],
                            cards: [
                                {
                                    title: 'MVC Laravel',
                                    description: 'The development of PLN Archive V1 adheres to the Model-View-Controller (MVC) architectural pattern in the Laravel framework. This approach segregates the application\'s components into distinct layers',
                                    image: 'model-archivev2-mvclaravel.png'
                                },
                                {
                                    title: 'Optimized Feature',
                                    description: 'Optimization focuses on enhancing the functionallity feature, and addressing performance issues, ensuring it performs efficiently and meets user expectations that already defined before.',
                                    image: 'model-archivev2-optimizedfeature.gif'
                                },
                                {
                                    title: 'REST Concept',
                                    description: 'IAMS application is developed with a strong adherence to the Representational State Transfer (REST) architectural concept in Laravel.',
                                    image: 'model-anjaman-githubkanban.png'
                                },
                            ],
                        },
                        {
                            title: 'Forge a Streamlined',
                            title_span: 'Development Process',
                            description: 'An organized and efficient development process is essential for successful application development. In this journey, we illustrate how meticulous planning and well-coordinated steps contribute to achieving better outcomes in application development.',
                            technologies: [
                                {image: 'git-logo.png'},
                                {image: 'github-logo.png'},
                                {image: 'jira-logo.png'},
                            ],
                            cards: [
                                {
                                    title: 'Collaborated on Jira',
                                    description: 'Enables to maintain a well-structured and organized codebase of IAMS application. Using Git commits that reference previously assigned issues',
                                    image: 'model-archivev2-collaboratedonjira.png'
                                },
                                {
                                    title: 'Git',
                                    description: 'Enables to maintain a well-structured and organized codebase of IAMS application. Using Git commits to involves a clear and descriptive message that explains the changes made',
                                    image: 'model-archivev2-git.png'
                                },
                                {
                                    title: 'Github Kanban',
                                    description: 'Confirming that the application\'s features function as expected and meet the established quality benchmarks.',
                                    image: 'model-archivev2-githubkanban.png'
                                },
                            ],
                        },
                    ]
                },
                {
                    id: 5,
                    title: 'NutriHive',
                    date: 'April 2023 - May 2023',
                    role: 'UI/UX Developer',
                    image_cover: 'cover-nutrihive.png',
                    description: 'NutriHive is an application designed to provide precise dietary recommendations based on user food preferences to ensure optimal nutrition.',
                    image: 'splash-nutrihive.png',
                    technologies: [
                        {image: 'miro-logo.png'},
                        {image: 'figma-logo.png'},
                        {image: 'ballparkhq-logo.png'},
                        {image: 'photoshop-logo.png'},
                        {image: 'premiere-logo.png'},
                        {image: 'ae-logo.png'},
                    ],
                    icon: 'fa-list-check',
                    header: 'NutriHive Mobile Application UI/UX Project',
                    sub_header: 'FINDIT UI/UX National Competition 2023',
                    description_header: 'NutriHive is an innovative platform dedicated to promoting health and well-being through personalized nutrition. Our mission is to empower individuals to make informed dietary choices by offering personalized nutrition recommendations based on their unique needs and goals. Using cutting-edge technology and scientific insights, NutriHive provides users with customized meal plans, dietary advice, and access to a community of like-minded individuals on a journey to better health. Whether youre seeking to manage your weight, improve your athletic performance, or simply lead a healthier lifestyle, NutriHive is your trusted partner in achieving your nutritional goals.',
                    image_header: 'description-nutrihive.png',
                    tags: [
                        {title: 'Go to github', link: 'https://github.com/SI-RPL-2022/SI4306_A_ANJAMAN.git'},
                    ],
                    tasks: [
                        {list: 'Devised a User Experience and created a User Interface. Focusing on user-friendly interfaces and intuitive navigation.'},
                        {list: 'Collaborated as a team member to plan and analyze key issues related to the project, including identifying the most beneficial features and application requirements.'},
                        {list: 'Ensured that the applications design prioritized user preferences and accommodated various user profiles'},
                        {list: 'Regularly reviewed and iterated on the design to maintain its alignment with the projects objectives and user requirements.'},
                        {list: 'Generated realistic mockups to provide stakeholders with a tangible representation of the UI/UX design.'},
                        {list: ' Created promotional trailers to offer a compelling and authentic preview of the NutriHive user interface, allowing users to better grasp the applications capabilities.'},
                    ],
                    trailer: 'trailer-investhive.mp4',
                    models: [
                        {
                            title: 'Deliver an Optimized',
                            title_span: 'Design Thinking',
                            description: 'Cultivating a dynamic synergy of design thinking methodologies, I embarked on a transformative journey to create a user-centric UI/UX. This involved an extensive exploration of user behaviors, preferences, and pain points, ensuring that every design decision was rooted in empathetic understanding. With meticulous research, ideation, and iterative prototyping, I harnessed the power of design thinking to craft an exceptional user experience. The outcome represents an optimization of both form and function, where innovation and user satisfaction seamlessly intersect, yielding a product that transcends expectations.',
                            technologies: [
                                {image: 'miro-logo.png'},
                                {image: 'figma-logo.png'},
                                {image: 'ballparkhq-logo.png'},
                            ],
                            cards: [
                                {
                                    title: 'User Persona',
                                    description: 'A comprehensive user persona analysis reveals that NutriHives target audience comprises health-conscious individuals from diverse age groups and backgrounds. They are seeking a personalized and convenient solution for managing their nutritional needs and wellness goals.',
                                    image: 'model-nutrihive-userpersona.png'
                                },
                                {
                                    title: 'Customer Journey Map',
                                    description: 'The customer journey within NutriHive is characterized by a seamless and engaging experience. Users embark on their NutriHive journey by setting their wellness goals and sharing their dietary preferences.',
                                    image: 'model-nutrihive-customerjourneymap.png'
                                },
                                {
                                    title: 'Problem Statement',
                                    description: 'NutriHive aims to address the growing challenge of providing effective, personalized nutrition guidance in an increasingly health-conscious society. NutriHive seeks to simplify this process by offering tailored nutritional recommendations that empower users to make informed dietary decisions and enhance their overall well-being.',
                                    image: 'model-nutrihive-problemstatement.png'
                                },
                                {
                                    title: 'Value Proposition',
                                    description: 'NutriHives value proposition revolves around delivering personalized and accessible nutrition solutions to help individuals achieve their wellness goals. With NutriHive, users gain highly personalized nutritional guidance, simplifying nutrition decisions and empowering users to achieve their health goals according to their preferences.',
                                    image: 'model-nutrihive-valueproposition.png'
                                },
                                {
                                    title: 'Prioritization Matrix',
                                    description: 'The prioritization matrix in NutriHive assists in assessing and ranking key design elements and features, ensuring that resources are allocated efficiently to enhance the applications impact and user experience.',
                                    image: 'model-nutrihive-prioritizationmatrix.png'
                                },
                                {
                                    title: 'Information Architecture',
                                    description: 'Information architecture in NutriHive is crucial for structuring and organizing content, ensuring that users can effortlessly access nutritional information and personalized recommendations, ultimately contributing to a user-friendly and intuitive experience.',
                                    image: 'model-nutrihive-informationarchitecture.png'
                                },
                                {
                                    title: 'User Flows',
                                    description: 'User flows in NutriHive depict the pathways users follow to set wellness goals, access personalized meal plans, and connect with a supportive community. These visual representations help optimize the user journey and identify areas for improvement.',
                                    image: 'model-nutrihive-userflows.png'
                                },
                                {
                                    title: 'Low Fidelity',
                                    description: 'Low-fidelity design for NutriHive involves initial wireframes and sketches that focus on laying out the application\'s structure. It serves as a rapid and cost-effective method to conceptualize and test ideas, ensuring that the application aligns with user needs.',
                                    image: 'model-nutrihive-lowfidelity.png'
                                },
                                {
                                    title: 'High Fidelity',
                                    description: 'High-fidelity design for NutriHive encompasses detailed, pixel-perfect representations of the user interface. It showcases the application\'s final look and feel, including accurate colors, typography, and interactions. High-fidelity designs are instrumental in refining the NutriHive user interface and presenting a polished visual experience to stakeholders and developers.',
                                    image: 'model-nutrihive-highfidelity.png'
                                },
                                {
                                    title: 'SUS and UT',
                                    description: 'The System Usability Scale, when applied to NutriHive, measures user satisfaction and usability. Usability testing within NutriHive involves real users interacting with the application to identify any usability issues, gather feedback, and ensure that the user interface meets their needs.',
                                    image: 'model-nutrihive-sus&ut.png'
                                },
                                {
                                    title: 'Google Heart Framework',
                                    description: 'Leveraging Google\'s HEART framework, NutriHive evaluates user experience by considering Happiness, Engagement, Adoption, Retention, and Task success. This comprehensive approach ensures that NutriHive keeps users engaged and satisfied while achieving their health and wellness goals.',
                                    image: 'model-nutrihive-googleheart.png'
                                },
                            ]
                        },
                        {
                            title: 'Dive Inside',
                            title_span: 'User Interface',
                            description: 'This journey takes me deep into the world of UI creation, where thorough research, meticulous attention to detail, and a commitment to organizational excellence are paramount. With a singular focus on enhancing the overall user experience, this title represents a dedication to delving into the intricacies of UI design, ensuring that every element harmoniously contributes to the project\'s success. ',
                            technologies: [
                                {image: 'figma-logo.png'},
                                {image: 'photoshop-logo.png'},
                                {image: 'premiere-logo.png'},
                                {image: 'ae-logo.png'},
                            ],
                            cards: [
                                {
                                    title: 'Design System',
                                    description: 'NutriHive\'s design system ensures a consistent and user-friendly visual experience by providing guidelines and components for a cohesive user interface.',
                                    image: 'model-nutrihive-designsystem.png'
                                },
                                {
                                    title: 'Prototyping',
                                    description: 'Prototyping transforms design concepts into interactive models, enabling usability testing and refinement to create an intuitive user interface.',
                                    image: 'model-nutrihive-prototyping-ready.gif'
                                },
                                {
                                    title: 'Mockup',
                                    description: 'Mockups serve as visual blueprints, helping to conceptualize and refine the UI design, ensuring it aligns with user needs.',
                                    image: 'model-nutrihive-mockup-ready.gif'
                                },
                            ]
                        },
                    ]
                },
                {
                    id: 6,
                    title: 'Halal Food',
                    date: 'September 2022 - Augustus 2023',
                    role: 'Backend Developer',
                    image_cover: 'cover-halalfood.png',
                    description: 'Halal Food is a comprehensive application that empowers users to access information about halal food, providing a platform for the management of halal experiences. With the active participation of a dedicated community of contributors, the app facilitates food reviews and evaluations, ensuring the authenticity of halal offerings.',
                    image: 'splash-halalfood.png',
                    technologies: [
                        {image: 'miro-logo.png'},
                        {image: 'figma-logo.png'},
                        {image: 'ballparkhq-logo.png'},
                        {image: 'photoshop-logo.png'},
                        {image: 'premiere-logo.png'},
                        {image: 'ae-logo.png'},
                    ],
                    icon: 'fa-list-check',
                    header: 'NutriHive Mobile Application UI/UX Project',
                    sub_header: 'FINDIT UI/UX National Competition 2023',
                    description_header: 'NutriHive is an innovative platform dedicated to promoting health and well-being through personalized nutrition. Our mission is to empower individuals to make informed dietary choices by offering personalized nutrition recommendations based on their unique needs and goals. Using cutting-edge technology and scientific insights, NutriHive provides users with customized meal plans, dietary advice, and access to a community of like-minded individuals on a journey to better health. Whether youre seeking to manage your weight, improve your athletic performance, or simply lead a healthier lifestyle, NutriHive is your trusted partner in achieving your nutritional goals.',
                    image_header: 'description-nutrihive.png',
                    tags: [
                        {title: 'Go to github', link: 'https://github.com/SI-RPL-2022/SI4306_A_ANJAMAN.git'},
                    ],
                    tasks: [
                        {list: 'Devised a User Experience and created a User Interface. Focusing on user-friendly interfaces and intuitive navigation.'},
                        {list: 'Collaborated as a team member to plan and analyze key issues related to the project, including identifying the most beneficial features and application requirements.'},
                        {list: 'Ensured that the applications design prioritized user preferences and accommodated various user profiles'},
                        {list: 'Regularly reviewed and iterated on the design to maintain its alignment with the projects objectives and user requirements.'},
                        {list: 'Generated realistic mockups to provide stakeholders with a tangible representation of the UI/UX design.'},
                        {list: ' Created promotional trailers to offer a compelling and authentic preview of the NutriHive user interface, allowing users to better grasp the applications capabilities.'},
                    ],
                    trailer: 'trailer-investhive.mp4',
                    models: [
                        {
                            title: 'Deliver an Optimized',
                            title_span: 'Design Thinking',
                            description: 'Cultivating a dynamic synergy of design thinking methodologies, I embarked on a transformative journey to create a user-centric UI/UX. This involved an extensive exploration of user behaviors, preferences, and pain points, ensuring that every design decision was rooted in empathetic understanding. With meticulous research, ideation, and iterative prototyping, I harnessed the power of design thinking to craft an exceptional user experience. The outcome represents an optimization of both form and function, where innovation and user satisfaction seamlessly intersect, yielding a product that transcends expectations.',
                            technologies: [
                                {image: 'miro-logo.png'},
                                {image: 'figma-logo.png'},
                                {image: 'ballparkhq-logo.png'},
                            ],
                            cards: [
                                {
                                    title: 'User Persona',
                                    description: 'A comprehensive user persona analysis reveals that NutriHives target audience comprises health-conscious individuals from diverse age groups and backgrounds. They are seeking a personalized and convenient solution for managing their nutritional needs and wellness goals.',
                                    image: 'model-nutrihive-userpersona.png'
                                },
                                {
                                    title: 'Customer Journey Map',
                                    description: 'The customer journey within NutriHive is characterized by a seamless and engaging experience. Users embark on their NutriHive journey by setting their wellness goals and sharing their dietary preferences.',
                                    image: 'model-nutrihive-customerjourneymap.png'
                                },
                                {
                                    title: 'Problem Statement',
                                    description: 'NutriHive aims to address the growing challenge of providing effective, personalized nutrition guidance in an increasingly health-conscious society. NutriHive seeks to simplify this process by offering tailored nutritional recommendations that empower users to make informed dietary decisions and enhance their overall well-being.',
                                    image: 'model-nutrihive-problemstatement.png'
                                },
                                {
                                    title: 'Value Proposition',
                                    description: 'NutriHives value proposition revolves around delivering personalized and accessible nutrition solutions to help individuals achieve their wellness goals. With NutriHive, users gain highly personalized nutritional guidance, simplifying nutrition decisions and empowering users to achieve their health goals according to their preferences.',
                                    image: 'model-nutrihive-valueproposition.png'
                                },
                                {
                                    title: 'Prioritization Matrix',
                                    description: 'The prioritization matrix in NutriHive assists in assessing and ranking key design elements and features, ensuring that resources are allocated efficiently to enhance the applications impact and user experience.',
                                    image: 'model-nutrihive-prioritizationmatrix.png'
                                },
                                {
                                    title: 'Information Architecture',
                                    description: 'Information architecture in NutriHive is crucial for structuring and organizing content, ensuring that users can effortlessly access nutritional information and personalized recommendations, ultimately contributing to a user-friendly and intuitive experience.',
                                    image: 'model-nutrihive-informationarchitecture.png'
                                },
                                {
                                    title: 'User Flows',
                                    description: 'User flows in NutriHive depict the pathways users follow to set wellness goals, access personalized meal plans, and connect with a supportive community. These visual representations help optimize the user journey and identify areas for improvement.',
                                    image: 'model-nutrihive-userflows.png'
                                },
                                {
                                    title: 'Low Fidelity',
                                    description: 'Low-fidelity design for NutriHive involves initial wireframes and sketches that focus on laying out the application\'s structure. It serves as a rapid and cost-effective method to conceptualize and test ideas, ensuring that the application aligns with user needs.',
                                    image: 'model-nutrihive-lowfidelity.png'
                                },
                                {
                                    title: 'High Fidelity',
                                    description: 'High-fidelity design for NutriHive encompasses detailed, pixel-perfect representations of the user interface. It showcases the application\'s final look and feel, including accurate colors, typography, and interactions. High-fidelity designs are instrumental in refining the NutriHive user interface and presenting a polished visual experience to stakeholders and developers.',
                                    image: 'model-nutrihive-highfidelity.png'
                                },
                                {
                                    title: 'SUS and UT',
                                    description: 'The System Usability Scale, when applied to NutriHive, measures user satisfaction and usability. Usability testing within NutriHive involves real users interacting with the application to identify any usability issues, gather feedback, and ensure that the user interface meets their needs.',
                                    image: 'model-nutrihive-sus&ut.png'
                                },
                                {
                                    title: 'Google Heart Framework',
                                    description: 'Leveraging Google\'s HEART framework, NutriHive evaluates user experience by considering Happiness, Engagement, Adoption, Retention, and Task success. This comprehensive approach ensures that NutriHive keeps users engaged and satisfied while achieving their health and wellness goals.',
                                    image: 'model-nutrihive-googleheart.png'
                                },
                            ]
                        },
                        {
                            title: 'Dive Inside',
                            title_span: 'User Interface',
                            description: 'This journey takes me deep into the world of UI creation, where thorough research, meticulous attention to detail, and a commitment to organizational excellence are paramount. With a singular focus on enhancing the overall user experience, this title represents a dedication to delving into the intricacies of UI design, ensuring that every element harmoniously contributes to the project\'s success. ',
                            technologies: [
                                {image: 'figma-logo.png'},
                                {image: 'photoshop-logo.png'},
                                {image: 'premiere-logo.png'},
                                {image: 'ae-logo.png'},
                            ],
                            cards: [
                                {
                                    title: 'Design System',
                                    description: 'NutriHive\'s design system ensures a consistent and user-friendly visual experience by providing guidelines and components for a cohesive user interface.',
                                    image: 'model-nutrihive-designsystem.png'
                                },
                                {
                                    title: 'Prototyping',
                                    description: 'Prototyping transforms design concepts into interactive models, enabling usability testing and refinement to create an intuitive user interface.',
                                    image: 'model-nutrihive-prototyping-ready.gif'
                                },
                                {
                                    title: 'Mockup',
                                    description: 'Mockups serve as visual blueprints, helping to conceptualize and refine the UI design, ensuring it aligns with user needs.',
                                    image: 'model-nutrihive-mockup-ready.gif'
                                },
                            ]
                        },
                    ]
                },
            ]
        }
    },

}
</script>

<style>

</style>