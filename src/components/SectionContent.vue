<template>
  <section class="sectionContent">
    <div class="container">
      {{ this.content }}
    </div>
  </section>
</template>

<script>
export default {
  name: 'sectionContent',
  props: ['content']
}
</script>
