<template>
  <Head_nav />
  <Home_comp />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import Head_nav from '../components/comp/Head_nav.vue';
import Home_comp from '../components/Home_comp.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    Head_nav,
    Home_comp,
  },
});
</script>
