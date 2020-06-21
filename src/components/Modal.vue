<template>
  <div v-if="isVisibility" class="overlay">
    <div class="modal">
      <div class="flex1">
        <span>Modal Title</span>
        <button>
          <i class="fas fa-code"></i>
          ENter
        </button>
      </div>
    </div>
    <div class="p3">
      <div class="m-4">Modal Body</div>
      <button>Confirm</button>
    </div>
    <button @click.prevent="toggleModal" class="open-modal">Add new</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisibility: false,
    };
  },
  methods: {
    toggleModal() {
      this.isVisibility = !this.isVisibility;
    },
  },
};
</script>

<style lang="scss" scoped>
.overlay{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background:rbga(0,0,0,0.2);
  .flex1{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
