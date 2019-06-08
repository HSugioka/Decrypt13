<template>
    <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showNav }">
      <div class="is-centerd">
        <div class="navbar">
          <router-link class="navbar-item" to="/">
            HOME
          </router-link>

          <router-link class="navbar-item" to="/mypage">
            My Page
          </router-link>

          <router-link class="navbar-item" to="/projectlist">
            Proect List
          </router-link>

          <router-link class="navbar-item" to="/proposal">
            Proposal
          </router-link>

        
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <!-- buttonsがあるとボタン間がいい感じに隙間ができてスッキリする -->
            <a class="button is-primary">
              <strong>Sign Up</strong>
            </a>
            <a class="button is-light">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>

</template>


<script>
export default {
  data() {
    return {
      showNav: false
    }
  },
}
</script>

<style >

</style>
