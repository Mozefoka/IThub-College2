<script setup lang="ts">
import { icons, images } from '@/data/images.ts'

interface CardStandardItem {
  icon: string
  text: string
}

interface CardStandard {
  code: string
  items: CardStandardItem[]
}

interface Card {
  id: number
  color: string
  title: string
  image: string
  standards: CardStandard[]
}

const cards: Card[] = [
  {
    id: 1,
    color: '#f6c000',
    title: 'Программирование и управление ИТ-продуктом',
    image: images.оченьКрутойЧувак,
    standards: [
      {
        code: 'ФГОС 09.02.11',
        items: [
          { icon: icons.gamepad, text: 'Разработка' },
          { icon: icons.gamepad, text: 'Программирование' },
        ],
      },
      {
        code: 'ФГОС 09.02.13',
        items: [
          { icon: icons.gamepad, text: 'Управление ИТ-проектами' },
          { icon: icons.gamepad, text: 'ИИ в работе с данными' },
        ],
      },
    ],
  },
  {
    id: 2,
    color: '#33d9e5',
    title: 'Разработка игр',
    image: images.оченьКрутойЧувак,
    standards: [
      {
        code: 'ФГОС 09.02.11',
        items: [
          { icon: icons.gamepad, text: 'Гейм-дизайн' },
          { icon: icons.gamepad, text: 'Разработка на Unity' },
        ],
      },
      {
        code: 'ФГОС 09.02.13',
        items: [{ icon: icons.gamepad, text: 'Игровой арт' }],
      },
    ],
  },
  {
    id: 3,
    color: '#f07a1f',
    title: 'Информационная безопасность и системное администрирование',
    image: images.оченьКрутойЧувак,
    standards: [
      {
        code: 'ФГОС 09.02.13',
        items: [{ icon: icons.gamepad, text: 'Специалист по кибербезопасности' }],
      },
    ],
  },

  {
    id: 4,
    color: '#8b5cf6',
    title: 'Дизайн',
    image: images.оченьКрутойЧувак,
    standards: [
      {
        code: 'ФГОС 09.02.11',
        items: [{ icon: icons.gamepad, text: 'Цифровой дизайн' }],
      },
    ],
  },

  {
    id: 5,
    color: '#D75ada',
    title: 'Дизайн',
    image: images.оченьКрутойЧувак,
    standards: [
      {
        code: 'ФГОС 09.02.11',
        items: [{ icon: icons.gamepad, text: 'Цифровой дизайн' }],
      },
    ],
  },
]
</script>

<template>
  <section class="directions">
    <div class="container">
      <div class="directions__top">
        <h2 class="directions__top-title title">Что <span>можно изучать</span> в IThub?</h2>
        <p class="directions__top-subtitle subtitle">5 направлений с реальными бизнес-ролями и государственным дипломом</p>
      </div>

      <div class="directions__grid">
        <article
          v-for="card in cards"
          :key="card.id"
          class="directions__card"
          :style="{ '--accent': card.color }"
        >
          <div class="directions__content">
            <header class="directions__header">
              <span class="directions__marker" />
              <h3 class="directions__title">
                {{ card.title }}
              </h3>
            </header>

            <div
              v-if="card.standards.length"
              class="directions__standards"
            >
              <section
                v-for="standard in card.standards"
                :key="standard.code"
                class="directions__standard"
              >
                <p class="directions__standard-code">
                  {{ standard.code }}
                </p>

                <ul class="directions__standard-list">
                  <li
                    v-for="(item, index) in standard.items"
                    :key="index"
                    class="directions__standard-item"
                  >
                    <img
                      :src="item.icon"
                      class="directions__standard-icon"
                      alt="Иконка"
                    >

                    <span class="directions__standard-text">
                      {{ item.text }}
                    </span>
                  </li>
                </ul>
              </section>
            </div>
          </div>

          <div class="directions__media">
            <img
              :src="card.image"
              :alt="card.title"
              class="directions__image"
            >
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.directions {

  &__top {
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;
    margin-bottom: 30px;
  }

  &__top-subtitle {
    max-width: 399px;
    margin: 0 auto;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;

    @media (max-width: 739px) {
      grid-template-columns: 1fr;
    }
  }

  &__card {
    display: flex;
    border-radius: 15px;
    background: $color-dark;

      @media (max-width: 479px) {
        flex-direction: column;
      }
  }

  &__content {
    display: flex;
    flex: 1 1 55%;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
  }

  &__header {
    display: flex;
    gap: 10px;
    align-items: flex-start;
  }

  &__marker {
    flex-shrink: 0;
    width: 10px;
    height: 10px;
    margin-top: 5px;
    background: var(--accent);
    border-radius: 2px;
  }

  &__title {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.3;

      @media (max-width: 959px) {
        font-size: 12px;
      }
  }

  &__standards {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-end;
    gap: 15px;
  }

  &__standard {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__standard-code {
    font-size: 12px;
    color: $color-gray;
  }

  &__standard-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__standard-item {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  &__standard-icon {
    width: 20px;
    height: 20px;
  }

  &__standard-text {
    font-size: 14px;
    font-weight: 600;

    @media (max-width: 959px) {
      font-size: 9px;
    }
  }

  &__media {
    max-width: 260px;
    border-radius: 15px;
    background: var(--accent);

    @media (max-width: 479px) {
      max-width: 100%;
      max-height: 450px;

      img {
        object-fit: contain;
      }
    }
  }
}
</style>
