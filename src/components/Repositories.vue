<template>
  <div class="repo">
    <aside class="repo-title">
      <div class="g-title">Repositories</div>
      <Button />
    </aside>
  </div>
</template>

<script>
import Button from './Button.vue';

export default {
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
.repo{
background-color: #fff;
padding: 1.4rem;
border-radius: 5px;
  .repo-title{
    display: flex;
    justify-content: space-between;
  }
}
</style>
