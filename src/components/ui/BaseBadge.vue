<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    padding?: 'small'
    border?: 'primary' | 'secondary'
    img?: string
  }>(),
  {
    border: 'primary',
  },
)
</script>

<template>
  <div class="base-badge" :class="{ [`base-badge--${props.padding}`]: props.padding }">
    <div class="base-badge__inner" :class="[`base-badge__inner--${props.border}`]">
      <img v-if="props.img" :src="props.img" alt="Иконка" />
      <p class="base-badge__text">
        <slot />
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.base-badge {
  width: 100%;
  position: relative;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: $color-purple;
  text-align: center;

  &--padding-small {
    padding: 3px;
  }

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    padding: 5px 10px;
    border-radius: 10px;
    font-size: 10px;
    text-align: center;

    img {
      width: 30px;
      height: 30px;
    }

    &--primary {
      font-weight: 700;
      border: solid 2px $color-white;
    }

    &--secondary {
      font-weight: 500;
      border: solid 1px $color-white;
    }
  }

  &__text {
    font-weight: 600;
  }
}
</style>
