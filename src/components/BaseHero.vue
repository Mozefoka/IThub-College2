<script setup lang="ts">
import ButtonCta from '@/components/ui/ButtonCta.vue'
import BaseSlider from '@/components/BaseSlider.vue'

interface Tab {
  id: number
  name: string
}

interface Video {
  video: string
  type: 'video' | 'iframe'
}

const props = defineProps<Video>()

const tabs: Tab[] = [
  {
    id: 1,
    name: 'Информационная безопасность',
  },

  {
    id: 2,
    name: 'Программирование и управление ИТ-продуктом',
  },

  {
    id: 3,
    name: 'Дизайн',
  },

  {
    id: 4,
    name: 'Разработка игр',
  },

  {
    id: 5,
    name: 'Маркетинг и коммерция',
  },
]
</script>

<template>
  <section class="hero">
    <div class="container">
      <div class="hero__inner">
        <div class="hero__content">
          <div class="hero__text">
            <p class="hero__eyebrow">Колледж информационных и креативных технологий</p>
            <h1 class="hero__title">
              <strong>Колледж IThub</strong> <br />
              в Санкт-Петербурге
            </h1>
          </div>

          <div class="hero__actions">
            <div class="hero__btn">
              <ButtonCta text="ПОДАТЬ ДОКУМЕНТЫ" />
            </div>

            <div class="hero__btn">
              <a href="#" class="link">КОНСУЛЬТАЦИЯ ПО ПОСТУПЛЕНИЮ</a>
            </div>
          </div>

          <ul class="hero__tabs">
            <li v-for="tab in tabs" class="hero__tab" :key="tab.id">
              <a href="#">{{ tab.name }}</a>
            </li>
          </ul>
        </div>

        <div class="hero__gallery">
          <div class="hero__gallery-top">
            <img :src="images.dino" alt="Студенты" />
            <img :src="icons.badge" class="hero__gallery-top-badge" alt="Студенты" />
          </div>

          <div class="hero__gallery-item hero__gallery-item--first">
            <img :src="images.students" alt="Студенты" />
          </div>

          <div class="hero__gallery-item hero__gallery-item--second">
            <img :src="images.students2" alt="Студенты" />
          </div>

          <div class="hero__gallery-item hero__gallery-item--slider">
            <BaseSlider :images="[images.students, images.students2, images.students3]" />
          </div>

          <div class="hero__gallery-video">
            <video
              v-if="props.type === 'video'"
              class="hero__gallery-video-item"
              :src="props.video"
              autoplay
              muted
              loop
              playsinline
            />
            <iframe
              v-else
              class="hero__gallery-video-item"
              :src="`${props.video}?background=1`"
              allow="autoplay"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  padding: 40px 0;
  font-size: 15px;
  background: url('@/assets/images/hero_bg.webp') no-repeat center / cover;

  @media (max-width: 1199px) {
    padding: 80px 0;
  }

  @media (max-width: 959px) {
    padding: 20px 0 50px;
  }

  &__inner {
    display: flex;
    justify-content: space-between;
    gap: 30px;

    @media (max-width: 959px) {
      flex-direction: column-reverse;
    }
  }

  &__content {
    max-width: 580px;
    margin: auto 0;

    @media (max-width: 1199px) {
      max-width: 475px;
    }

    @media (max-width: 599px) {
      max-width: 100%;
    }
  }

  &__eyebrow {
    max-width: 300px;
    margin-bottom: 10px;
  }

  &__title {
    font-family: 'TTFirsNeue', Arial, sans-serif;
    font-size: clamp(30px, 3vw, 50px);
    line-height: clamp(35px, 3vw, 60px);
    margin-bottom: 20px;

    @media (max-width: 599px) {
      margin-bottom: 30px;
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 100px;

    @media (max-width: 1399px) {
      font-size: 12px;
    }

    @media (max-width: 959px) {
      margin-bottom: 40px;
    }

    @media (max-width: 599px) {
      flex-direction: column;
    }
  }

  &__btn {
    width: fit-content;

    @media (max-width: 599px) {
      width: 100%;
    }
  }

  &__tabs {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
  }

  &__tab {
    max-width: 340px;
    width: fit-content;
    padding: 10px;
    border-radius: 15px;
    line-height: 20px;
    color: $color-white;
    background-color: $color-dark;
    text-transform: uppercase;
    white-space: break-spaces;
  }

  &__gallery {
    width: 100%;
    position: relative;
  }

  &__gallery-top {
    position: relative;
    max-width: 400px;
    max-height: 230px;
    margin: 0 auto;
    z-index: 4;

    @media (max-width: 959px) {
      display: none;
    }
  }

  &__gallery-top-badge {
    max-width: 120px;
    max-height: 120px;
    position: absolute;
    top: -25px;
    left: -80px;
    transform: rotate(15deg);
  }

  &__gallery-item {
    max-width: 280px;
    max-height: 385px;
    position: absolute;

    @media (max-width: 1399px) {
      max-width: 220px;
    }

    @media (max-width: 959px) {
      display: none;
    }

    &--first {
      top: 125px;
      left: 75px;

      @media (max-width: 1199px) {
        top: 250px;
        left: 45%;
        transform: translateX(-45%);
      }
    }

    &--second {
      top: 150px;
      left: 50px;

      @media (max-width: 1199px) {
        top: 275px;
        left: 40%;
        transform: translateX(-40%);
      }
    }

    &--slider {
      top: 175px;
      left: 25px;

      @media (max-width: 1199px) {
        top: 300px;
        left: 35%;
        transform: translateX(-35%);
      }
    }
  }

  &__gallery-video {
    max-width: 280px;
    height: 385px;
    position: relative;
    top: -15%;
    right: -60%;
    z-index: 5;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: -80px;
      width: 100%;
      height: 100px;
      background: url('@/assets/icons/long_star.svg') no-repeat center / contain;

      @media (max-width: 959px) {
        background: url('@/assets/icons/long_star.svg') no-repeat right / contain;
      }

      @media (max-width: 599px) {
        width: 200px;
        left: unset;
        bottom: -40px;
      }
    }

    @media (max-width: 1399px) {
      max-width: 220px;
      right: -55%;
    }

    @media (max-width: 1199px) {
      height: 300px;
    }

    @media (max-width: 959px) {
      max-width: 100%;
      height: 550px;
      top: unset;
      right: unset;

      &:after {
        content: '';
        width: 125px;
        height: 125px;
        position: absolute;
        top: -5px;
        right: -5px;
        transform: rotate(15deg);
        background: url('@/assets/icons/badge.webp') no-repeat center / cover;
      }
    }

    @media (max-width: 599px) {
      height: 400px;
    }
  }

  &__gallery-video-item {
    width: 100%;
    height: 100%;
  }
}
</style>
