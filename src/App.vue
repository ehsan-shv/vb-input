<template>
  <vue-base-input autofocuse type="text" placeholder="name" label="your name" />
  <vue-base-input type="password" placeholder="password" label="your password" />
  <vue-base-input type="textarea" placeholder="message" label="your message" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VueBaseInput from './components/VueBaseInput.vue';

export default defineComponent({
  name: 'App',
  components: { VueBaseInput },
});
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
</style>
