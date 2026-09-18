<script setup lang="ts">
import LeadForm from '@/components/LeadForm.vue'
</script>

<template>
  <section class="college">
    <div class="container">
      <h2 class="college__title title"><span>Поступить</span> в IThub!</h2>

      <div class="college__inner">
        <div class="college__content">
          <div class="college__about">
              <h3 class="college__about-title">О КОЛЛЕДЖЕ</h3>
              <p class="college__about-description">
                Колледж информационных и креативных технологий IThub — это единственный в России колледж подготовки ИТ-специалистов на базе 9, 10 или 11 класса по бизнес-ориентированной методологии через человекоцентричный подход к развитию личности.
              </p>
          </div>

          <div class="college__image">
            <img :src="images.students3" alt="Студенты">
          </div>
        </div>

        <div class="college__form">
          <LeadForm />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.college {
  padding: 50px 0;

  &__title {
    text-align: center;
    margin-bottom: 50px;
  }

  &__inner {
    display: flex;
    justify-content: space-between;
    gap: 15px;

      @media (max-width: 959px) {
        flex-direction: column-reverse;
      }
  }

  &__about {
    padding: 50px 20px;
    border-radius: 15px;
    background-color: $color-dark;
    margin-bottom: 15px;
  }

  &__about-title {
    font-weight: 600;
    font-size: 30px;
    margin-bottom: 15px;
  }

  &__about-description {
    font-size: 20px;
    line-height: 25px;
    color: $color-light-gray;

      @media (max-width: 1327px) {
        font-size: 16px;
      }

    @media (max-width: 1088px) {
      font-size: 14px;
    }
  }

  &__image {
    height: 280px;
    overflow: hidden;
    border-radius: 15px;

    @media (max-width: 1179px) {
      height: 255px;
    }

    @media (max-width: 1030px) {
      height: 230px;
    }

    @media (max-width: 959px) {
      height: auto;
    }
  }

  &__form {
    max-width: 550px;

    @media (max-width: 978px) {
      max-width: 520px;
    }

    @media (max-width: 959px) {
      max-width: 100%;
    }
  }
}
</style>
