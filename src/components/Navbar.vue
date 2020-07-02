<template>
  <div>
    <nav>
      <ul>
        <li><i class="fab fa-github"></i></li>
        <li>Pull Requests</li>
        <li>Issues</li>
        <li>Explore</li>
      </ul>
      <ul>
        <li>
          <SearchComponent />
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

<style lang="scss" scoped>
.fab.fa-github{
  font-size: 48px;
}
nav {
  ul {
    display: flex;
    list-style: none;
  }
}
</style>
