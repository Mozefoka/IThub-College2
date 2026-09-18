<script setup lang="ts">
import ButtonCta from '@/components/ui/ButtonCta.vue'
</script>

<template>
  <section class="profession">
    <div class="container">
      <div class="profession__header">
        <h2 class="profession__title title">Не знаешь, <span>какую профессию</span> выбрать?</h2>
        <p class="profession__subtitle subtitle">Наша бесплатная профориентация подскажет тебе нужное направление</p>
      </div>

      <div class="profession__content">
        <div class="profession__directions">
          <img :src="images.game" alt="Направление профессии" class="profession__directions-item profession__directions-item--first">
          <img :src="images.game" alt="Направление профессии" class="profession__directions-item profession__directions-item--second">
          <img :src="images.game" alt="Направление профессии" class="profession__directions-item profession__directions-item--third">
          <img :src="images.game" alt="Направление профессии" class="profession__directions-item profession__directions-item--fourth">
          <img :src="images.game" alt="Направление профессии" class="profession__directions-item profession__directions-item--fifth">
        </div>

        <div class="profession__student">
          <img :src="images.student" alt="Студент">
          <div class="profession__student-btn">
            <ButtonCta text="ЗАПИСАТЬСЯ" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.profession {
  position: relative;
  padding: 100px 0;
  overflow: hidden;
  background: url("@/assets/icons/dots.svg") no-repeat center;

  &__header {
    max-width: 620px;
    margin: 0 auto 40px;
    text-align: center;
  }

  &__subtitle {
    margin: 0;
    font-size: 16px;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.55);
  }

  &__content {
    position: relative;
    height: 560px;

      @media (max-width: 679px) {
        height: 450px;
      }

      @media (max-width: 539px) {
        height: 290px;
      }
  }

  &__directions {
    position: absolute;
    inset: 0;
    z-index: 1;

      @media (max-width: 539px) {
        background: radial-gradient(circle, rgba(168, 85, 247, 0.55) 30%, rgba(168, 85, 247, 0) 50%);
      }
  }

  &__directions-item {
    position: absolute;
    top: 40%;
    left: 50%;
    width: 150px;
    height: auto;
    border-radius: 15px;

      @media (max-width: 824px) {
        width: 120px;
      }

      @media (max-width: 679px) {
        width: 90px;
      }

      @media (max-width: 539px) {
        width: 65px;
      }

    &--first {
      transform: translate(calc(-50% - 300px), calc(-50% + 80px)) rotate(-50deg);

        @media (max-width: 824px) {
          transform: translate(calc(-50% - 230px), calc(-50% + 50px)) rotate(-50deg);
        }

        @media (max-width: 679px) {
          transform: translate(calc(-50% - 210px), calc(-50% + 50px)) rotate(-50deg);
        }

        @media (max-width: 539px) {
          transform: translate(calc(-50% - 155px), calc(-50% + 50px)) rotate(-50deg);
        }
    }

    &--second {
      transform: translate(calc(-50% - 170px), calc(-50% - 70px)) rotate(-30deg);

        @media (max-width: 824px) {
          transform: translate(calc(-50% - 120px), calc(-50% - 50px)) rotate(-30deg);
        }

        @media (max-width: 679px) {
          transform: translate(calc(-50% - 120px), calc(-50% - 25px)) rotate(-30deg);
        }

        @media (max-width: 539px) {
          transform: translate(calc(-50% - 90px), calc(-50% - 25px)) rotate(-30deg);
        }
    }

    &--third {
      transform: translate(calc(-50% + 20px), calc(-50% - 140px));

      @media (max-width: 824px) {
        transform: translate(calc(-50% + 20px), calc(-50% - 110px));
      }

        @media (max-width: 679px) {
          transform: translate(calc(-50% + 0px), calc(-50% - 80px))
        }
    }

    &--fourth {
      transform: translate(calc(-50% + 210px), calc(-50% - 70px)) rotate(30deg);

      @media (max-width: 824px) {
        transform: translate(calc(-50% + 160px), calc(-50% - 55px)) rotate(30deg);
      }

        @media (max-width: 679px) {
          transform: translate(calc(-50% + 120px), calc(-50% - 30px)) rotate(30deg);
        }

        @media (max-width: 539px) {
          transform: translate(calc(-50% + 90px), calc(-50% - 30px)) rotate(30deg);
        }
    }

    &--fifth {
      transform: translate(calc(-50% + 320px), calc(-50% + 85px)) rotate(50deg);

        @media (max-width: 824px) {
          transform: translate(calc(-50% + 260px), calc(-50% + 50px)) rotate(50deg);
        }

        @media (max-width: 679px) {
          transform: translate(calc(-50% + 200px), calc(-50% + 50px)) rotate(50deg);
        }

        @media (max-width: 539px) {
          transform: translate(calc(-50% + 145px), calc(-50% + 50px)) rotate(50deg);
        }
    }
  }

  &__student {
    position: absolute;
    top: 70%;
    left: 50%;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translate(-50%, -60%);

    &::before {
      content: "";
      position: absolute;
      top: 40%;
      left: 50%;
      z-index: -1;
      width: 450px;
      height: 450px;
      background: radial-gradient(circle, rgba(168, 85, 247, 0.55) 30%, rgba(168, 85, 247, 0) 70%);
      filter: blur(20px);
      transform: translate(-50%, -50%);

        @media (max-width: 539px) {
          background: none;
        }
    }

    @media (max-width: 679px) {
      left: 46%;
      transform: translate(-46%, -50%);
    }

    img {
      max-width: 450px;
      width: 100%;
      height: auto;
    }
  }
}
</style>
