<template>
  <div>
    <template>
    <section>
        <b-field label="First Name">
            <b-input value="huga"></b-input>
        </b-field>

        <b-field label="Family Name">
            <b-input value="hoge"></b-input>
        </b-field>

        <b-field label="Age">
            <b-input value="10"></b-input>
        </b-field>

        <b-field label="Sex">
            <b-select placeholder="Select a subject">
                <option value="1">male</option>
                <option value="2">female</option>
                <option value="3">other</option>
            </b-select>
        </b-field>

        <b-field label="Content">
            <b-input maxlength="200" type="textarea"></b-input>
        </b-field>
      </section>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstname: '',
      familyname: '',
      fullname: '',
      age: '',
      sex: '',
      content: ''
    }
  }, 
}
</script>

<style>

</style>
