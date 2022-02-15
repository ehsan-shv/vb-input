<template>
  <vue-base-input
    @onInputButtonClick="onInputButtonClick"
    :type="'password'"
    placeholder="name"
    label="your name"
    v-model="name"
    :hasButton="true"
    :rtl="true"
    :error="'error'"
  />
  <vue-base-input
    @onInputButtonClick="onInputButtonClick"
    buttonText="Send"
    :type="'text'"
    placeholder="name"
    label="your name"
    :hasButton="true"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import VueBaseInput from './components/VueBaseInput.vue';

export default defineComponent({
  name: 'App',
  components: { VueBaseInput },
  setup() {
    const name = ref('');

    const onInputButtonClick = () => {
      console.log(name.value);
    };

    return { onInputButtonClick, name };
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
