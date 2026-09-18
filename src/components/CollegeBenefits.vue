<script setup lang="ts">
interface BenefitCard {
  title: string
  duration?: string
  description?: string
  width: number
}

interface BenefitRow {
  school: BenefitCard
  stage: BenefitCard
  employment: BenefitCard
  isAccent: boolean
}

const rows: BenefitRow[] = [
  {
    school: { title: 'Школа', duration: '9 лет', width: 390 },
    stage: { title: 'Колледж', duration: '4 года', width: 230 },
    employment: {
      title: 'Трудоустройство',
      description: 'Работа с заработной платой от 90 000 ₽',
      width: 285,
    },
    isAccent: true,
  },
  {
    school: { title: 'Школа', duration: '11 лет', width: 460 },
    stage: { title: 'Колледж', duration: '3 года', width: 195 },
    employment: {
      title: 'Трудоустройство',
      description: 'Работа с заработной платой от 90 000 ₽',
      width: 285,
    },
    isAccent: true,
  },
  {
    school: { title: 'Школа', duration: '11 лет', width: 460 },
    stage: { title: 'Вуз', duration: '4-6 лет', width: 270 },
    employment: { title: 'Трудоустройство', width: 370 },
    isAccent: false,
  },
]

const cardStyle = (card: BenefitCard) => ({
  '--card-width': `${card.width}px`,
})
</script>

<template>
  <div class="college-benefits">
    <div class="container">
      <h2 class="college-benefits__top-title title">Почему <span>стоит выбрать</span> колледж?</h2>

      <div class="college-benefits__content">
        <div
          v-for="(row, index) in rows"
          :key="index"
          class="college-benefits__row"
        >
          <div
            class="college-benefits__card college-benefits__card--pill"
            :style="cardStyle(row.school)"
          >
            <span class="college-benefits__title">{{ row.school.title }}</span>
            <span class="college-benefits__badge">{{ row.school.duration }}</span>
          </div>

          <div
            class="college-benefits__card college-benefits__card--pill"
            :class="{ 'college-benefits__card--accent': row.isAccent }"
            :style="cardStyle(row.stage)"
          >
            <span class="college-benefits__title">{{ row.stage.title }}</span>
            <span class="college-benefits__badge">{{ row.stage.duration }}</span>
          </div>

          <div
            class="college-benefits__card college-benefits__card--info"
            :class="{ 'college-benefits__card--accent': row.isAccent }"
            :style="cardStyle(row.employment)"
          >
            <span class="college-benefits__title">{{ row.employment.title }}</span>
            <span
              v-if="row.employment.description"
              class="college-benefits__description"
            >
          {{ row.employment.description }}
        </span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
.college-benefits {

  &__top-title {
    max-width: 470px;
    margin-bottom: 40px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  &__row {
    display: flex;
    gap: 15px;
  }

  &__card {
    flex: 0 1 var(--card-width, auto);
    width: var(--card-width, auto);
    max-width: 100%;
    box-sizing: border-box;
    padding: 20px 15px;
    border-radius: 20px;
    background-color: $color-dark;
    border: 1px solid $color-light-dark;

        @media (max-width: 959px) {
          flex: 1 1 285px;
          width: 100%;
        }
  }

  &__card--pill {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
  }

  &__card--info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 5px;
  }

  &__card--accent {
    background-color: $color-purple;
    border-color: $color-purple;
  }

  &__title {
    color: $color-white;
    font-weight: 500;
    white-space: nowrap;
  }

  &__badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 8px 18px;
    border-radius: 15px;
    background-color: $color-black;
    color: $color-white;
    font-size: 13px;
    font-weight: 700;
    white-space: nowrap;
    transform: rotate(-4deg);
  }

  &__description {
    color: $color-white-dark;
    font-size: 12px;
    line-height: 20px;
  }
}

@media (max-width: 639px) {
  .college-benefits {
    &__row {
      flex-direction: column;
      align-items: stretch;
    }

    &__card {
      flex: 1 1 auto;
      width: 100%;
    }

    &__title {
      white-space: normal;
    }
  }
}
</style>
