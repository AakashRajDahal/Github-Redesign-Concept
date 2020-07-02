<template>
  <div class="explore">
    <div>
          <img src="@/assets/Image-1.svg" alt="person working " />
        </div>
    <h2>Explore Repositories</h2>
    <explore-card-1 />
    <explore-card-2 />
    <explore-card-3 />
    <explore-card-4 />
    <aside class="explore-more">
    <a href="">Explore More <i class="fas fa-arrow-right"></i></a>
    </aside>
  </div>
</template>

<script>
import ExploreCard1 from './ExploreCard-1.vue';
import ExploreCard2 from './ExploreCard-2.vue';
import ExploreCard3 from './ExploreCard-3.vue';
import ExploreCard4 from './ExploreCard-4.vue';

export default {
  components: {
    ExploreCard1,
    ExploreCard2,
    ExploreCard3,
    ExploreCard4,
  },
};
</script>

<style lang='scss' scoped>
</style>
