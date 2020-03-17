<template>
  <nav class="navbar">
    <div class="navbar__items">
      <router-link to="/" class="navbar__item" exact>Home</router-link>
      <router-link to="/my-work" class="navbar__item" exact>My Work</router-link>
      <router-link to="/education" class="navbar__item" exact>Education</router-link>
      <router-link to="/about-me" class="navbar__item" exact>About me</router-link>
      <router-link to="/contact" class="navbar__item" exact>Contact</router-link>
    </div>
  </nav>
</template>

<script>
/* import { mapActions } from 'vuex' */
export default {
  name: 'Navbar'
}
</script>
