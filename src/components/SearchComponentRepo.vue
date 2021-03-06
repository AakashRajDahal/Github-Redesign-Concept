<template>
  <div class="relative">
    <search-focus @keyup="focusSearch" />
    <div class="relative w-80">
      <input
        type="text"
        placeholder="Find a repository ..." id="search-repo"
        v-model="query"
        @blur="searchResultsVisible = false"
        @focus="searchResultsVisible = true"
        @keydown.esc="searchResultsVisible = false"
        @input="softReset"
        ref="search"
        @keyup="performSearch"
        @keydown.up.prevent="highlightPrevious"
        @keydown.down.prevent="highlightNext"
        @keydown.enter="gotoLink"
      />
      <div class="absolute top-0 ml-3" style="top:10px">
        <svg
          fill="currentColor"
          class="text-gray-500 h-5 w-5"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        />
      </div>
      <div
        v-if="query.length > 0"
        class="absolute top-0 right-0 text-2xl mr-3 cursor-pointer
       text-gray-600 hover:text-gray-800"
        style="top:2px;"
        @click="reset"
      >&times;</div>
    </div>
    <transition name="fade">
      <div
        v-if="query.length > 0 && searchResultsVisible"
        class="absolute normal-case bg-white border left-0
        right-0 w-108 text-left mb-4 mt-2 rounded-lg shadow overflow-hidden z-10 overflow-y-auto"
        style="max-height: 32rem"
      >
        <div class="flex flex-col" ref="results">
          <a
            v-for="(post, index) in searchResults"
            :key="index"
            :href="post.item.path"
            @mousedown.prevent="searchResultsVisible = true"
            class="border-b border-gray-400 text-xl cursor-pointer p-4 hover:bg-blue-100"
            :class="{ 'bg-blue-100': index === highlightedIndex }"
          >
            {{ post.item.title }}
            <span
              class="block font-normal text-sm my-1"
            >{{ post.item.summary }}</span>
          </a>

          <div
            v-if="searchResults.length === 0"
            class="font-normal w-full border-b cursor-pointer p-4"
          >
            <p class="my-0">
              No results for '
              <strong>{{ query }}</strong>'
            </p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from 'axios';
import SearchFocus from './SearchFocus.vue';

export default {
  components: {
    SearchFocus,
  },
  data() {
    return {
      query: '',
      searchResultsVisible: false,
      posts: [],
      searchResults: [],
      highlightedIndex: 0,
      options: {
        shouldSort: true,
        includeMatches: true,
        threshold: 0.5,
        location: 0,
        distance: 500,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: ['title', 'summary'],
      },
    };
  },
  created() {
    axios.get('/index.json').then((response) => {
      this.posts = response.data;
    });
  },
  methods: {
    reset() {
      this.query = '';
      this.highlightedIndex = 0;
    },
    softReset() {
      this.searchResultsVisible = true;
      this.highlightedIndex = 0;
    },
    focusSearch(e) {
      if (e.key === '/') {
        this.$refs.search.focus();
      }
    },
    performSearch() {
      this.$search(this.query, this.posts, this.options).then((results) => {
        this.searchResults = results;
      });
    },
    highlightPrevious() {
      if (this.highlightedIndex > 0) {
        this.highlightedIndex -= 1;
        this.scrollIntoView();
      }
    },
    highlightNext() {
      if (this.highlightedIndex < this.searchResults.length - 1) {
        this.highlightedIndex += 1;
        this.scrollIntoView();
      }
    },
    scrollIntoView() {
      this.$refs.results.children[this.highlightedIndex].scrollIntoView({
        block: 'nearest',
      });
    },
    gotoLink() {
      if (this.searchResults[this.highlightedIndex]) {
        window.location = this.searchResults[this.highlightedIndex].item.path;
      }
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.relative.w-80{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: none;
  background: #f5f5f5;
  padding: 11px 16px;
  border-radius: 5px;
}
#search-repo {
  border: none;
  width: auto;
  background: #f5f5f5;
  outline:none;
}
</style>
