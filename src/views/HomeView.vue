<template>
  <div class="wrapper">
    <Navbar/>
    <Introduction/>
    <About/>
    <Skills/>
    <Experience/>
    <Project/>

  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '../components/Navbar.vue'
import Introduction from '../components/Introduction.vue'
import About from '../components/About.vue'
import Skills from '../components/Skills.vue'
import CardSkills from '../components/card/CardSkills.vue'
import Experience from '../components/Experience.vue'
import Project from '../components/Project.vue'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'HomeView',
  components: { HelloWorld, Navbar, Introduction, About, Skills, CardSkills, Experience, Project },
  mounted() {
    AOS.init({
      duration: 1000,
    });
    window.addEventListener("scroll", this.updateScroll);
  },
  data() {
    return {
      scrolledNav: true,
    }
  },
  methods: {
    updateScroll() {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 50) {
        this.scrolledNav = true;
        return;
      }

      this.scrolledNav = false;
    }
  },
}
</script>
