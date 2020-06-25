<template>
  <div class="card">
    <aside class="card-title">
      <div class="card-img">
        <img src="@/assets/Image 4.png" alt />
        <div class="card-img-title">
          bprayush
          <span>forked</span>
          bprayush/devstack
          <span>from</span>
          edx/devstack
        </div>
      </div>
      <div class="card-time">5 hours ago</div>
    </aside>
    <aside class="card-status">
      <div class="status-title">
        <span class="title-1">edx/devstack</span>
        <span class="title-2">Get up and running to develop or extend Open edX services</span>
      </div>
      <ButtonStar />
    </aside>
    <aside class="card-icons">
      <div class="icon-status">
        <span>
          <i class="fas fa-circle"></i> TypeScript
        </span>
        <span>
          <i class="fas fa-star"></i> 2.1k
        </span>
      </div>
      <div class="status">New Repository</div>
    </aside>
  </div>
</template>

<script>
import ButtonStar from './ButtonStar.vue';

export default {
  ButtonStar,
};
</script>
