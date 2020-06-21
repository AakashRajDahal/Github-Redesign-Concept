<template>
  <div class="home">
    <repositories />
    <feed />
    <modal />
  </div>
</template>

<script>
// @ is an alias to /src
import Repositories from '@/components/Repositories.vue';
import Feed from '@/components/Feed.vue';
import Modal from '@/components/Modal.vue';


export default {
  name: 'Home',
  components: {
    Repositories,
    Feed,
    Modal,
  },
};
</script>

<style lang="scss" >

</style>
