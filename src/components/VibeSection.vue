<script setup lang="ts">
</script>

<template>
  <section class="vibe">
    <div class="container">
      <div class="vibe__inner">
        <div class="vibe__header">
          <h2 class="vibe__title title">Почувствуй <span>наш вайб</span>!</h2>
          <p class="vibe__subtitle subtitle">У нас сплоченное поддерживающее комьюнити. Развиваем уверенность, навыки общения и организаторские способности</p>
        </div>

        <div class="vibe__content">
          <a href="#" class="vibe__content-item">
            <img :src="images.group2" alt="Студенты">
            <p><strong>Прийти в гости</strong></p>
          </a>

          <a href="#" class="vibe__content-item">
            <img :src="images.group2" alt="Студенты">
            <p><strong>Про коммьюнити</strong></p>
          </a>

          <a href="#" class="vibe__content-item">
            <img :src="images.group2" alt="Студенты">
            <p><strong>Про наш подход</strong></p>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.vibe {
  margin-bottom: 100px;

  &__inner {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  &__header {
      @media (max-width: 959px) {
        align-self: center;
        text-align: center;
      }
  }

  &__subtitle {
    max-width: 500px;
  }

  &__content {
    display: grid;
    grid-template-columns: minmax(0, 640px) minmax(0, 320px) minmax(0, 320px);
    gap: 15px;

      @media (max-width: 639px) {
        grid-template-columns: 1fr;
        gap: 30px;
      }
  }

  &__content-item {
    display: flex;
    flex-direction: column;
    gap: 15px;

    img {
      width: 100%;
      height: 100%;
      max-height: 420px;
      border-radius: 15px;
    }

    p {
      font-size: 14px;
      text-transform: uppercase;

      &:after {
        content: '';
        width: 20px;
        height: 20px;
        padding: 0 10px;
        margin-left: 15px;
        border-radius: 50%;
        background: url("@/assets/icons/vibe_arrow.svg") no-repeat center center $color-purple;
      }
    }
  }
}
</style>
