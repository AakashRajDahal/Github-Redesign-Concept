<template>
    <div class="feed">
      <h2 class="feed-title"> Your <strong>Feed </strong></h2>
        <feed-card />
    </div>
</template>

<script>
import FeedCard from './FeedCard.vue';

export default {
  components: {
    FeedCard,
  },
};
</script>
