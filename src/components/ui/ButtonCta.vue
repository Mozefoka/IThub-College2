<script setup lang="ts">
interface ButtonProps {
  text: string
  size?: 'large' | 'medium' | 'small'
  form?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
  size: 'medium',
})

const scrollToLeadForm = () => {
  document.getElementById('lead-form-checkbox')?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}
</script>

<template>
  <button v-if="form" type="submit" class="button-cta" :class="[`button-cta--${props.size}`]">
    {{ props.text }}
  </button>

  <button
    v-else
    type="button"
    class="button-cta"
    :class="[`button-cta--${props.size}`]"
    @click="scrollToLeadForm"
  >
    {{ props.text }}
  </button>
</template>

<style scoped lang="scss">
.button-cta {
  width: 100%;
  font-weight: 600;
  border-radius: 10px;
  background-color: $color-purple;
  color: $color-white;

  &--large {
    padding: 22px;
  }

  &--medium {
    padding: 17px 20px;
    font-size: clamp(12px, 1vw, 15px);
  }

  &--small {
    padding: 10px;
    font-weight: 700;
  }
}
</style>
