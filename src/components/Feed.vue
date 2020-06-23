<template>
    <div class="feed">
      <span class="feed-title"> Your <strong>Feed </strong></span>
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
