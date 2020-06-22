<template>
  <transition name="fade">
    <div class="modal" @click="$emit('close')">
      <div class="content" @click.stop>
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit.
        Quisquam, placeat, unde! Architecto
        laboriosam ducimus atque cum dolore
        doloribus obcaecati vero. Minus porro
        sapiente unde fuga incidunt quidem
        necessitatibus mollitia libero?
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      showContent: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
}
.content {
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(100% - 20px);
  max-width: 500px;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 3px;
  padding: 20px;
  line-height: 1.5;
  font-size: 18px;
  color: #444;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.2s opacity ease-out;
}
</style>
