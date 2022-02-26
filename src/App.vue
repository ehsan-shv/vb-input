<template>
  <section>
    <h2>Text:</h2>
    <vue-base-input :type="'text'" placeholder="name" label="your name" v-model="name" />
  </section>
  <section>
    <h2>Password:</h2>
    <vue-base-input
      :type="'password'"
      placeholder="password"
      label="your password"
      v-model="password"
      :hasButton="true"
    />
  </section>
  <section>
    <h2>Number:</h2>
    <vue-base-input :type="'number'" placeholder="number" label="your number" v-model="number" />
  </section>
  <section>
    <h2>Number:</h2>
    <vue-base-input :type="'tel'" placeholder="telephone" label="your telephone" v-model="telephone" />
  </section>
  <section>
    <h2>Email:</h2>
    <vue-base-input :type="'email'" placeholder="info@email.com" label="your email" v-model="email" />
  </section>
  <section>
    <h2>Search:</h2>
    <vue-base-input :type="'search'" placeholder="search..." :hasButton="true" label="search..." v-model="search" />
  </section>
  <section>
    <h2>Textarea:</h2>
    <vue-base-input :type="'textarea'" placeholder="your message" label="your message..." v-model="message" />
  </section>
  <section>
    <h2>Has Button:</h2>
    <vue-base-input
      :type="'text'"
      placeholder="nick name"
      label="nick name"
      :hasButton="true"
      :buttonText="'Send'"
      v-model="nickName"
      @onInputButtonClick="onInputButtonClick"
    />
  </section>
  <section>
    <h2>Has Error:</h2>
    <vue-base-input
      :type="'email'"
      placeholder="info@email.com"
      label="your email"
      :buttonText="'Send'"
      v-model="emailError"
      :error="'Email is not valid.'"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import VueBaseInput from './components/VueBaseInput.vue';

export default defineComponent({
  name: 'App',
  components: { VueBaseInput },
  setup() {
    const name = ref('');
    const password = ref('');
    const number = ref(0);
    const telephone = ref('');
    const email = ref('');
    const search = ref('');
    const message = ref('');
    const nickName = ref('');
    const emailError = ref('');

    const onInputButtonClick = () => {
      alert(nickName.value);
    };

    return { onInputButtonClick, name, password, number, telephone, email, search, message, nickName, emailError };
  },
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 300px;
  padding: 80px 20px;

  section {
    box-shadow: 0 0 0 red;
    &:not(:last-child) {
      margin-bottom: 64px;
    }
    h2 {
      margin-bottom: 24px;
    }
  }
}
</style>
