<template>
  <div class="header">
    <div class="header__logo">
      <img src="@/assets/img/logo.svg" alt="logo">
    </div>
    <Navbar></Navbar>
  </div>
</template>

<script>
import Navbar from '@/components/NavBar'

export default {
  name: 'header',
  components: {
    'Navbar': Navbar
  }
}
</script>
