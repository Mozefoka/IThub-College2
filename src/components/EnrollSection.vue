<script setup lang="ts">
import ButtonCta from '@/components/ui/ButtonCta.vue'

interface Step {
  id: number
  heading: string
  description: string
}

const steps: Step[] = [
  {
    id: 1,
    heading: 'Шаг 1',
    description: 'Подать заявку на поступление и необходимые документы для оформления договора на Дне открытых дверей, или на сайте в разделе «Приёмная комиссия», или лично в офисе приёмной комиссии',
  },

  {
    id: 2,
    heading: 'Шаг 2',
    description: 'С сопровождением менеджеров приёмной комиссии, согласовать договор онлайн и подписать через сервис nopaper.ru или лично при оплате материнским/региональным капиталом',
  },

  {
    id: 3,
    heading: 'Шаг 3',
    description: 'Оплатить обучение по реквизитам, указанным в договоре',
  },

  {
    id: 4,
    heading: 'Шаг 3',
    description: 'Предоставить документы для зачисления и формирования личного дела по списку',
  },
]
</script>

<template>
  <section class="enroll">
    <div class="container">
      <div class="enroll__header">
        <h2 class="enroll__title title">Как <span>поступить</span>?</h2>
        <p class="enroll__subtitle subtitle">Поступить можно как после 9 или 11 классов, так и после любого другого колледжа или вуза. Вам нужен лишь аттестат о среднем/основном общем образовании</p>
      </div>

      <div class="enroll__content">
        <div v-for="step in steps" class="enroll__step" :key="step.id">
          <p class="enroll__step-heading"><strong>{{ step.heading }}</strong></p>
          <p class="enroll__step-description">{{ step.description }}</p>
        </div>
      </div>

      <div class="enroll__btn">
        <ButtonCta text="ПОСТУПИТЬ" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.enroll {
  margin-bottom: 100px;

  &__header {
    max-width: 515px;
    margin: 0 auto 30px;
    text-align: center;
  }

  &__content {
    max-width: 800px;
    margin: 0 auto 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__step {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    border-radius: 15px;
    background-color: $color-dark;
  }

  &__step-heading {
    color: $color-light;
  }

  &__step-description {
    font-size: clamp(14px, 2vw, 16px);
    line-height: 25px;
    color: $color-light-gray;
  }

  &__btn {
    max-width: 150px;
    margin: 0 auto;
    font-size: 12px !important;
  }
}
</style>
