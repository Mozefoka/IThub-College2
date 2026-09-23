<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import BaseBadge from '@/components/ui/BaseBadge.vue'
import { images, icons } from '@/data/images.ts'

interface SuccessStory {
  id: number
  cardTitle: string
  photo: string
  studentName: string
  studentCourse: string
  badgeIcon?: string
  badgeText?: string
  description: string[]
}

interface Props {
  title?: string
  active?: boolean
  star?: string
}

const cards: SuccessStory[] = [
  {
    id: 1,
    cardTitle: 'Трудоустроился на 2 курсе',
    photo: images.roman,
    studentName: 'Никита Барановский',
    studentCourse: 'Студент ITHub СПБ, 2 курс',
    badgeIcon: icons.successStoriesIcon,
    badgeText: 'Траектория быстрого роста в ITHub',
    description: [
      'Уже на втором курсе Никита стал ведущим маркетологом в Union. Возглавил команду из четырех специалистов!',
      'Во время учебы он решал реальные задачи, участвовал в коммерческих проектах и прокачивался на бизнес-играх в ITHUB',
    ],
  },

  {
    id: 2,
    cardTitle: 'Стала призёром международного конкурса',
    photo: images.roman,
    studentName: 'Анастасия Акчурина',
    studentCourse: 'Студентка ITHub СПБ, 2 курс',
    badgeIcon: icons.successStoriesIcon,
    badgeText: 'В ITHub теория мгновенно переходит в практику',
    description: [
      'Настя заняла 3-е место на международном конкурсе рекламы «Золотой колос». С проектом, который родился на бизнес-игре в IThub — там она вместе с командой прошла путь от идеи продукта до готовой стратегии продвижения',
    ],
  },

  {
    id: 3,
    cardTitle: 'Трудоустроился на 2 курсе',
    photo: images.roman,
    studentName: 'Никита Барановский',
    studentCourse: 'Студент ITHub СПБ, 2 курс',
    badgeText:
      'Преподаватели ITHub дают студентам возможность работать с реальными бюджетами',
    description: [
      'Уже на втором курсе Никита стал ведущим маркетологом в Union. Возглавил команду из четырех специалистов!',
      'Во время учебы он решал реальные задачи, участвовал в коммерческих проектах и прокачивался на бизнес-играх в ITHUB',
    ],
  },
]

const props = withDefaults(defineProps<Props>(), {
  title: 'Истории успеха',
})

const STEP_DEG = 55
const TRAVEL = 575
const HOLD = 250
const TAIL = 100

const TITLE_IN = 150
const TITLE_HOLD = 200
const TITLE_OUT = 300
const TITLE_SHIFT = 75
const TITLE_DRIFT = 80

const WHEEL_RADIUS = 1000

const lastIndex = cards.length - 1

const pinLength =
  lastIndex * TRAVEL +
  Math.max(lastIndex - 1, 0) * HOLD +
  TAIL

const uprightAt = (index: number) =>
  index * TRAVEL + Math.max(index - 1, 0) * HOLD

const root = ref<HTMLElement | null>(null)
const scrolled = ref(0)

let frame = 0
let rootTop = 0

const updateRootTop = () => {
  const element = root.value

  if (!element) {
    return
  }

  rootTop = window.scrollY + element.getBoundingClientRect().top
}

const measure = () => {
  frame = 0

  const currentScroll = window.scrollY - rootTop

  scrolled.value = Math.min(
    Math.max(currentScroll, 0),
    pinLength,
  )
}

const onScroll = () => {
  if (frame) {
    return
  }

  frame = requestAnimationFrame(measure)
}

const onResize = () => {
  updateRootTop()
  onScroll()
}

onMounted(() => {
  updateRootTop()
  measure()

  window.addEventListener('scroll', onScroll, {
    passive: true,
  })

  window.addEventListener('resize', onResize, {
    passive: true,
  })
})

onBeforeUnmount(() => {
  if (frame) {
    cancelAnimationFrame(frame)
    frame = 0
  }

  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onResize)
})

const requestMeasure = () => {
  if (frame) {
    return
  }

  frame = requestAnimationFrame(measure)
}

onMounted(() => {
  measure()

  window.addEventListener('scroll', requestMeasure, {
    passive: true,
  })

  window.addEventListener('resize', requestMeasure, {
    passive: true,
  })
})

onBeforeUnmount(() => {
  if (frame) {
    cancelAnimationFrame(frame)
    frame = 0
  }

  window.removeEventListener('scroll', requestMeasure)
  window.removeEventListener('resize', requestMeasure)
})

const rotation = computed(() => {
  let left = scrolled.value
  let degrees = 0

  for (let index = 1; index <= lastIndex; index++) {
    const travelled = Math.min(left, TRAVEL)

    degrees -= (travelled / TRAVEL) * STEP_DEG

    left -= travelled

    if (left <= 0) {
      break
    }

    left -= Math.min(left, HOLD)

    if (left <= 0) {
      break
    }
  }

  return degrees
})

const wheelStyle = computed(() => ({
  transform: `rotate(${rotation.value}deg)`,
}))

const spokeStyle = (index: number) => ({
  transform: `rotate(${index * STEP_DEG}deg)`,
})

const headlineStyle = (index: number) => {
  const progress = scrolled.value
  const at = uprightAt(index)

  let opacity = 0
  let shift = TITLE_SHIFT

  if (progress < at - TITLE_IN) {
    opacity = 0
  } else if (progress < at) {
    const t = (progress - (at - TITLE_IN)) / TITLE_IN

    opacity = t
    shift = TITLE_SHIFT * (1 - t)
  } else if (progress < at + TITLE_HOLD || index === lastIndex) {
    opacity = 1
    shift = 0
  } else {
    const t = Math.min(
      (progress - at - TITLE_HOLD) / TITLE_OUT,
      1,
    )

    opacity = 1 - t
    shift = -TITLE_DRIFT * t
  }

  return {
    opacity,
    transform: `translateY(${shift}px)`,
  }
}
</script>

<template>
  <section
    ref="root"
    class="success-stories"
    :style="{
      '--pin-length': `${pinLength}px`,
      '--wheel-radius': `${WHEEL_RADIUS}px`,
    }"
  >
    <div
      class="success-stories__stage"
      :class="{
        'success-stories__stage--bg': props.active,
      }"
    >
      <div class="success-stories__stage-content">
        <div
          class="success-stories__headlines"
          aria-hidden="true"
        >
          <div
            v-for="(story, index) in cards"
            :key="story.id"
            class="success-stories__headline"
            :style="headlineStyle(index)"
          >
            <h2
              v-if="index === 0"
              class="success-stories__title"
              :class="{
                'success-stories__title--size': props.active,
              }"
            >
              {{ props.title }}
            </h2>

            <h3
              class="success-stories__stage-title title-md"
            >
              {{ story.cardTitle }}
            </h3>
          </div>
        </div>

        <img
          v-if="props.star"
          class="success-stories__star"
          :src="props.star"
          alt="Звезда"
        />

        <div
          class="success-stories__wheel"
          :style="wheelStyle"
        >
          <div
            v-for="(story, index) in cards"
            :key="story.id"
            class="success-stories__spoke"
            :style="spokeStyle(index)"
          >
            <article class="success-stories__card">
              <div class="success-stories__card-photo">
                <img
                  :src="story.photo"
                  alt="Студент"
                />
              </div>

              <div
                class="success-stories__card-panel"
                :class="{
                  'success-stories__card-panel--change':
                    props.active,
                }"
              >
                <p class="success-stories__card-panel-name">
                  {{ story.studentName }}
                </p>

                <p class="success-stories__card-panel-course">
                  {{ story.studentCourse }}
                </p>

                <div
                  class="success-stories__card-panel-badge"
                >
                  <BaseBadge
                    v-if="story.badgeText"
                    :img="story.badgeIcon"
                    border="secondary"
                  >
                    {{ story.badgeText }}
                  </BaseBadge>
                </div>

                <div
                  class="success-stories__card-panel-description"
                >
                  <p
                    v-for="(paragraph, i) in story.description"
                    :key="i"
                  >
                    {{ paragraph }}
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div
          class="success-stories__fade success-stories__fade--left"
        ></div>

        <div
          class="success-stories__fade success-stories__fade--right"
        ></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.success-stories {
  --zoom-width: 1.6;
  --zoom-height: 1.6;
  --zoom: min(var(--zoom-width), var(--zoom-height));

  --viewport-height: 100vh;

  --card-top: 150px;
  --fade-window: 360px;

  position: relative;
  height: calc(var(--viewport-height) + var(--pin-length));
  background-color: $color-black;
  margin-bottom: $margin-bottom;

  @supports (height: 100svh) {
    --viewport-height: 100svh;
  }

  @media (max-width: 1150px) {
    --zoom-width: 1.4;
  }

  @media (max-width: 959px) {
    --zoom-width: 1.2;
    --zoom-height: 1.45;
  }

  @media (max-height: 879px) {
    --zoom-height: 1.3;
  }

  @media (max-height: 789px) {
    --zoom-height: 1.15;
  }

  @media (max-height: 699px) {
    --zoom-height: 1;
  }

  @media (max-width: 639px) {
    --zoom-width: 1.2;
    --card-top: 150px;
  }

  @media (max-height: 614px) {
    --zoom-height: 0.9;
  }

  @media (max-width: 500px) {
    --zoom-width: 1.15;
    --card-top: 160px;
    --fade-window: 300px;
  }

  &__stage {
    position: sticky;
    top: 0;
    height: var(--viewport-height);
    overflow: hidden;
    background-color: $color-black;
  }

  &__stage-content {
    position: relative;

    width: calc(100% / var(--zoom));
    height: calc(var(--viewport-height) / var(--zoom));

    margin: 0 auto;

    overflow: hidden;

    background: radial-gradient(
      ellipse 100% 50% at 50% 50%,
      rgba(142, 66, 235, 0.6) 0%,
      rgba(142, 66, 235, 0.25) 40%,
      transparent 70%
    );

    transform: scale(var(--zoom));
    transform-origin: top center;

    will-change: transform;
    backface-visibility: hidden;
  }

  &__stage--bg {
    .success-stories__stage-content {
      background: radial-gradient(
        ellipse 40% 30% at 50% 30%,
        rgba(155, 37, 237, 0.6) 30%,
        rgba(142, 66, 235, 0.25) 90%,
        transparent 100%
      );
    }
  }

  &__title {
    position: relative;
    z-index: 3;

    padding-top: 20px;
    margin-bottom: 20px;

    font-weight: 700;
    font-size: clamp(14px, 1.5vw, 18px);
    line-height: clamp(16px, 2vw, 20px);

    opacity: 0.3;

    &--size {
      max-width: 330px;

      font-weight: 400;

      opacity: 1;
    }
  }

  &__stage-title {
    max-width: 555px;
    margin: 0 auto;
  }

  &__headlines {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;

    width: 100%;
    height: var(--card-top);

    pointer-events: none;
  }

  &__headline {
    position: absolute;
    inset: auto 0 0;

    max-width: 700px;

    padding: 0 15px 10px;
    margin: 0 auto;

    text-align: center;

    will-change: opacity, transform;
  }

  &__wheel {
    position: absolute;

    top: calc(var(--card-top) + var(--wheel-radius));
    left: 50%;

    width: calc(var(--wheel-radius) * 2);
    height: calc(var(--wheel-radius) * 2);

    margin-top: calc(var(--wheel-radius) * -1);
    margin-left: calc(var(--wheel-radius) * -1);

    will-change: transform;
  }

  &__star {
    position: absolute;

    top: calc(var(--card-top) + 210px);
    left: 50%;

    width: 632px;
    height: 215px;

    transform: translate(-50%, -50%);
  }

  &__fade {
    position: absolute;

    top: 0;
    bottom: 0;
    z-index: 2;

    width: max(
      0px,
      calc((100% - var(--fade-window)) / 2)
    );

    pointer-events: none;
  }

  &__fade--left {
    left: 0;

    background: linear-gradient(
      to right,
      $color-black 45%,
      rgba($color-black, 0.94) 50%,
      rgba($color-black, 0.81) 60%,
      rgba($color-black, 0.61) 70%,
      rgba($color-black, 0.33) 80%,
      rgba($color-black, 0.03) 90%,
      rgba($color-black, 0) 100%
    );
  }

  &__fade--right {
    right: 0;

    background: linear-gradient(
      to left,
      $color-black 45%,
      rgba($color-black, 0.94) 50%,
      rgba($color-black, 0.81) 60%,
      rgba($color-black, 0.61) 70%,
      rgba($color-black, 0.33) 80%,
      rgba($color-black, 0.03) 90%,
      rgba($color-black, 0) 100%
    );
  }

  &__spoke {
    position: absolute;
    inset: 0;
  }

  &__card {
    position: absolute;

    top: 0;
    left: 50%;
    z-index: 1;

    width: 460px;

    display: flex;
    flex-direction: column;
    align-items: center;

    transform: translateX(-50%);
  }

  &__card-title {
    position: absolute;

    width: 1px;
    height: 1px;

    overflow: hidden;

    clip-path: inset(50%);

    white-space: nowrap;
  }

  &__card-photo {
    width: 100%;
    max-width: 300px;
    height: 300px;

    img {
      width: 100%;
      height: 100%;

      object-fit: cover;
      object-position: center top;
    }
  }

  &__card-panel {
    position: relative;
    top: -80px;

    max-width: 400px;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 10px;

    padding: 20px;

    border-radius: 15px;

    background-color: $color-dark;

    text-align: center;

    @media (max-width: 500px) {
      max-width: 290px;
    }

    &--change {
      max-width: 600px;

      align-items: flex-start;

      padding: 20px 0 0 0;

      border-top: 1px solid;
      border-radius: 0;

      background-color: $color-black;

      text-align: left;

      @media (max-width: 729px) {
        max-width: 300px;
      }
    }
  }

  &__card-panel-name {
    font-weight: 700;
    font-size: clamp(14px, 1.5vw, 18px);
  }

  &__card-panel-course {
    margin-bottom: 20px;

    color: $color-gray;

    font-size: clamp(12px, 1vw, 14px);
  }

  &__card-panel-badge {
    position: absolute;

    top: -40px;
    right: -65px;

    z-index: 2;

    max-width: 180px;

    transform: rotate(15deg);

    @media (max-width: 639px) {
      position: static;

      order: 3;

      margin-top: 20px;

      transform: rotate(10deg);
    }
  }

  &__card-panel-description {
    display: flex;
    flex-direction: column;

    gap: 20px;

    font-size: clamp(12px, 1vw, 14px);
    line-height: 1.15;
  }
}

@media (prefers-reduced-motion: reduce) {
  .success-stories {
    height: auto;

    &__stage {
      position: static;

      height: auto;

      overflow: visible;
    }

    &__stage-content {
      width: 100%;
      height: auto;

      margin: 0;

      overflow: visible;

      transform: none !important;
    }

    &__headlines,
    &__star,
    &__fade {
      display: none;
    }

    &__wheel {
      position: static;

      display: flex;
      flex-direction: column;
      align-items: center;

      gap: 60px;

      width: auto;
      height: auto;

      margin: 40px 0 0;

      transform: none !important;
    }

    &__spoke {
      position: static;

      transform: none !important;
    }

    &__card {
      position: static;

      width: 100%;
      max-width: 460px;

      transform: none;
    }

    &__card-title {
      position: static;

      width: auto;
      height: auto;

      overflow: visible;

      clip-path: none;

      max-width: 340px;

      margin-bottom: 20px;

      white-space: normal;
      text-align: center;
    }
  }
}
</style>
