<template>
  <div class="search-focus"></div>
</template>

<script>
export default {
  mounted() {
    this.handler = (event) => {
      this.$emit('keyup', event);
    };

    window.addEventListener('keyup', this.handler);
  },
  beforeDestroy() {
    window.removeEventListener('keyup', this.handler);
  },
};
</script>

<style scoped>
  .search-focus {
    display: none;
  }
  .search-focus:focus{
    outline: none;
  }
</style>
