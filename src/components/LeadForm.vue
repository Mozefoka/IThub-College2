<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import ButtonCta from '@/components/ui/ButtonCta.vue'

interface ContactMethod {
  value: string
  label: string
}

interface Department {
  value: string
  label: string
}

interface Country {
  code: string
  name: string
  dialCode: string
  flag: string
  mask: string
}

interface FormData {
  name: string
  email: string
  phone: string
  telegram: string
  department: string
  grade: string
  contactMethod: string
  contactMethods: string[]
  consent: boolean
  marketingConsent: boolean
}

interface SubmitPayload extends FormData {
  phone: string
  countryCode: string
}

interface PhoneInputEvent extends Event {
  target: EventTarget | null
}

interface Props {
  variant?: 'default' | 'checkbox'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
})

const emit = defineEmits<{
  (event: 'submit', payload: SubmitPayload): void
}>()

const grades = [9, 10, 11]

const departments: Department[] = [
  {
    value: 'development',
    label: 'Разработка',
  },
  {
    value: 'marketing',
    label: 'Маркетинг',
  },
  {
    value: 'management',
    label: 'Менеджмент',
  },
]

const contactMethods: ContactMethod[] = [
  {
    value: 'call',
    label: 'Позвонить',
  },
  {
    value: 'whatsapp',
    label: 'WhatsApp',
  },
  {
    value: 'max',
    label: 'Max',
  },
  {
    value: 'vk',
    label: 'Вконтакте',
  },
  {
    value: 'telegram',
    label: 'Telegram',
  },
]

const countries: Country[] = [
  {
    code: 'PS',
    name: 'Палестина',
    dialCode: '+970',
    flag: icons.psFlag,
    mask: '(###) ###-##-##',
  },
  {
    code: 'RU',
    name: 'Россия',
    dialCode: '+7',
    flag: icons.ruFlag,
    mask: '(###) ###-##-##',
  },
  {
    code: 'KZ',
    name: 'Казахстан',
    dialCode: '+7',
    flag: '🇰🇿',
    mask: '(###) ###-##-##',
  },
  {
    code: 'BY',
    name: 'Беларусь',
    dialCode: '+375',
    flag: '🇧🇾',
    mask: '(##) ###-##-##',
  },
  {
    code: 'UA',
    name: 'Украина',
    dialCode: '+380',
    flag: '🇺🇦',
    mask: '(##) ###-##-##',
  },
  {
    code: 'UZ',
    name: 'Узбекистан',
    dialCode: '+998',
    flag: '🇺🇿',
    mask: '(##) ###-##-##',
  },
  {
    code: 'AM',
    name: 'Армения',
    dialCode: '+374',
    flag: '🇦🇲',
    mask: '(##) ###-###',
  },
  {
    code: 'KG',
    name: 'Киргизия',
    dialCode: '+996',
    flag: '🇰🇬',
    mask: '(###) ###-###',
  },
  {
    code: 'US',
    name: 'США',
    dialCode: '+1',
    flag: '🇺🇸',
    mask: '(###) ###-####',
  },
]

const form = reactive<FormData>({
  name: '',
  email: '',
  phone: '',
  telegram: '',
  department: '',
  grade: '',
  contactMethod: 'call',
  contactMethods: [],
  consent: false,
  marketingConsent: false,
})

const country = reactive<Country>({
  ...countries[0]!,
})

const countryDropdownOpen = ref(false)
const submitting = ref(false)

const countrySelectRef = ref<HTMLElement | null>(null)

const phonePlaceholder = computed(() => {
  return `${country.dialCode} ${country.mask.replace(/#/g, '0')}`
})

function toggleCountry(): void {
  countryDropdownOpen.value = !countryDropdownOpen.value
}

function closeCountryDropdown(): void {
  countryDropdownOpen.value = false
}

function selectCountry(selectedCountry: Country): void {
  Object.assign(country, selectedCountry)

  countryDropdownOpen.value = false
  form.phone = ''
}

function handleClickOutside(event: MouseEvent): void {
  const target = event.target

  if (
    countrySelectRef.value &&
    target instanceof Node &&
    !countrySelectRef.value.contains(target)
  ) {
    closeCountryDropdown()
  }
}

function applyMask(digits: string, maskPattern: string): string {
  let result = ''
  let digitIndex = 0

  for (const char of maskPattern) {
    if (digitIndex >= digits.length) {
      break
    }

    if (char === '#') {
      result += digits[digitIndex]
      digitIndex++
    } else {
      result += char
    }
  }

  return result
}

function maskPhone(event: PhoneInputEvent): void {
  if (!(event.target instanceof HTMLInputElement)) {
    return
  }

  const maxDigits = (country.mask.match(/#/g) || []).length

  let digits = event.target.value.replace(/\D/g, '')

  digits = digits.slice(0, maxDigits)

  form.phone = applyMask(digits, country.mask)
}

async function handleSubmit(): Promise<void> {
  submitting.value = true

  try {
    const payload: SubmitPayload = {
      ...form,

      phone: `${country.dialCode} ${form.phone}`,

      countryCode: country.code,

      contactMethod:
        props.variant === 'default' ? form.contactMethod : (form.contactMethods[0] ?? ''),
    }

    emit('submit', payload)

    alert('Заявка отправлена! (демо — реальной отправки нет)')
  } finally {
    submitting.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <section :id="props.variant === 'checkbox' ? 'lead-form-checkbox' : 'lead-form'" class="lead-form">
    <form
      class="lead-form__form"
      :class="{ 'lead-form__container': props.variant === 'checkbox' }"
      @submit.prevent="handleSubmit"
    >
      <div class="lead-form__grid">
        <div class="lead-form__group">
          <label class="lead-form__label" for="name"> Имя и фамилия </label>

          <input
            id="name"
            v-model="form.name"
            class="lead-form__field"
            type="text"
            placeholder="Иван Иванов"
            required
          />
        </div>

        <div class="lead-form__group">
          <label class="lead-form__label" for="email"> Почта </label>

          <input
            id="email"
            v-model="form.email"
            class="lead-form__field"
            type="email"
            placeholder="example@mail.ru"
            required
          />
        </div>

        <div class="lead-form__group">
          <label class="lead-form__label" for="phone"> Номер телефона </label>

          <div class="lead-form__phone">
            <div ref="countrySelectRef" class="lead-form__country">
              <button
                class="lead-form__country-button"
                type="button"
                :aria-expanded="countryDropdownOpen"
                @click="toggleCountry"
              >
                <img :src="country.flag" class="lead-form__flag" alt="Флаг" />

                <span
                  class="lead-form__chevron"
                  :class="{
                    'lead-form__chevron--open': countryDropdownOpen,
                  }"
                >
                  ▾
                </span>
              </button>

              <ul v-if="countryDropdownOpen" class="lead-form__dropdown">
                <li
                  v-for="item in countries"
                  :key="item.code"
                  class="lead-form__country-option"
                  :class="{
                    'lead-form__country-option--active': item.code === country.code,
                  }"
                  @click="selectCountry(item)"
                >
                  <img :src="item.flag" class="lead-form__flag" alt="Флаг" />

                  <span class="lead-form__country-name">
                    {{ item.name }}
                  </span>

                  <span class="lead-form__country-dial">
                    {{ item.dialCode }}
                  </span>
                </li>
              </ul>
            </div>

            <input
              id="phone"
              v-model="form.phone"
              class="lead-form__phone-input"
              type="tel"
              :placeholder="phonePlaceholder"
              required
              @input="maskPhone"
              @focus="closeCountryDropdown"
            />
          </div>
        </div>

        <div class="lead-form__group">
          <label class="lead-form__label" for="telegram"> Telegram </label>

          <input
            id="telegram"
            v-model="form.telegram"
            class="lead-form__field"
            type="text"
            placeholder="@username"
          />
        </div>

        <div class="lead-form__group">
          <label class="lead-form__label" for="department"> Выбери кафедру </label>

          <select
            id="department"
            v-model="form.department"
            class="lead-form__field lead-form__select"
            required
          >
            <option value="">Дизайн</option>

            <option v-for="dept in departments" :key="dept.value" :value="dept.value">
              {{ dept.label }}
            </option>
          </select>
        </div>

        <div class="lead-form__group">
          <label class="lead-form__label" for="grade"> Выбери класс </label>

          <select
            id="grade"
            v-model="form.grade"
            class="lead-form__field lead-form__select"
            required
          >
            <option value="">8 класс</option>

            <option v-for="grade in grades" :key="grade" :value="grade">{{ grade }} класс</option>
          </select>
        </div>

        <div class="lead-form__group lead-form__contact">
          <span class="lead-form__label"> Как с вами связаться? </span>

          <select
            v-if="props.variant === 'default'"
            id="contactMethod"
            v-model="form.contactMethod"
            class="lead-form__field lead-form__select"
          >
            <option v-for="method in contactMethods" :key="method.value" :value="method.value">
              {{ method.label }}
            </option>
          </select>

          <div v-else class="lead-form__contact-list">
            <label v-for="method in contactMethods" :key="method.value" class="lead-form__checkbox">
              <input v-model="form.contactMethods" type="checkbox" :value="method.value" />

              <span class="lead-form__checkbox-box"></span>

              <span class="lead-form__checkbox-text">
                {{ method.label }}
              </span>
            </label>
          </div>
        </div>
      </div>

      <div class="lead-form__consents">
        <label class="lead-form__consent">
          <input v-model="form.consent" type="checkbox" required />

          <span class="lead-form__consent-text">
            Отправляя форму, я выражаю намерение на получение консультации по поступлению и
            заключению договора об оказании образовательных услуг
          </span>
        </label>

        <label class="lead-form__consent">
          <input v-model="form.marketingConsent" type="checkbox" />

          <span class="lead-form__consent-text">
            Я <a href="#">согласен</a> на получение информационных, новостных и рекламных рассылок
            по сетям электросвязи (email, SMS, мессенджеры)
          </span>
        </label>
      </div>

      <div class="lead-form__submit">
        <ButtonCta type="submit" :disabled="submitting" text="ПОСТУПИТЬ">
          {{ submitting ? 'Отправка...' : 'ПОСТУПИТЬ' }}
        </ButtonCta>
      </div>
    </form>
  </section>
</template>

<style lang="scss" scoped>
.lead-form {
  font-family: 'Inter', Arial, sans-serif;

  &__container {
    max-width: 1350px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px;
    border-radius: 15px;
    background-color: $color-dark;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px 20px;

    @media (max-width: 599px) {
      grid-template-columns: 1fr;
    }
  }

  &__group {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__field {
    padding: 15px;
    border-radius: 30px;
    color: $color-white;
    background: $color-light-dark;
    transition:
      background 0.15s ease,
      border-color 0.15s ease;

    &::placeholder {
      color: $color-gray;
    }

    &:focus {
      border-color: $color-light-dark;
    }
  }

  &__select {
    padding: 15px 25px;
    appearance: none;
    cursor: pointer;

    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='9' viewBox='0 0 14 9' fill='none'><path d='M1 1L7 7L13 1' stroke='%23a8a8ac' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/></svg>");

    background-repeat: no-repeat;
    background-position: right 25px center;
  }

  &__contact {
    @media (min-width: 600px) {
      grid-column: 1 / -1;
    }
  }

  &__contact-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__checkbox {
    display: flex;
    align-items: center;
    gap: 8px;
    width: fit-content;
    cursor: pointer;
  }

  &__checkbox input {
    pointer-events: none;
    appearance: none;
    display: grid;
    place-content: center;
    flex-shrink: 0;
    width: 15px;
    height: 15px;
    border: 2px solid $color-purple;
    opacity: 0.5;
    cursor: pointer;
    transition:
      border-color 0.15s ease,
      background 0.15s ease;

    &:checked {
      border-color: $color-purple;
      opacity: 1;

      &::before {
        content: '';
        width: 6px;
        height: 10px;
        border-right: 2px solid $color-purple;
        border-bottom: 2px solid $color-purple;
        transform: rotate(45deg) translate(-1px, -1px);
      }
    }
  }

  &__checkbox-text {
    line-height: 1.3;
  }

  &__phone {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 15px;
    border-radius: 30px;
    background: $color-light-dark;
    transition: background 0.15s ease;
  }

  &__country {
    position: relative;
    flex-shrink: 0;
  }

  &__country-button {
    display: flex;
    align-items: center;
    gap: 5px;
    color: $color-gray;
    cursor: pointer;
  }

  &__flag {
    width: 20px;
  }

  &__chevron {
    font-size: 15px;
    transition: transform 0.15s ease;

    &--open {
      transform: rotate(180deg);
    }
  }

  &__dropdown {
    position: absolute;
    z-index: 20;
    top: calc(100% + 10px);
    left: -20px;
    width: 250px;
    max-height: 330px;
    padding: 5px;
    border-radius: 15px;
    background-color: $color-dark;
    box-shadow: 0 10px 30px rgb(0 0 0 / 45%);
    overflow-y: auto;
    scrollbar-width: none;

    @media (max-width: 439px) {
      width: 200px;
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__country-option {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    font-size: clamp(12px, 1vw, 14px);
    border-radius: 10px;
    cursor: pointer;
    transition: background 0.12s ease;

    &--active {
      background: rgb(139 63 251 / 18%);
    }
  }

  &__country-name {
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &__country-dial {
    flex-shrink: 0;
  }

  &__phone-input {
    width: 100%;
    color: $color-white;
    background: none;
  }

  &__consents {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 5px 0 20px;
  }

  &__consent {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    input {
      appearance: none;
      display: grid;
      place-content: center;
      flex-shrink: 0;
      width: 15px;
      height: 15px;
      border: 2px solid $color-purple;
      opacity: 0.5;
      cursor: pointer;
      transition:
        border-color 0.15s ease,
        background 0.15s ease;

      &:checked {
        border-color: $color-purple;
        opacity: 1;

        &::before {
          content: '';
          width: 6px;
          height: 10px;
          border-right: 2px solid $color-purple;
          border-bottom: 2px solid $color-purple;
          transform: rotate(45deg) translate(-1px, -1px);
        }
      }
    }

    a {
      display: inline-block;
      text-decoration: underline;
      color: $color-purple;
    }
  }

  &__consent-text {
    line-height: 1.5;
  }
}
</style>
