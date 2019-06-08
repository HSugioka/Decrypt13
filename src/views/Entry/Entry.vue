<template>
  <div>
    <template>
      <div class="container">
        <section class="form">
            <b-field label="Name">
              <b-input v-model="name"></b-input>
            </b-field>

            <b-field label="Email">
              <b-input type="email"
                  v-model="email">
              </b-input>
            </b-field>

            <b-field label="Username">
              <b-input value="johnsilver" maxlength="30" v-model="userName"></b-input>
            </b-field>

            <b-field label="Password">
              <b-input type="password">
              </b-input>
            </b-field>

            <b-field label="Apeal Point">
              <b-input maxlength="200" type="textarea" v-model="apeal"></b-input>
            </b-field>
        </section>

        <a class="button is-primary is-focused">エントリー</a>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      userName: '',
      apeal: ''
    }
  },
  methods: {
    sendData() {

    }
  },
}
</script>

<style lang="scss" src="./css/Entry.scss" scoped>
</style>
