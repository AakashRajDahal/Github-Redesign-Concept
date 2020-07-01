<template>
  <div>
       <div class="block1 ">
          <button @click="toggleMenu" class="flex1">
            Button
          </button>
        </div>
    <nav>
      <ul
      class="uppercase1"
          :class='menuOpen'>
        <li>Home</li>
        <li>Searchbar</li>
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
.block1{
  display :hidden;
}
.uppercase1{
  display: hidden;
}
</style>
