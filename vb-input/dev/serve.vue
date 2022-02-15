<script lang="ts">
import { defineComponent } from 'vue';
import VbInput from '@/vb-input.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    VbInput,
  },
});
</script>

<template>
  <div id="app">
    <vb-input :label="'your name'" placeholder="name" />
  </div>
</template>
