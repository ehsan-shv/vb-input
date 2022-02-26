# vb-input

<a href="https://www.npmjs.com/package/vb-input"><img src="https://img.shields.io/npm/v/vb-input.svg" alt="Version"></a>

**Vue 3 input component.**

> Support Vue3 and Nuxt3 and type-safe. [Demo](https://ehsan-shv.github.io/vb-input/)

## Documentation

Check out docs at [docs](https://ehsan-shv.github.io/vb-input-docs/).

## Types

- text
- number
- password
- tel
- email
- search
- textarea

## Installation

```bash
npm i vb-input
```

## Import to component

```js
<template>
  <VBInput
    :type="'text'"
    placeholder="name"
    label="Your Name"
    v-model="name"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import VBInput from 'vb-input';
export default defineComponent({
  components: {
    VBInput,
  },
  setup() {
    const name = ref('');

    return { name };
  },
});
</script>
```
