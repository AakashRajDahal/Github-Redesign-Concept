<template>
  <div>
    <nav>
      <ul class="nav1">
        <li>
          <i class="fab fa-github"></i>
        </li>
        <li>Pull Requests</li>
        <li>Issues</li>
        <li>Explore</li>
      </ul>
      <ul class="nav2">
        <li>
          <SearchComponent />
        </li>
      </ul>
      <ul class="nav3">
        <li>
          <i class="fas fa-store"></i>
        </li>
        <li>
          <i class="fas fa-bell"></i>
        </li>
        <li>
          <img src="@/assets/Image 3.png" alt="person working " />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import SearchComponent from '@/components/SearchComponent.vue';

export default {
  name: 'action',
  components: {
    SearchComponent,
  },
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style lang="scss" >

</style>
