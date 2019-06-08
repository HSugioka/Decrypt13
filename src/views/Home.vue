<template>
  <div class="home">
    <div class="columns is-multiline">
      <div class="column is-3" v-for="(child, index) in children" :key="index">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">{{child.name}}</p>
                    <p class="title is-6">{{child.age}}歳 {{child.sex}}</p>
                  </div>
                </div>

                <div class="content">
                  {{child.content}}
                </div>
              </div>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
    
  },
  data() {
    return {
      children: [
        {
          name: 'fuga',
          age: '10',
          sex: 'male',
          content: 'hogehoge'
        },
        {
          name: 'gg',
          age: '10',
          sex: 'male',
          content: 'hogehoge'
        },{
          name: 'fuga',
          age: '10',
          sex: 'male',
          content: 'hogehoge'
        },{
          name: 'fuga',
          age: '10',
          sex: 'male',
          content: 'hogehoge'
        },{
          name: 'fuga',
          age: '10',
          sex: 'male',
          content: 'hogehoge'
        }
      ]
   }
  },
}
</script>
