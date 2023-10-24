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

export default {
  name: 'HomeView',
  components: { HelloWorld, Navbar, Introduction, About, Skills, CardSkills, Experience, Project }
}
</script>
