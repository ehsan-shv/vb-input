<template>
  <vue-base-input buttonText="Send" autofocus :type="'text'" placeholder="name" label="your name" />
  <vue-base-input autofocus :type="'number'" placeholder="number" label="your number" />
  <vue-base-input v-model="password" maxlength="4" :type="'password'" placeholder="password" label="your password" />
  <vue-base-input :type="'textarea'" placeholder="message" label="your message" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import VueBaseInput from './components/VueBaseInput.vue';

export default defineComponent({
  name: 'App',
  components: { VueBaseInput },
  setup() {
    const password = ref('');

    return { password };
  },
});
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
