<template>
  <div class="vb-input" :style="blockStyle" :class="{ rtl: rtl, error: error }">
    <label :style="labelStyle" class="vb-input__label" v-if="label" :class="{ inline: labelInline }">{{ label }}</label>
    <textarea
      v-if="type === 'textarea'"
      :type="type"
      v-bind="$attrs"
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
      class="vb-input__field"
      :style="fieldStyle"
      :disabled="disabled"
    />
    <input
      v-else
      :type="type"
      v-bind="$attrs"
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
      class="vb-input__field"
      :style="fieldStyle"
      :disabled="disabled"
    />
    <p v-if="error" class="vb-input__errorMessage" :style="errorMessageStyle">{{ error }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

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
    placeholder: {
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
    disabled: {
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
  --vb-input-textarea-height: 80px;
}
.vb-input {
  color: var(--vb-input-color-default);

  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  width: 300px;
  padding: 100px;

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

    height: 36px;
    width: 100%;
    display: flex;
    align-items: center;
    margin: 8px 0;
    border: 1px solid var(--vb-input-color-secondary);
    border-radius: var(--vb-input-field-border-radius);

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
}
</style>
