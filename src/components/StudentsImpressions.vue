<script setup lang="ts">
import { ref } from 'vue'
import ButtonCta from '@/components/ui/ButtonCta.vue'

interface Tab {
  id: number
  name: string
}

const tabs: Tab[] = [
  {
    id: 1,
    name: 'Дизайн',
  },

  {
    id: 2,
    name: 'Маркетинг',
  },

  {
    id: 3,
    name: 'Программирование',
  },

  {
    id: 4,
    name: 'Разработка игр',
  },

  {
    id: 5,
    name: 'Кибербезопасность',
  },
]

const activeTab = ref<number>(1)
</script>

<template>
  <section class="impression">
    <div class="container">
      <div class="impression__inner">
        <h2 class="impression__title title"><span>Впечатления</span> наших студентов</h2>

        <div class="impression__content">
          <div class="impression__tabs">
            <button
              v-for="tab in tabs"
              class="impression__tab"
              :class="{ 'impression__tab--active': activeTab === tab.id }"
              :key="tab.id"
              @click="activeTab = tab.id"
            >
              {{ tab.name }}
            </button>
          </div>

          <div v-show="activeTab === 1" class="impression__cards">
            <article class="impression__card">
              <div class="impression__card-header">
                <div class="impression__card-header-photo">
                  <img :src="images.dominica" alt="Студент" />
                </div>

                <div class="impression__card-header-text">
                  <p class="impression__card-header-name">Богдан Цверкунов</p>
                  <p class="impression__card-header-job">Работает на фрилансе</p>
                </div>
              </div>

              <div class="impression__card-description">
                <p>
                  Я перевёлся в Питер из IThub в Ставрополе. Здесь, в Питерском хабе, мне очень
                  нравятся проекты и люди... Всё круто и здорово! Недавно благодаря хабу я начал
                  сотрудничать с БетаРоботикс — выполняю дизайнерские заказы от этой компании.
                </p>

                <p>
                  Также работаю на сам хаб: помогаю с дизайном, недавно закончил
                  <a href="#">кейс с сайтом для службы заботы</a>. Пока в компании не работаю, но
                  очень хочу! Делаю проекты на фрилансе :)
                </p>
              </div>

              <div class="impression__card-btn">
                <ButtonCta text="Хочу так же!" size="small" />
              </div>
            </article>

            <article class="impression__card">
              <div class="impression__card-header">
                <div class="impression__card-header-photo">
                  <img :src="images.dominica" alt="Студент" />
                </div>

                <div class="impression__card-header-text">
                  <p class="impression__card-header-name">Доминика Шабардыгина</p>
                  <p class="impression__card-header-job">Работает в <a href="#">РБК</a></p>
                </div>
              </div>

              <div class="impression__card-description">
                <p>
                  В колледже много возможностей для дизайнера: преподаватели, мастер-классы, ивенты.
                  Но самое главное — я ощущаю настоящую поддержку и чувствую себя частью комьюнити.
                  Ваши цели здесь могут стать реальностью. Но колледж — не волшебная таблетка.
                </p>

                <p>
                  Всё получится только если вы сами вложитесь. Здесь дают возможности и поддержку,
                  но идти вперёд — ваша задача. Верьте в себя. Удачи!
                </p>
              </div>

              <div class="impression__card-btn">
                <ButtonCta text="Хочу так же!" size="small" />
              </div>
            </article>

            <article class="impression__card">
              <div class="impression__card-header">
                <div class="impression__card-header-photo">
                  <img :src="images.dominica" alt="Студент" />
                </div>

                <div class="impression__card-header-text">
                  <p class="impression__card-header-name">Давид Фомин</p>
                  <p class="impression__card-header-job">Проходит стажировку</p>
                </div>
              </div>

              <div class="impression__card-description">
                <p>
                  Я пришёл без опыта, но с сильными навыками коммуникации, благодаря которым быстро
                  завёл полезные знакомства. Уже в конце 1 курса сделал первый проект: собрал
                  команду, создал дизайн приложения и заработал 30 000 ₽.
                </p>

                <p>
                  Сейчас прохожу стажировку в дизайн-агентстве ENDY — выделился нестандартным
                  подходом и умением презентовать свои идеи.
                </p>
              </div>

              <div class="impression__card-btn">
                <ButtonCta text="Хочу так же!" size="small" />
              </div>
            </article>
          </div>

          <div v-show="activeTab === 2" class="impression__cards">
            <article class="impression__card">
              <div class="impression__card-header">
                <div class="impression__card-header-photo">
                  <img :src="images.dominica" alt="Студент" />
                </div>

                <div class="impression__card-header-text">
                  <p class="impression__card-header-name">Богдан Цверкунов</p>
                  <p class="impression__card-header-job">Работает на фрилансе</p>
                </div>
              </div>

              <div class="impression__card-description">
                <p>
                  Больше всего нравится, что профильные преподаватели параллельно работают в
                  индустрии. На парах мы разбираем кейсы с реальной работы — теория сразу становится
                  живой и понятной. Сейчас я уже веду мастер-класс по маркетингу.
                </p>
              </div>

              <div class="impression__card-btn">
                <ButtonCta text="Хочу так же!" size="small" />
              </div>
            </article>

            <article class="impression__card">
              <div class="impression__card-header">
                <div class="impression__card-header-photo">
                  <img :src="images.dominica" alt="Студент" />
                </div>

                <div class="impression__card-header-text">
                  <p class="impression__card-header-name">Доминика Шабардыгина</p>
                  <p class="impression__card-header-job">Работает в <a href="#">РБК</a></p>
                </div>
              </div>

              <div class="impression__card-description">
                <p>
                  Для меня важно, что на кафедре баланс теории и практики: мы учим то, что реально
                  нужно рынку. Бизнес-игры, хакатоны, стажировки — это всё помогает прийти к
                  работодателю уже с опытом. Уже через четыре месяца учёбы прошла стажировку и
                  получила оффер.
                </p>
              </div>

              <div class="impression__card-btn">
                <ButtonCta text="Хочу так же!" size="small" />
              </div>
            </article>

            <article class="impression__card">
              <div class="impression__card-header">
                <div class="impression__card-header-photo">
                  <img :src="images.dominica" alt="Студент" />
                </div>

                <div class="impression__card-header-text">
                  <p class="impression__card-header-name">Давид Фомин</p>
                  <p class="impression__card-header-job">Проходит стажировку</p>
                </div>
              </div>

              <div class="impression__card-description">
                <p>
                  Маркетолог — это очень широкая профессия. Мы пробуем всё: от разработки сайтов до
                  создания иллюстраций. Из-за этого по-другому смотрю на интернет: вижу
                  причинно-следственные связи в постах и роликах.
                </p>
              </div>

              <div class="impression__card-btn">
                <ButtonCta text="Хочу так же!" size="small" />
              </div>
            </article>
          </div>

          <div v-show="activeTab === 3" class="impression__cards">
            <article class="impression__card">
              <div class="impression__card-header">
                <div class="impression__card-header-photo">
                  <img :src="images.dominica" alt="Студент" />
                </div>

                <div class="impression__card-header-text">
                  <p class="impression__card-header-name">Богдан Цверкунов</p>
                  <p class="impression__card-header-job">Работает на фрилансе</p>
                </div>
              </div>

              <div class="impression__card-description">
                <p>
                  Для меня важно, чтобы обучение было интересным. Теория приходит сама, когда
                  сталкиваешься с трудностью: если что-то не получается — ищу информацию, помогающую
                  решить проблему. Самым эффективным форматом для меня стала работа над проектами:
                  полностью концентрируешься на процессе, пробуешь, экспериментируешь и видишь
                  результат. В будущем я вижу себя уверенным middle-разработчиком с серьёзным
                  опытом, и именно колледж играет ключевую роль в этом пути.
                </p>
              </div>

              <div class="impression__card-btn">
                <ButtonCta text="Хочу так же!" size="small" />
              </div>
            </article>

            <article class="impression__card">
              <div class="impression__card-header">
                <div class="impression__card-header-photo">
                  <img :src="images.dominica" alt="Студент" />
                </div>

                <div class="impression__card-header-text">
                  <p class="impression__card-header-name">Доминика Шабардыгина</p>
                  <p class="impression__card-header-job">Работает в <a href="#">РБК</a></p>
                </div>
              </div>

              <div class="impression__card-description">
                <p>
                  Больше всего нравится настрой преподавателей — приятно, когда люди действительно
                  хотят тебя научить и делают для этого всё. Здесь ответят на любой вопрос и помогут
                  в любой ситуации. Много возможностей для практики: на парах мы готовимся к
                  реальным задачам.
                </p>
              </div>

              <div class="impression__card-btn">
                <ButtonCta text="Хочу так же!" size="small" />
              </div>
            </article>

            <article class="impression__card">
              <div class="impression__card-header">
                <div class="impression__card-header-photo">
                  <img :src="images.dominica" alt="Студент" />
                </div>

                <div class="impression__card-header-text">
                  <p class="impression__card-header-name">Давид Фомин</p>
                  <p class="impression__card-header-job">Проходит стажировку</p>
                </div>
              </div>

              <div class="impression__card-description">
                <p>
                  Приятно закреплять теорию практикой. Особенно помогают реальные примеры и обратная
                  связь. Круто работать над проектами самому: проект по маршрутизации открыл мне
                  сети с другой стороны — IP-адреса, ошибки, исправления, всё это помогает
                  почувствовать профессию изнутри. Хочу стать full-stack разработчиком, и здесь уже
                  получаю знания для практики.
                </p>
              </div>

              <div class="impression__card-btn">
                <ButtonCta text="Хочу так же!" size="small" />
              </div>
            </article>
          </div>

          <div v-show="activeTab === 4" class="impression__cards impression__cards--game">
            <article class="impression__card">
              <div class="impression__card-header">
                <div class="impression__card-header-photo">
                  <img :src="icons.ava" alt="Студент" />
                </div>

                <div class="impression__card-header-text">
                  <p class="impression__card-header-name">Богдан Цверкунов</p>
                  <p class="impression__card-header-job">Работает на фрилансе</p>
                </div>
              </div>

              <div class="impression__card-description">
                <p>
                  Мне нравится, когда на занятиях дают челенджевые задания — это учит думать как
                  разработчик и правильно использовать ООП и SOLID. Формат с контрольными точками,
                  где показывают новый инструмент, а дальше работаешь самостоятельно, для меня самый
                  продуктивный: видишь пример, пробуешь сам и закрепляешь навыки.
                </p>

                <p>
                  Самый запоминающийся проект — игра для Яндекс. Игр за две недели. Было непросто:
                  сжатые сроки, согласование идеи, ведение документации, но благодаря этому я
                  научился работать с API, строить гибкую структуру проекта и приближаться к
                  принципам SOLID.
                </p>

                <p>
                  Самый запоминающийся проект — игра для Яндекс. Игр за две недели. Было непросто:
                  сжатые сроки, согласование идеи, ведение документации, но благодаря этому я
                  научился работать с API, строить гибкую структуру проекта и приближаться к
                  принципам SOLID.
                </p>
              </div>

              <div class="impression__card-btn">
                <ButtonCta text="Хочу так же!" size="small" />
              </div>
            </article>

            <article class="impression__card">
              <div class="impression__card-header">
                <div class="impression__card-header-photo">
                  <img :src="icons.ava" alt="Студент" />
                </div>

                <div class="impression__card-header-text">
                  <p class="impression__card-header-name">Богдан Цверкунов</p>
                  <p class="impression__card-header-job">Работает на фрилансе</p>
                </div>
              </div>

              <div class="impression__card-description">
                <p>
                  Мне нравится, когда на занятиях дают челенджевые задания — это учит думать как
                  разработчик и правильно использовать ООП и SOLID. Формат с контрольными точками,
                  где показывают новый инструмент, а дальше работаешь самостоятельно, для меня самый
                  продуктивный: видишь пример, пробуешь сам и закрепляешь навыки.
                </p>

                <p>
                  Самый запоминающийся проект — игра для Яндекс. Игр за две недели. Было непросто:
                  сжатые сроки, согласование идеи, ведение документации, но благодаря этому я
                  научился работать с API, строить гибкую структуру проекта и приближаться к
                  принципам SOLID.
                </p>

                <p>
                  Самый запоминающийся проект — игра для Яндекс. Игр за две недели. Было непросто:
                  сжатые сроки, согласование идеи, ведение документации, но благодаря этому я
                  научился работать с API, строить гибкую структуру проекта и приближаться к
                  принципам SOLID.
                </p>
              </div>

              <div class="impression__card-btn">
                <ButtonCta text="Хочу так же!" size="small" />
              </div>
            </article>
          </div>

          <div v-show="activeTab === 5" class="impression__cards impression__cards--cyber">
            <article class="impression__card">
              <div class="impression__card-header">
                <div class="impression__card-header-photo">
                  <img :src="icons.ava" alt="Студент" />
                </div>

                <div class="impression__card-header-text">
                  <p class="impression__card-header-name">Богдан Цверкунов</p>
                  <p class="impression__card-header-job">Работает на фрилансе</p>
                </div>
              </div>

              <div class="impression__card-description">
                <p>
                  Мне нравится, когда на занятиях дают челенджевые задания — это учит думать как
                  разработчик и правильно использовать ООП и SOLID. Формат с контрольными точками,
                  где показывают новый инструмент, а дальше работаешь самостоятельно, для меня самый
                  продуктивный: видишь пример, пробуешь сам и закрепляешь навыки.
                </p>

                <p>
                  Самый запоминающийся проект — игра для Яндекс. Игр за две недели. Было непросто:
                  сжатые сроки, согласование идеи, ведение документации, но благодаря этому я
                  научился работать с API, строить гибкую структуру проекта и приближаться к
                  принципам SOLID.
                </p>

                <p>
                  Самый запоминающийся проект — игра для Яндекс. Игр за две недели. Было непросто:
                  сжатые сроки, согласование идеи, ведение документации, но благодаря этому я
                  научился работать с API, строить гибкую структуру проекта и приближаться к
                  принципам SOLID.
                </p>
              </div>

              <div class="impression__card-btn">
                <ButtonCta text="Хочу так же!" size="small" />
              </div>
            </article>

            <article class="impression__card">
              <div class="impression__card-header">
                <div class="impression__card-header-photo">
                  <img :src="icons.ava" alt="Студент" />
                </div>

                <div class="impression__card-header-text">
                  <p class="impression__card-header-name">Богдан Цверкунов</p>
                  <p class="impression__card-header-job">Работает на фрилансе</p>
                </div>
              </div>

              <div class="impression__card-description">
                <p>
                  Мне нравится, когда на занятиях дают челенджевые задания — это учит думать как
                  разработчик и правильно использовать ООП и SOLID. Формат с контрольными точками,
                  где показывают новый инструмент, а дальше работаешь самостоятельно, для меня самый
                  продуктивный: видишь пример, пробуешь сам и закрепляешь навыки.
                </p>

                <p>
                  Самый запоминающийся проект — игра для Яндекс. Игр за две недели. Было непросто:
                  сжатые сроки, согласование идеи, ведение документации, но благодаря этому я
                  научился работать с API, строить гибкую структуру проекта и приближаться к
                  принципам SOLID.
                </p>

                <p>
                  Самый запоминающийся проект — игра для Яндекс. Игр за две недели. Было непросто:
                  сжатые сроки, согласование идеи, ведение документации, но благодаря этому я
                  научился работать с API, строить гибкую структуру проекта и приближаться к
                  принципам SOLID.
                </p>
              </div>

              <div class="impression__card-btn">
                <ButtonCta text="Хочу так же!" size="small" />
              </div>
            </article>

            <article class="impression__card">
              <div class="impression__card-header">
                <div class="impression__card-header-photo">
                  <img :src="icons.ava" alt="Студент" />
                </div>

                <div class="impression__card-header-text">
                  <p class="impression__card-header-name">Богдан Цверкунов</p>
                  <p class="impression__card-header-job">Работает на фрилансе</p>
                </div>
              </div>

              <div class="impression__card-description">
                <p>
                  Мне нравится, когда на занятиях дают челенджевые задания — это учит думать как
                  разработчик и правильно использовать ООП и SOLID. Формат с контрольными точками,
                  где показывают новый инструмент, а дальше работаешь самостоятельно, для меня самый
                  продуктивный: видишь пример, пробуешь сам и закрепляешь навыки.
                </p>

                <p>
                  Самый запоминающийся проект — игра для Яндекс. Игр за две недели. Было непросто:
                  сжатые сроки, согласование идеи, ведение документации, но благодаря этому я
                  научился работать с API, строить гибкую структуру проекта и приближаться к
                  принципам SOLID.
                </p>

                <p>
                  Самый запоминающийся проект — игра для Яндекс. Игр за две недели. Было непросто:
                  сжатые сроки, согласование идеи, ведение документации, но благодаря этому я
                  научился работать с API, строить гибкую структуру проекта и приближаться к
                  принципам SOLID.
                </p>
              </div>

              <div class="impression__card-btn">
                <ButtonCta text="Хочу так же!" size="small" />
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.impression {
  margin-bottom: 100px;

  a {
    display: inline-block;
    color: $color-purple;
  }

  &__title {
    max-width: 440px;
    white-space: break-spaces;
    margin-bottom: 20px;
  }

  &__tabs {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 50px;

    @media (max-width: 959px) {
      max-width: 470px;
    }
  }

  &__tab {
    width: fit-content;
    padding: 10px 15px;
    border-radius: 30px;
    border: 1px solid $color-purple;
    color: $color-white;
    background-color: transparent;

    &--active {
      background-color: $color-purple;
    }
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 390px));
    gap: 15px;

    @media (max-width: 959px) {
      grid-template-columns: 1fr;
    }

    &--game {
      grid-template-columns: repeat(2, minmax(0, 570px));

      @media (max-width: 959px) {
        grid-template-columns: 1fr;
      }
    }

    &--cyber {
      grid-template-columns: repeat(3, minmax(0, 400px));

      @media (max-width: 959px) {
        grid-template-columns: 1fr;
      }
    }
  }

  &__card {
    height: fit-content;
    padding: 20px;
    border-radius: 15px;
    background-color: $color-dark;
  }

  &__card-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;
  }

  &__card-header-photo {
    img {
      width: 40px;
      height: 40px;
    }
  }

  &__card-header-text {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__card-header-name {
    font-family: 'Inter', Arial, sans-serif;
    font-weight: 700;
  }

  &__card-header-job {
    font-weight: 500;
    font-size: 12px;
    color: $color-purple;
  }

  &__card-description {
    font-size: 14px;
    line-height: 20px;
    color: $color-light-gray;
    margin-bottom: 20px;

    p:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  &__card-btn {
    max-width: 120px;
    font-size: 13px;
  }
}
</style>
