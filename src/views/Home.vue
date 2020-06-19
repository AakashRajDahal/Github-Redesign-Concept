<template>
  <div class="home">
    <repositories />
  </div>
</template>

<script>
// @ is an alias to /src
import Repositories from '@/components/Repositories.vue';

export default {
  name: 'Home',
  components: {
    Repositories,
  },
};
</script>
