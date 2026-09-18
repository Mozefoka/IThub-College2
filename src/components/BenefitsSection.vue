<script setup lang="ts">

interface Benefit {
  id: number
  icon: string
  text: string
}

const benefits: Benefit[] = [
  {
    id: 1,
    icon: icons.tick,
    text: 'Без результатов ОГЭ и ЕГЭ',
  },

  {
    id: 2,
    icon: icons.tick,
    text: '2 диплома гос.образца',
  },

  {
    id: 3,
    icon: icons.tick,
    text: 'Работа с третьего курса',
  },

  {
    id: 4,
    icon: icons.tick,
    text: 'Интеграция с индустрией',
  },

  {
    id: 5,
    icon: icons.tick,
    text: 'Вуз за 2,5 года после колледжа',
  },

  {
    id: 6,
    icon: icons.tick,
    text: 'Образование с гос.поддержкой',
  },
]
</script>

<template>
  <section class="benefits">
    <div class="container">
      <h2 class="benefits__title title">Почему <span>с нами</span> классно?</h2>

      <div class="benefits__inner">
        <div class="benefits__content">
          <ul class="benefits__list">
            <li v-for="benefit in benefits" class="benefits__list-item" :key="benefit.id">
              <img :src="benefit.icon" alt="Иконка" />
              <p>{{ benefit.text }}</p>
            </li>
          </ul>

          <p class="benefits__description">
            В учебном инкубаторе работаешь как в настоящей IT-команде: выбираешь бизнес-роль,
            решаешь реальные задачи и отвечаешь за результат проекта. К диплому у тебя уже будет
            опыт, который многие получают только после первого трудоустройства.
          </p>

          <a href="#" class="benefits__btn">УЗНАТЬ БОЛЬШЕ</a>
        </div>

        <div class="benefits__group">
          <img :src="images.groupOfStudents" alt="Студенты" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.benefits {
  padding-bottom: 80px;

  &__title {
    margin-bottom: 30px;

      @media (max-width: 959px) {
        text-align: center;
      }
  }

  &__inner {
    display: flex;
    justify-content: space-between;
    gap: 20px;

    @media (max-width: 959px) {
      flex-direction: column;
      align-items: center;
    }
  }

  &__content {
    max-width: 585px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 1199px) {
      max-width: 515px;
    }

    @media (max-width: 1099px) {
      max-width: 465px;
    }

    @media (max-width: 959px) {
      max-width: 100%;
      align-items: center;
      text-align: center;
      gap: 30px;
      background: radial-gradient(
        circle,
        rgba(142, 66, 235, 0.6) 0%,
        rgba(142, 66, 235, 0.25) 40%,
        transparent 55%
      );
    }

      @media (max-width: 479px) {
        align-items: normal;
      }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(3, 180px);
    gap: 20px;

    @media (max-width: 1199px) {
      grid-template-columns: repeat(3, 160px);
    }

    @media (max-width: 1099px) {
      grid-template-columns: repeat(3, 140px);
    }

    @media (max-width: 959px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 479px) {
      grid-template-columns: 1fr;
    }
  }

  &__list-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 20px;
    line-height: 20px;
    border-radius: 15px;
    color: $color-light-gray;
    background-color: $color-dark;
    text-align: center;

    @media (max-width: 1199px) {
      padding: 15px;
    }

    @media (max-width: 959px) {
      height: 180px;
      justify-content: center;
    }

      @media (max-width: 559px) {
        height: 150px;
        padding: 5px;
      }

    @media (max-width: 479px) {
      height: auto;
      padding: 15px;
      flex-direction: row;
      justify-content: flex-start;
      text-align: start;
    }

    img {
      width: 60px;
      height: 60px;

      @media (max-width: 1099px) {
        width: 45px;
        height: 45px;
      }
    }

    p {
      @media (max-width: 1099px) {
        font-size: 14px;
      }

      @media (max-width: 959px) {
        font-size: clamp(14px, 2vw, 16px);
      }

        @media (max-width: 479px) {
          font-size: 16px;
        }
    }
  }

  &__description {
    font-size: 18px;
    line-height: 25px;
    color: $color-light-gray;

      @media (max-width: 959px) {
        font-size: clamp(14px, 2vw, 18px);
      }
  }

  &__btn {
    max-width: 150px;
    padding: 15px;
    font-weight: 600;
    font-size: 12px;
    border-radius: 10px;
    background-color: $color-purple;
    text-align: center;

    @media (max-width: 959px) {
      max-width: 300px;
      width: 100%;
    }

      @media (max-width: 479px) {
        max-width: 100%;
        align-self: center;
      }
  }

  &__group {
    background: radial-gradient(
      circle,
      rgba(142, 66, 235, 0.6) 0%,
      rgba(142, 66, 235, 0.25) 40%,
      transparent 55%
    );

    @media (max-width: 959px) {
      display: none;
    }

    img {
      object-fit: contain;
    }
  }
}
</style>
