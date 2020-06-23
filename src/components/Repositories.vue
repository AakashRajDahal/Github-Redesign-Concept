<template>
  <div class='repo'>
    <aside class='repo-title'>
      <div class='g-title'>Repositories</div>
      <Button />
    </aside>
    <search-component-repo class='search' />
    <repo-lists />
    <repo-team />
    <button-create />
  </div>
</template>

<script>
import Button from './Button.vue';
import SearchComponentRepo from './SearchComponentRepo.vue';
import RepoLists from './RepoLists.vue';
import RepoTeam from './RepoTeam.vue';
import ButtonCreate from './ButtonCreate.vue';

export default {
  components: {
    Button,
    SearchComponentRepo,
    RepoLists,
    RepoTeam,
    ButtonCreate,
  },
};
</script>

<style lang='scss' scoped>

</style>
