<script setup lang="ts">
</script>

<template>
  <section class="social-media">
    <div class="container">
      <div class="social-media__content">
        <h2 class="social-media__title title">
          Узнай больше о жизни в IThub в <span>наших соцсетях</span>
        </h2>

        <ul class="social-media__list">
          <li class="social-media__list-item">
            <a href="#">
              <img :src="icons.tg" alt="Телеграм" />
            </a>
          </li>

          <li class="social-media__list-item">
            <a href="#">
              <img :src="icons.vk" alt="Вконтакте" />
            </a>
          </li>

          <li class="social-media__list-item">
            <a href="#">
              <img :src="icons.tiktok" alt="Тикток" />
            </a>
          </li>

          <li class="social-media__list-item">
            <a href="#">
              <img :src="icons.max" alt="Макс" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.social-media {
  margin-bottom: $margin-bottom;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;

    @media (max-width: 959px) {
      flex-direction: column;
      align-items: flex-start;
    }

    @media (max-width: 639px) {
      align-items: center;
    }
  }

  &__title {
    max-width: 500px;

    @media (max-width: 639px) {
      text-align: center;
    }
  }

  &__list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }

  &__list-item {
    a {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: $color-purple;

      @media (max-width: 959px) {
        width: 70px;
        height: 70px;
      }

      @media (max-width: 639px) {
        width: 60px;
        height: 60px;
      }
    }
  }
}
</style>
