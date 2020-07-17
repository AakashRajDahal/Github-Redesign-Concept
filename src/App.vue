<template>
  <div class="App">
    <navbar />
    <div class="bg-gray-100 min-h-screen pt-40 text-lg">
      <router-view />
    </div>
    <footer1 />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer1 from '@/components/Footer1.vue';


export default {
  components: {
    Navbar,
    Footer1,
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
