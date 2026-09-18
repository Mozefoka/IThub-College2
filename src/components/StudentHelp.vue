<script setup lang="ts">
</script>

<template>
  <section class="help">
    <div class="container">
      <div class="help__inner">
        <h2 class="help__title title">Помогаем <span>войти в индустрию</span></h2>

        <div class="help__content">
          <div class="help__content-item">
            <img :src="images.group" class="help__content-item-img" alt="Студенты">
            <p class="help__content-item-text"><strong>88% выпускников IThub</strong> трудоустраиваются по ИТ-направлениям</p>
          </div>

          <div class="help__content-item">
            <img :src="images.group" class="help__content-item-img" alt="Студенты">
            <p class="help__content-item-text"><strong>9% выпускников</strong> были приглашены в компании прямо во время защиты дипломного проекта</p>
          </div>

          <div class="help__content-item">
            <img :src="images.group" class="help__content-item-img" alt="Студенты">
            <p class="help__content-item-text">Уже во время обучения студенты <strong>работают над реальными
              проектами</strong>, проходят практику и взаимодействуют с работодателями, поэтому многие получают первые предложения о работе ещё до окончания колледжа</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.help {
  margin-bottom: 100px;

  &__inner {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }

  &__title {
    margin-bottom: 20px;
  }

  &__content {
    display: grid;
    grid-template-columns: 1.2fr 1.2fr 2fr;
    gap: 15px;

      @media (max-width: 959px) {
        grid-template-columns: 1fr;
        gap: 30px;
        padding: 0 20px;
      }
  }

  &__content-item-img {
    max-height: 420px;
    border-radius: 15px;
    margin-bottom: 10px;

      @media (max-width: 959px) {
        max-height: 340px;
      }
  }

  &__content-item-text {
    font-weight: 600;
    line-height: 20px;
    color: $color-light-gray;

    strong {
      color: $color-white;
    }
  }
}
</style>
