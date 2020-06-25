<template>
    <div class="feed">
      <h2 class="feed-title"> Your <strong>Feed </strong></h2>
        <feed-card1 />
        <feed-card2 />
    </div>
</template>

<script>
import FeedCard1 from './FeedCard-1.vue';
import FeedCard2 from './FeedCard-2.vue';


export default {
  components: {
    FeedCard1,
    FeedCard2,
  },
};
</script>
