<template>
  <div class="vb-input" :style="blockStyle" :class="{ rtl: rtl, error: error }">
    <label :style="labelStyle" class="vb-input__label" v-if="label" :class="{ inline: labelInline }">{{ label }}</label>
    <textarea
      v-if="type === 'textarea'"
      class="vb-input__field"
      :type="setFieldType"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="passedAttrs"
      :value="modelValue"
      :style="fieldStyle"
    />
    <div v-else class="vb-input__block">
      <input
        class="vb-input__field"
        :type="setFieldType"
        @input="$emit('update:modelValue', $event.target.value)"
        v-bind="passedAttrs"
        :value="modelValue"
        :style="fieldStyle"
      />
      <button
        v-if="type === 'password' || buttonText"
        class="vb-input__btn"
        type="button"
        :class="{ rtl: rtl }"
        :style="buttonStyle"
        @click="onButtonClick"
      >
        <span class="vb-input__passwordIcon" v-if="type === 'password'" :class="{ showPassword: showPassword }" />
        <span v-else>{{ buttonText }}</span>
      </button>
    </div>
    <p v-if="error" class="vb-input__errorMessage" :style="errorMessageStyle">{{ error }}</p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'VueBaseInput',
  props: {
    type: {
      type: String,
      required: true,
      validator: (value: string) => {
        return ['text', 'number', 'email', 'text', 'password', 'search', 'tel', 'textarea'].includes(value);
      },
    },
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    error: {
      type: String,
      default: '',
    },
    rtl: {
      type: Boolean,
      default: false,
    },
    labelInline: {
      type: Boolean,
      default: false,
    },
    fieldStyle: {
      type: Object,
      default: () => {
        return {};
      },
    },
    errorMessageStyle: {
      type: Object,
      default: () => {
        return {};
      },
    },
    labelStyle: {
      type: Object,
      default: () => {
        return {};
      },
    },
    blockStyle: {
      type: Object,
      default: () => {
        return {};
      },
    },
    buttonStyle: {
      type: Object,
      default: () => {
        return {};
      },
    },
    buttonText: {
      type: String,
      default: '',
    },
  },
  setup(props, { attrs, emit }) {
    const showPassword = ref(false);
    const passedAttrs = ref(attrs);

    const setFieldType = computed(() => {
      if (props.type === 'password') {
        if (showPassword.value) return 'text';
        if (!showPassword.value) return 'password';
      }
      return props.type;
    });

    const onButtonClick = () => {
      if (props.type === 'password') {
        showPassword.value = !showPassword.value;
        return;
      } else {
        emit('onInputButtonClick');
      }
    };

    return {
      onButtonClick,
      showPassword,
      setFieldType,
      passedAttrs,
    };
  },
});
</script>

<style lang="scss">
:root {
  --vb-input-color-default: #212121;
  --vb-input-color-secondary: #9e9e9e;
  --vb-input-color-error: #f44336;
  --vb-input-placeholder-color: #757575;
  --vb-input-font-size: 16px;
  --vb-input-field-border-radius: 4px;
  --vb-input-height: 40px;
  --vb-input-textarea-height: 80px;
  --vb-input-button-width: 64px;
}
.vb-input {
  color: var(--vb-input-color-default);

  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  width: 300px;
  margin: 100px;

  &.error {
    color: var(--vb-input-color-error);

    .vb-input__field {
      border-color: var(--vb-input-color-error);
    }
  }
  &.rtl {
    direction: rtl;
    text-align: right;
  }

  &__label {
    display: block;

    &.inline {
      display: inline-block;
    }
  }

  &__field {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    height: var(--vb-input-height);
    width: 100%;
    margin: 8px 0;
    border: 1px solid var(--vb-input-color-secondary);
    border-radius: var(--vb-input-field-border-radius);

    &:not([type='textarea']) {
      display: flex;
      align-items: center;
    }

    &::placeholder {
      color: var(--vb-input-placeholder-color);
    }

    &:disabled {
      opacity: 0.5;
    }

    &:focus {
      outline: none;
      border-color: var(--vb-input-color-default);
    }

    &[type='textarea'] {
      height: var(--vb-input-textarea-height);
      padding-top: 8px;
      padding-bottom: 8px;
    }
  }

  &__field,
  &__errorMessage,
  &__label {
    padding: 0 8px;
    font-size: var(--vb-input-font-size);
  }

  &__block {
    position: relative;
  }

  &__btn {
    border: none;
    background-color: transparent;
    box-shadow: none;
    outline: none;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 1px;
    bottom: 1px;
    right: 1px;
    width: var(--vb-input-button-width);
    cursor: pointer;

    &.rtl {
      left: 1px;
      right: unset;
    }
  }

  &__passwordIcon {
    display: block;
    width: 24px;
    height: 24px;
    background-size: 24px;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24px' width='24px' viewBox='0 0 24 24' fill='%239e9e9e'%3E%3Cpath d='M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z' fill='none'/%3E%3Cpath d='M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z'/%3E%3C/svg%3E");

    &.showPassword {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='%239e9e9e'%3E%3Cpath d='M0 0h24v24H0V0z' fill='none'/%3E%3Cpath d='M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z'/%3E%3C/svg%3E");
    }
  }
}
</style>
