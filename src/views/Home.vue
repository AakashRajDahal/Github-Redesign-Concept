<template>
  <div class="home">
    <repositories />
    <feed />
  </div>
</template>

<script>
// @ is an alias to /src
import Repositories from '@/components/Repositories.vue';
import Feed from '@/components/Feed.vue';

export default {
  name: 'Home',
  components: {
    Repositories,
    Feed,
  },
};
</script>

<style lang="scss" >

</style>
