<template>
  <div>
    <nav>
      <ul class="nav1">
        <li>
          <a href>
            <i class="fab fa-github"></i>
          </a>
        </li>
        <li class="list1">
          <a href>
            Pull Requests
            <i class="fas fa-circle"></i>
          </a>
        </li>
        <li class="list2">
          <a href>
            Issues
            <i class="fas fa-circle"></i>
          </a>
        </li>
        <li class="list3">
          <a href>
            Explore
            <i class="fas fa-circle"></i>
          </a>
        </li>
      </ul>
      <ul class="nav2">
        <li>
          <SearchComponent />
        </li>
      </ul>
      <ul class="nav3">
        <li>
          <a href>
            <i class="fas fa-store"></i>
            <i class="fas fa-circle"></i>
          </a>
        </li>
        <li class="list1">
          <a href>
            <i class="fas fa-bell"></i>
            <i class="fas fa-circle"></i>
          </a>
        </li>
        <li>
          <a href>
            <img src="@/assets/Image 3.png" alt="person working " />
          </a>
        </li>
      </ul>
      <ul class="nav4">
        <li class="nav-item">
          <a href="
          ">
            <i class="fas fa-bars"></i>
          </a>
        </li>
        <li>
          <img src="@/assets/feather github.svg" alt="person working " /> Your Feed
        </li>
        <li class="nav-item">
          <i class="fas fa-search"></i>
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

<style lang='scss' >
</style>
