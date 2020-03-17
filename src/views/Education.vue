<template>
  <div class="education">
    <section class="sectionContent">
      <div class="container">
        <h3 class="sectionContent__heading">{{ this.heading }}</h3>
        <p class="sectionContent__content">
          I do have some education. I've completed couple of courses out of my free time, currently studying software development in Vocational education center in Tartu. I've already obtained a degree in Computer and Computer networks. However the road doesn't stop there. I'm always eager to learn more.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'education',
  data: () => {
    return {
      heading: 'Education'
    }
  }
}
</script>
