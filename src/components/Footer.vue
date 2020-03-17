<template>
    <footer class="footer">
      <nav class="navbar">
        <div class="navbar__items">
          <router-link to="/" class="navbar__item"><i class="fa fa-home fa-2x"></i>Home</router-link>
          <router-link to="/my-work" class="navbar__item"><i class="fa fa-briefcase fa-2x"></i>My Work</router-link>
          <router-link to="/education" class="navbar__item"><i class="fa fa-certificate fa-2x"></i>Education</router-link>
          <router-link to="/about-me" class="navbar__item"><i class="fa fa-black-tie fa-2x"></i>About me</router-link>
          <router-link to="/contact" class="navbar__item"><i class="fa fa-id-card fa-2x"></i>Contact</router-link>
        </div>
      </nav>
    </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
