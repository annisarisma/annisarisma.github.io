<template>
  <Navbar/>
  <Introduction/>
  <About/>
  <Skills/>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '../components/Navbar.vue'
import Introduction from '../components/Introduction.vue'
import About from '../components/About.vue'
import Skills from '../components/Skills.vue'
import CardSkills from '../components/card/CardSkills.vue'

export default {
  name: 'HomeView',
  components: { HelloWorld, Navbar, Introduction, About, Skills, CardSkills }
}
</script>
