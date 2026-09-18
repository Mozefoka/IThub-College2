<script setup lang="ts">
</script>

<template>
  <section class="gallery">
    <div class="gallery__inner">
      <div class="gallery__content">
        <img class="gallery__content-project gallery__content-project--a" :src="images.galleryImg1" alt="Проект студента">
        <img class="gallery__content-project gallery__content-project--b" :src="images.galleryImg2" alt="Проект студента">
        <img class="gallery__content-project gallery__content-project--c" :src="images.galleryImg3" alt="Проект студента">
        <img class="gallery__content-project gallery__content-project--d" :src="images.galleryImg4" alt="Проект студента">
        <img class="gallery__content-project gallery__content-project--e" :src="images.galleryImg5" alt="Проект студента">
        <img class="gallery__content-project gallery__content-project--f" :src="images.galleryImg7" alt="Проект студента">
        <img class="gallery__content-project gallery__content-project--g" :src="images.galleryImg6" alt="Проект студента">
        <img class="gallery__content-project gallery__content-project--h" :src="images.galleryImg8" alt="Проект студента">
        <img class="gallery__content-project gallery__content-project--i" :src="images.galleryImg9" alt="Проект студента">
        <img class="gallery__content-project gallery__content-project--j" :src="images.galleryImg10" alt="Проект студента">
        <img class="gallery__content-project gallery__content-project--k" :src="images.galleryImg1" alt="Проект студента">
        <img class="gallery__content-project gallery__content-project--l" :src="images.galleryImg2" alt="Проект студента">
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.gallery {
  overflow-x: auto;
  overscroll-behavior-x: contain;
  margin-bottom: 50px;

  &__inner {
    max-width: 1625px;
    margin-left: auto;
  }

  &__content {
    --column: 250px;
    --row: 200px;
    --gap: 20px;

    width: max-content;

    display: grid;
    grid-template-columns: repeat(10, var(--column));
    grid-template-rows: var(--row) 300px 230px;
    grid-template-areas:
      'a b c d d e e f f f'
      'a b h h i i i f f f'
      'g g h h j j k k l l';
    gap: var(--gap);
    padding: 0 20px;
  }

  &__content-project {
    border-radius: 15px;

    &--a {
      max-height: 350px;
      grid-area: a;
    }

    &--b {
      max-height: 350px;
      grid-area: b;
    }

    &--c {
      grid-area: c;
    }

    &--d {
      grid-area: d;
    }

    &--e {
      grid-area: e;
    }

    &--f {
      grid-area: f;
    }

    &--g {
      margin-top: -160px;
      max-width: 390px;
      height: 390px;
      justify-self: flex-end;
      grid-area: g;
    }

    &--h {
      max-height: 470px;
      grid-area: h;
    }

    &--i {
      grid-area: i;
    }

    &--j {
      grid-area: j;
    }

    &--k {
      grid-area: k;
    }

    &--l {
      grid-area: l;
    }
  }
}
</style>
