<template>
  <div class="App">
    <nav>
      <ul>
        <li>Home</li>
        <li>Searchbar</li>
        <li>
          <SearchComponent />
        </li>
        <div>
          <modal v-if="showModal" @close="showModal = false" />
          <button class="button" @click="showModal = true">Show Modal</button>
        </div>
      </ul>
    </nav>
    <div class="bg-gray-100 min-h-screen pt-40 text-lg">
      <router-view />
    </div>
  </div>
</template>

<script>
import SearchComponent from '@/components/SearchComponent.vue';
import Modal from '@/components/Modal.vue';

export default {
  components: {
    SearchComponent,
    Modal,
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
