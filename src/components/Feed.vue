<template>
    <div class="feed">
        Your <strong>Feed </strong>
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
