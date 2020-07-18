<template>
  <div class='home'>
    <repositories />
    <feed />
    <explore />
    <Footer1 />
  </div>
</template>

<script>
// @ is an alias to /src
import Repositories from '@/components/Repositories.vue';
import Feed from '@/components/Feed.vue';
import Explore from '@/components/Explore.vue';

export default {
  name: 'Home',
  components: {
    Repositories,
    Feed,
    Explore,
  },
};
</script>

<style lang='scss' >
</style>
