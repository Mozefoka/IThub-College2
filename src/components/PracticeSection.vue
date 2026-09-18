<script setup lang="ts">
interface Case {
  id: number
  name: string
}

interface Media {
  id: number
  video: string
}

const cases: Case[] = [
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
    name: 'Ещё пишем код...',
  },
]

const videos: Media[] = [
  {
    id: 1,
    video: 'https://kinescope.io/mf36B5zhp3PiNamXeRpfmS',
  },

  {
    id: 2,
    video: 'https://kinescope.io/jaQoAL3cscRbqT6kjNMBsv',
  },

  {
    id: 3,
    video: 'https://kinescope.io/uahcRbPhGh59G2CNSigKou',
  },
]
</script>

<template>
  <section class="practice">
    <div class="container">
      <div class="practice__grid">
        <h2 class="practice__title title">
          Все говорят <span>о практике</span>, а мы её показываем
        </h2>

        <div class="practice__cases">
          <p class="practice__cases-heading">Смотри кейсы кафедр</p>

          <ul class="practice__cases-tabs">
            <li v-for="caseItem in cases" class="practice__cases-tab" :key="caseItem.id">
              <a href="#">{{ caseItem.name }}</a>
            </li>
          </ul>
        </div>

        <div class="practice__video">
          <template v-for="videoItem in videos" :key="videoItem.id">
            <video
              v-if="videoItem.video.endsWith('.mp4')"
              class="practice__video-item"
              :src="videoItem.video"
              controls
              playsinline
            />
            <iframe v-else class="practice__video-item" :src="videoItem.video" allowfullscreen />
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.practice {
  padding-bottom: 80px;

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 80px 20px;

    @media (max-width: 959px) {
      grid-template-columns: 1fr;
      gap: 30px 20px;
    }
  }

  &__title {
    @media (max-width: 959px) {
      max-width: 485px;
      margin: 0 auto;
      font-size: clamp(22px, 4vw, 32px);
      text-align: center;
    }
  }

  &__cases-heading {
    font-weight: 500;
    text-transform: uppercase;
    color: $color-light-gray;
    margin-bottom: 20px;
  }

  &__cases-tabs {
    display: flex;
    flex-direction: column;
    gap: 10px;
    white-space: nowrap;

    @media (max-width: 959px) {
      flex-direction: row;
    }

    @media (max-width: 644px) {
      gap: 5px;
    }

      @media (max-width: 479px) {
        flex-wrap: wrap;
        gap: 15px;
      }
  }

  &__cases-tab {
    width: fit-content;
    position: relative;
    font-size: 12px;
    border-radius: 15px;
    background-color: $color-purple;

    @media (max-width: 769px) {
      font-size: 10px;
    }

    @media (max-width: 644px) {
      font-size: 8px;
    }

    @media (max-width: 479px) {
      font-size: 12px;
    }

    a {
      padding: 10px 35px 10px 15px;

      &:after {
        content: '';
        width: 10px;
        height: 10px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        padding-left: 30px;
        background: url('@/assets/icons/arrow_right.svg') no-repeat center / 15px;

        @media (max-width: 644px) {
          top: 55%;
          transform: translateY(-55%);
          padding-left: 15px;
          background: url('@/assets/icons/arrow_right.svg') no-repeat center / 10px;
        }
      }

      @media (max-width: 769px) {
        padding: 10px 30px 10px 10px;
      }

      @media (max-width: 644px) {
        padding: 10px 20px 10px 10px;
      }
    }

    &:last-child {
      pointer-events: none;
      cursor: default;
      color: $color-gray;
      background-color: #3d3d3d;

      a {
        &:after {
          opacity: 0.6;
        }
      }
    }
  }

  &__video {
    grid-column: 2;
    grid-row: 1 / 3;
    display: flex;
    justify-content: space-between;
    gap: 20px;

    @media (max-width: 959px) {
      grid-column: 1;
      grid-row: 2;
      justify-content: center;
    }

    @media (max-width: 479px) {
      flex-direction: column;
      align-items: center;
    }
  }

  &__video-item {
    max-width: 255px;
    border-radius: 15px;

    @media (max-width: 1299px) {
      max-width: 225px;
    }

    @media (max-width: 1099px) {
      max-width: 190px;
    }

    @media (max-width: 959px) {
      max-width: 32%;
      height: 485px;
    }

    @media (max-width: 679px) {
      height: 300px;
    }

    @media (max-width: 479px) {
      max-width: 100%;
      height: 485px;
    }
  }
}
</style>
