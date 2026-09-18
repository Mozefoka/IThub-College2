<script setup lang="ts">
import ButtonCta from '@/components/ui/ButtonCta.vue'
</script>

<template>
  <section class="invite">
    <div class="invite__ready">
      <img :src="icons.readyStudyGo" alt="ready study go">
    </div>

    <div class="container">
      <div class="invite__inner">
        <div class="invite__content">
          <div class="invite__header">
            <p class="invite__header-date">20 сентября, 13:30</p>
            <h2 class="invite__header-title title">Приглашаем на <span>День открытых дверей</span>!</h2>
            <p class="invite__header-description">
              Познакомьтесь с нашими преподавателями, методом обучения и узнайте с помощью профориентации, какая профессия наиболее подойдет вашему ребенку
            </p>
          </div>

          <div class="invite__actions">
            <div class="invite__header-btn">
              <ButtonCta text="ЗАРЕГИСТРИРОВАТЬСЯ" />
            </div>

            <div class="invite__header-btn">
              <a class="link" href="#">УЗНАТЬ ПОДРОБНЕЕ</a>
            </div>
          </div>
        </div>

        <div class="invite__gallery">
          <div class="invite__gallery-photo invite__gallery-photo--top">
            <img :src="images.polaroid" alt="Студенты">
          </div>

          <div class="invite__gallery-photo invite__gallery-photo--bottom">
            <img :src="images.polaroid2" alt="Студенты">
          </div>

          <div class="invite__gallery-hand">
            <img :src="icons.hand" alt="Указатель">
          </div>

          <div class="invite__gallery-mascot">
            <img :src="images.mascot" alt="Маскот">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.invite {
  margin-bottom: 80px;

    @media (max-width: 959px) {
      margin-bottom: 120px;
    }

    @media (max-width: 639px) {
      margin-bottom: 80px;
    }

  &__ready {
    max-width: 1400px;
    margin: 50px auto 100px;
  }

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

      @media (max-width: 479px) {
        position: relative;
        flex-direction: column;
      }
  }

  &__content {
    max-width: 550px;

    @media (max-width: 479px) {
      max-width: 100%;
      text-align: center;
    }
  }

  &__header {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 100px;

    @media (max-width: 639px) {
      margin-bottom: 20px;
    }

    @media (max-width: 479px) {
      align-items: center;
      margin-bottom: 270px;
    }
  }

  &__header-date {
    max-width: 170px;
    padding: 10px;
    font-family: 'Inter', Arial, sans-serif;
    font-weight: 600;
    font-size: 14px;
    text-align: center;
    border-radius: 20px;
    border: 1px solid $color-purple;
  }

  &__header-description {
    font-size: clamp(14px, 1vw, 18px);
    line-height: 25px;
    color: $color-light-gray;
  }

  &__actions {
    max-width: 300px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (max-width: 479px) {
      max-width: 100%;
    }
  }

  &__gallery {
    width: 100%;
    position: relative;

    @media (max-width: 479px) {
      position: absolute;
      left: 0;
      bottom: 130px;
    }
  }

  &__gallery-photo {
    width: 330px;
    position: absolute;

    @media (max-width: 1339px) {
      width: 260px;
    }

    @media (max-width: 1199px) {
      width: 220px;
    }

      @media (max-width: 959px) {
        width: 240px;
      }

    @media (max-width: 639px) {
      display: none;
    }

    &--top {
      top: 0;
      left: 140px;
      z-index: 1;

      @media (max-width: 1199px) {
        left: 90px;
      }

      @media (max-width: 1009px) {
        left: 40px;
      }

      @media (max-width: 959px) {
        top: -100px;
        left: 65px;
      }
    }

    &--bottom {
      left: 33px;
      bottom: 0;
      z-index: 2;

      @media (max-width: 1339px) {
        bottom: 80px;
      }

      @media (max-width: 1199px) {
        left: 0;
      }

      @media (max-width: 1009px) {
        left: -40px;
      }

      @media (max-width: 959px) {
        left: -20px;
        bottom: 100px;
      }
    }
  }

  &__gallery-hand {
    max-width: 270px;
    position: absolute;
    left: -70px;
    bottom: 0;
    z-index: 3;
    transform: rotate(-20deg);

      @media (max-width: 1339px) {
        max-width: 230px;
      }

    @media (max-width: 1199px) {
      max-width: 210px;
    }

    @media (max-width: 959px) {
      max-width: 150px;
      left: -70px;
      bottom: -55px;
    }

      @media (max-width: 699px) {
        left: -40px;
      }

      @media (max-width: 639px) {
        display: none;
      }
  }

  &__gallery-mascot {
    position: relative;
    max-width: 440px;
    height: 515px;
    right: -320px;
    z-index: 4;

    img {
      object-fit: contain;
    }

      @media (max-width: 1339px) {
        max-width: 390px;
        right: -230px;
      }

      @media (max-width: 1199px) {
        max-width: 300px;
        right: -160px;
      }

    @media (max-width: 1009px) {
      right: -110px;
    }

      @media (max-width: 959px) {
        width: 320px;
        height: 370px;
        right: 0;
        z-index: 4;
        bottom: -145px;
      }

    @media (max-width: 639px) {
      position: static;
      width: 210px;
      height: 260px;

      img {
        object-fit: cover;
      }
    }

    @media (max-width: 479px) {
      margin: 0 auto;
    }
  }
}
</style>
