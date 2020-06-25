<template>
    <div class="feed">
      <h2 class="feed-title"> Your <strong>Feed </strong></h2>
      <aside class="feed-sections">
        <feed-card1 />
        <feed-card2 />
        <feed-card3 />
      </aside>
    </div>
</template>

<script>
import FeedCard1 from './FeedCard-1.vue';
import FeedCard2 from './FeedCard-2.vue';
import FeedCard3 from './FeedCard-3.vue';

export default {
  components: {
    FeedCard1,
    FeedCard2,
    FeedCard3,
  },
};
</script>
