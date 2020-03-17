<template>
  <div class="aboutMe">
    <section class="sectionContent h-100-xs">
      <div class="container">
        <h3 class="sectionContent__heading">{{ this.heading }}</h3>
        <p class="sectionContent__content">Ex System Administrator now learning Software Development. I'm abitious, goal driven and always looking forward to learn more. What I can bring on the table for you are my full commitment, any ideas I might come with and hard work that will get things done. Feel free to <router-link class="sectionContent__routerLink" to="/contact" exact>Contact</router-link> me!</p>
        <skillBar />
        <!-- <button class="btn">See my skills</button> -->
      </div>
    </section>
  </div>
</template>

<script>
import skillBar from '@/components/SkillBar'

export default {
  name: 'aboutMe',
  data: () => {
    return {
      heading: 'About Me'
    }
  },
   components: {
    skillBar: skillBar
  }
}
</script>
