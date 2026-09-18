<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import 'vue3-carousel/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

interface Props {
  images: string[]
  autoplay?: boolean
  interval?: number
}

interface CarouselInstance {
  next: () => void
}

const props = withDefaults(defineProps<Props>(), {
  autoplay: true,
  interval: 3000,
})


const carouselRef = ref<CarouselInstance | null>(null)

let timer: ReturnType<typeof setInterval> | null = null

function next(): void {
  if (props.images.length <= 1) return

  carouselRef.value?.next()
}

function play(): void {
  if (!props.autoplay || props.images.length <= 1) {
    return
  }

  stop()

  timer = setInterval(() => {
    next()
  }, props.interval)
}

function stop(): void {
  if (timer !== null) {
    clearInterval(timer)
    timer = null
  }
}

function pause(): void {
  stop()
}

function resume(): void {
  play()
}

function handleVisibilityChange(): void {
  if (document.hidden) {
    stop()
  } else {
    resume()
  }
}

onMounted(() => {
  play()
  document.addEventListener('visibilitychange', handleVisibilityChange)
})

onBeforeUnmount(() => {
  stop()
  document.removeEventListener('visibilitychange', handleVisibilityChange)
})
</script>

<template>
  <div
    v-if="props.images.length"
    class="slider"
    @mouseenter="pause"
    @mouseleave="resume"
  >
    <Carousel
      ref="carouselRef"
      :items-to-show="1"
      :wrap-around="true"
      :transition="400"
    >
      <Slide
        v-for="(image, index) in props.images"
        :key="index"
      >
        <div class="slider__slide">
          <img
            class="slider__img"
            :src="image"
            :alt="`slide-${index}`"
          />
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<style lang="scss" scoped>
.slider {
  width: 100%;
  height: 100%;
  overflow: hidden;

  &__slide {
    flex: 0 0 100%;
    min-width: 0;
    height: 100%;
  }

  &__img {
    width: 100%;
    height: 100%;
  }
}
</style>
