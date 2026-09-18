<script setup lang="ts">
import { ref } from 'vue';
import 'vue3-carousel/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';

interface NewsItem {
  id: number;
  image: string;
  title: string;
  text: string;
}

const newsList: NewsItem[] = [
  {
    id: 1,
    image: images.cybersport,
    title: 'Проведение киберспортивного турнира',
    text: 'Команды benz_q и code_casters — первые чемпионы IThub по CS2 и Dota 2. Турнир проводил CyberHub — студенческий клуб на базе колледжа для тех, кто хочет профессионально развиваться в киберспорте.',
  },

  {
    id: 2,
    image: images.cybersport,
    title: 'Погрузились в искусство каллиграфии',
    text: 'Каждый дизайнер знает, что хороший шрифт всегда взаимосвязан с каллиграфией: анатомия букв любого алфавита подчиняется законам ручного письма. На мастер-классе от нашей преподавательницы Евы Янковской хабсы осваивали логику европейской каллиграфии, чтобы понять, как работает шрифтовая наука.',
  },

  {
    id: 3,
    image: images.cybersport,
    title: 'Выпускной школы амбассадоров',
    text: 'Школа амбассадоров — проект, выпускники которого будут официально представлять IThub СПб на мероприятиях разного уровня. У проекта был отборочный тур, его прошли 13 человек из 60! В течение месяца хабсы прокачивались в навыке самопрезентации, ораторском мастерстве и организации собственных мастер-классов.',
  },

  {
    id: 4,
    image: images.calligraphy,
    title: 'Выпускной школы амбассадоров',
    text: 'Школа амбассадоров — проект, выпускники которого будут официально представлять IThub СПб на мероприятиях разного уровня. У проекта был отборочный тур, его прошли 13 человек из 60! В течение месяца хабсы прокачивались в навыке самопрезентации, ораторском мастерстве и организации собственных мастер-классов.',
  },

  {
    id: 5,
    image: images.calligraphy,
    title: 'Погрузились в искусство каллиграфии',
    text: 'Каждый дизайнер знает, что хороший шрифт всегда взаимосвязан с каллиграфией: анатомия букв любого алфавита подчиняется законам ручного письма. На мастер-классе от нашей преподавательницы Евы Янковской хабсы осваивали логику европейской каллиграфии, чтобы понять, как работает шрифтовая наука.',
  },

  {
    id: 6,
    image: images.calligraphy,
    title: 'Погрузились в искусство каллиграфии',
    text: 'Каждый дизайнер знает, что хороший шрифт всегда взаимосвязан с каллиграфией: анатомия букв любого алфавита подчиняется законам ручного письма. На мастер-классе от нашей преподавательницы Евы Янковской хабсы осваивали логику европейской каллиграфии, чтобы понять, как работает шрифтовая наука.',
  },
];

const carousel = ref();

const goPrev = (): void => {
  carousel.value?.prev();
};

const goNext = (): void => {
  carousel.value?.next();
};

const carouselConfig = {
  itemsToShow: 3,
  wrapAround: true,
  snapAlign: 'start' as const,
  transition: 400,
};

const breakpoints = {
  0: {
    itemsToShow: 1,
  },
  640: {
    itemsToShow: 2,
  },
  970: {
    itemsToShow: 3,
  },
};
</script>

<template>
  <section class="news-section">
    <h2 class="news-section__title title">
      <span>Новости</span> IThub Санкт-Петербург
    </h2>

    <div class="news-section__slider">
      <button
        type="button"
        class="news-section__arrow news-section__arrow--prev"
        aria-label="Предыдущие новости"
        @click="goPrev"
      >
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
        >
          <path
            d="M15 4L7 12L15 20"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <Carousel
        ref="carousel"
        v-bind="carouselConfig"
        :breakpoints="breakpoints"
        class="news-carousel"
      >
        <Slide
          v-for="item in newsList"
          :key="item.id"
          class="news-section__slide"
        >
          <article class="news-card">
            <div class="news-card__image-wrap">
              <img
                class="news-card__image"
                :src="item.image"
                :alt="item.title"
              />
            </div>

            <div class="news-card__text">
              <h3 class="news-card__title">
                {{ item.title }}
              </h3>

              <p class="news-card__description">
                {{ item.text }}
              </p>
            </div>
          </article>
        </Slide>
      </Carousel>

      <button
        type="button"
        class="news-section__arrow news-section__arrow--next"
        aria-label="Следующие новости"
        @click="goNext"
      >
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
        >
          <path
            d="M9 4L17 12L9 20"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </section>
</template>

<style lang="scss">
.news-section {
  position: relative;
  padding: 80px 15px;
  overflow: hidden;
  margin-bottom: $margin-bottom;

  &__title {
    text-align: center;
    margin-bottom: 50px;
  }

  .news-carousel {
    max-width: 1170px;
    margin: 0 auto;
  }

  &__slider {
    position: relative;
  }

  &__slide {
    padding: 0 15px;
  }

  &__arrow {
    position: absolute;
    top: 50%;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: $color-purple;
    color: $color-white;
    cursor: pointer;
    transform: translateY(-50%);
    transition: all 0.2s ease;

    &--prev {
      left: 0;
    }

    &--next {
      right: 0;
    }

    &:hover {
      color: $color-purple;
      background-color: $color-white;
    }
  }
}

.news-carousel {
  width: 100%;
}

.news-card {
  flex: 1 1 360px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  background-color: $color-dark;

  &__image {
    border-radius: 15px;
  }

  &__text {
    padding: 20px;
  }

  &__title {
    margin: 0 0 10px;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.3;
  }

  &__description {
    line-height: 1.5;
    color: $color-light-gray;
  }
}

@media (max-width: 959px) {
  .news-section {
    padding: 50px 15px;

    &__arrow {
      width: 25px;
      height: 25px;
    }
  }
}

@media (max-width: 639px) {
  .news-section {
    padding: 40px 16px;

    &__title {
      font-size: 22px;
    }
  }

  .news-card {
    flex-grow: 0;
    &__title {
      font-size: 16px;
    }

    &__text {
      font-size: 13px;
    }
  }
}
</style>
