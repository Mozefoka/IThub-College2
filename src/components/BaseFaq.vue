<script setup lang="ts">
import { ref, type ComponentPublicInstance } from 'vue'

interface FaqItem {
  id: number
  question: string
}

const faqItems = ref<FaqItem[]>([
  {
    id: 1,
    question: 'Где расположен колледж?',
  },

  {
    id: 2,
    question: 'Какие документы я получу после окончания обучения?',
  },

  {
    id: 3,
    question: 'Какие документы нужно предоставить для поступления?',
  },

  {
    id: 4,
    question: 'Где расположен колледж?',
  },

  {
    id: 5,
    question: 'Какие документы я получу после окончания обучения?',
  },

  {
    id: 6,
    question: 'Какие документы нужно предоставить для поступления?',
  },

  {
    id: 7,
    question: 'Какие документы я получу после окончания обучения?',
  },

  {
    id: 8,
    question: 'Какие документы нужно предоставить для поступления?',
  },
])

const openId = ref<number | null>(null)

const answerRefs = ref<HTMLElement[]>([])

const setAnswerRef = (el: Element | ComponentPublicInstance | null, index: number) => {
  if (el instanceof HTMLElement) {
    answerRefs.value[index] = el
  }
}

const toggleItem = (id: number) => {
  openId.value = openId.value === id ? null : id
}

const getMaxHeight = (index: number, id: number) => {
  if (openId.value !== id) return '0px'
  const el = answerRefs.value[index]
  return el ? `${el.scrollHeight}px` : '0px'
}
</script>

<template>
  <section class="faq">
    <div class="container">
      <h2 class="faq__title title">Часто <span>вопросы</span></h2>

      <div class="faq__list">
        <article
          v-for="(faq, index) in faqItems"
          :key="faq.id"
          class="faq__item"
          :class="{ active: openId === faq.id }"
        >
          <button
            class="faq__question"
            type="button"
            :aria-expanded="openId === faq.id"
            @click="toggleItem(faq.id)"
          >
      <span class="faq__question-text">
        {{ faq.question }}
      </span>

            <span class="faq__icon"></span>
          </button>

          <div
            class="faq__answer"
            :style="{ maxHeight: getMaxHeight(index, faq.id) }"
          >
            <div
              class="faq__answer-content"
              :ref="(el) => setAnswerRef(el, index)"
            >
              <template v-if="faq.id === 1">
                <p>
                  В Санкт-Петербурге у колледжа есть 3 комфортабельных корпуса. Все корпуса находятся друг от друга в пешей доступности в 7 минутах от метро Петроградская.
                </p>
              </template>

              <template v-else-if="faq.id === 2">
                <ul>
                  <li>Государственный диплом о среднем профессиональном образовании</li>
                  <li>Государственный диплом о профессиональной переподготовке по выбранной бизнес-роли</li>
                  <li>Цифровое портфолио из реальных бизнес-кейсов компаний-партнёров колледжа</li>
                </ul>
              </template>

              <template v-else-if="faq.id === 3">
                <strong>Паспорт + копия (2 и 3-я страница и регистрация)</strong>

               <ul>
                 <li>Аттестат об основном общем или среднем общем образовании (оригинал + копия)</li>
                 <li>Приложение к аттестату (оригинал + копия)</li>
                 <li>СНИЛС (оригинал + копия)</li>
                 <li>Фото 3х4 (4 штуки)</li>
                 <li>Военный билет или приписное свидетельство</li>
               </ul>

                <strong>Паспорт + копия (2 и 3-я страница и регистрация)</strong>

                <ul>
                  <li>Аттестат об основном общем или среднем общем образовании (оригинал + копия)</li>
                  <li>Приложение к аттестату (оригинал + копия)</li>
                  <li>СНИЛС (оригинал + копия)</li>
                  <li>Фото 3х4 (4 штуки)</li>
                  <li>
                    Документы, подтверждающие право на скидку
                    Подробнее о необходимых документах можно спросить у <a href="#">приёмной комиссии</a>
                  </li>
                </ul>
              </template>

              <template v-else-if="faq.id === 4">
                <p>
                  Срок обучения зависит от того, на базе 9 или 11 классов вы поступаете, а также от выбранного направления.
                </p>
                <strong>На базе 9 классов:</strong>
                <p>
                  Для всех направлений, кроме кафедры маркетинга и коммерции: 3 года 10 месяцев. Для направлений кафедры маркетинга и коммерции: 2 года 10 месяцев.
                </p>
                <strong>На базе 11 классов:</strong>
                <p>
                  Для всех направлений, кроме кафедры маркетинга и коммерции: 2 года 10 месяцев. Для направлений кафедры маркетинга и коммерции: 1 год 10 месяцев.<br>
                  Все сроки обучения установлены в соответствии с Федеральными государственными образовательными стандартами (ФГОС).
                </p>
              </template>

              <template v-if="faq.id === 5">
                <p>
                  В Санкт-Петербурге у колледжа есть 3 комфортабельных корпуса. Все корпуса находятся друг от друга в пешей доступности в 7 минутах от метро Петроградская.
                </p>
              </template>

              <template v-else-if="faq.id === 6">
                <ul>
                  <li>Государственный диплом о среднем профессиональном образовании</li>
                  <li>Государственный диплом о профессиональной переподготовке по выбранной бизнес-роли</li>
                  <li>Цифровое портфолио из реальных бизнес-кейсов компаний-партнёров колледжа</li>
                </ul>
              </template>

              <template v-else-if="faq.id === 7">
                <strong>Паспорт + копия (2 и 3-я страница и регистрация)</strong>

                <ul>
                  <li>Аттестат об основном общем или среднем общем образовании (оригинал + копия)</li>
                  <li>Приложение к аттестату (оригинал + копия)</li>
                  <li>СНИЛС (оригинал + копия)</li>
                  <li>Фото 3х4 (4 штуки)</li>
                  <li>Военный билет или приписное свидетельство</li>
                </ul>

                <strong>Паспорт + копия (2 и 3-я страница и регистрация)</strong>

                <ul>
                  <li>Аттестат об основном общем или среднем общем образовании (оригинал + копия)</li>
                  <li>Приложение к аттестату (оригинал + копия)</li>
                  <li>СНИЛС (оригинал + копия)</li>
                  <li>Фото 3х4 (4 штуки)</li>
                  <li>
                    Документы, подтверждающие право на скидку
                    Подробнее о необходимых документах можно спросить у <a href="#">приёмной комиссии</a>
                  </li>
                </ul>
              </template>

              <template v-else-if="faq.id === 8">
                <p>
                  Срок обучения зависит от того, на базе 9 или 11 классов вы поступаете, а также от выбранного направления.
                </p>
                <strong>На базе 9 классов:</strong>
                <p>
                  Для всех направлений, кроме кафедры маркетинга и коммерции: 3 года 10 месяцев. Для направлений кафедры маркетинга и коммерции: 2 года 10 месяцев.
                </p>
                <strong>На базе 11 классов:</strong>
                <p>
                  Для всех направлений, кроме кафедры маркетинга и коммерции: 2 года 10 месяцев. Для направлений кафедры маркетинга и коммерции: 1 год 10 месяцев.<br>
                  Все сроки обучения установлены в соответствии с Федеральными государственными образовательными стандартами (ФГОС).
                </p>
              </template>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.faq {
  margin-bottom: 150px;

  p {
    font-weight: 500;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  ul {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  li {
    font-weight: 500;
    list-style: disc;
    margin-left: 20px;
  }

  a {
    display: inline-block;
    font-weight: 700;
    color: $color-purple;
    text-decoration: underline;
  }

  &__title {
    text-align: center;
    margin-bottom: 30px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__item {
    border-radius: 15px;
    background-color: $color-dark;

    &:hover {

      .faq__icon {
        border-radius: 50%;
        background-color: $color-white;
        transition: background ease .5s;

        &::before,
        &::after {
            background: $color-darker
        }
      }
    }
  }

  &__question {
    width: 100%;
    padding: clamp(15px, 3vw, 30px) 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    color: $color-white;
    text-align: start;
  }

  &__question-text {
    font-weight: 500;
    font-size: clamp(16px, 1.5vw, 20px);
    line-height: 1.35;
  }

  &__icon {
    position: relative;
    width: 35px;
    height: 35px;
    flex-shrink: 0;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      background: $color-gray;
      transition: transform 0.35s ease;
    }

    &::before {
      width: 25px;
      height: 2px;
      transform: translate(-50%, -50%);
    }

    &::after {
      width: 2px;
      height: 25px;
      transform: translate(-50%, -50%);
    }
  }

  &__item.active &__icon {
    &::before,
    &::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }

  &__answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.45s ease;
  }

  &__answer-content {
    padding: 0 20px 40px;
    font-size: clamp(14px, 2vw, 16px);
    line-height: 1.55;
  }
}
</style>
