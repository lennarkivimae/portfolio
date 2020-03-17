<template>
  <div class="home">
    <ProfilePicture></ProfilePicture>
    <section class="hero">
      <h1 class="hero__heading">Lennar Kivimäe</h1>
      <p class="hero__desc">An Enthuastic Full Stack developer in training</p>
    </section>
  </div>
</template>

<script>
import ProfilePicture from '@/components/ProfilePicture'

export default {
  name: 'home',
  components: {
    ProfilePicture: ProfilePicture
  }
}
</script>
