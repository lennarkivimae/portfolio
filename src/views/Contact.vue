<template>
  <div class="contact">
    <section class="sectionContent">
      <div class="container">
        <h3 class="sectionContent__heading">{{ this.heading }}</h3>
        <div class="sectionContent__items">
          <div>
            <div class="sectionContent__itemGroup">
              <p class="sectionContent__item">Mobile:</p>
              <p class="sectionContent__item">E-Mail:</p>
              <p class="sectionContent__item">Skype:</p>
              <p class="sectionContent__item">LinkedIN:</p>
            </div>
            <div class="sectionContent__itemGroup">
              <p class="sectionContent__item sectionContent__item--mod">+372 56508495</p>
              <p class="sectionContent__item sectionContent__item--mod">lennar.kivimae@gmail.com</p>
              <p class="sectionContent__item sectionContent__item--mod">lennarkivimae</p>
              <p class="sectionContent__item sectionContent__item--mod">Lennar Kivimae</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data: () => {
    return {
      heading: 'Contact'
    }
  }
}
</script>
