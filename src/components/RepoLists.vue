<template>
  <div class="repo-lists">
    <aside class="lists">
      <span><i class="fas fa-lock"></i></span>
      <a class="lists-title">AakashRajDahal/eCommerce</a>
    </aside>
    <aside class="lists">
      <span><i class="fas fa-code"></i></span>
      <a class="lists-title">TheRealRajan/Forum</a>
    </aside>
    <aside class="lists">
      <span><i class="fas fa-code"></i></span>
      <a class="lists-title">Nischal10/RedShift</a>
    </aside>
    <aside class="lists">
      <span><i class="fas fa-lock"></i></span>
      <a class="lists-title">sandeshpaudyal/FacebookBot</a>
    </aside>
    <aside class="lists">
      <span><i class="fas fa-lock"></i></span>
      <a class="lists-title">markaa/VueJS Project</a>
    </aside>
    <aside class="lists">
      <span><i class="fas fa-code"></i></span>
      <a class="lists-title">github/atom</a>
    </aside>
    <aside class="lists">
      <span><i class="fas fa-lock"></i></span>
      <a class="lists-title">bprayush/bcmgmttool</a>
    </aside>
    <aside class="lists">
      <span><i class="fas fa-lock"></i></span>
      <a class="lists-title">AakashRajDahal/Bootstrap4-Dashb...</a>
    </aside>
    <aside class="lists">
      <span><i class="fas fa-code"></i></span>
      <a class="lists-title">TheRealRajan/ReactJS-Full-Stack-D...</a>
    </aside>
    <aside class="lists">
      <span><i class="fas fa-code"></i></span>
      <a class="lists-title">Nischal10/TapWars</a>
    </aside>
    <aside class="lists">
      <span><i class="fas fa-code"></i></span>
      <a class="lists-title">AakashRajDahal/CloudAnimationW...</a>
    </aside>
  </div>
</template>

<script>
</script>

<style lang="scss" >
.repo-lists {
  border-bottom: 1px solid red;
  overflow-y:scroll;
  .lists {
    display:grid;
    grid-gap:1rem;
    .fas.fa-lock{
      color: $primaryOrange;
    }
     .fas.fa-code{
      color: $primaryGreen;
    }
    .lists-title {
      color: #4078c0;
      font-size: 16px;
    }
  }
}
</style>
