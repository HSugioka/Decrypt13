<template>
  <div class="projectlist">
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
                    <p class="title is-6">Amount  : ${{child.age}}</p>
                    <p class="title is-6">Due date: {{child.sex}}</p>
                  </div>
                </div>

                <div class="content">
                  {{child.content}}
                </div>
                    <a class="btn" href="#" data-user="">Fund</a>
              </div>
              <b-button type="is-light" outlined>
                <router-link :to="{ name: 'detail', params: { id: child.name }}">show detail</router-link>
              </b-button>
            </div>
      </div>
    </div>

<!--
<div class="modal fade show" id="modal-edit-user" tabindex="-1" role="dialog" style="display: block;" aria-modal="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">ユーザを編集</h5>
                <button type="button" class="close outline-none" data-dismiss="modal">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body">
                <form method="post" action="http://153.120.21.111/user/1" id="form-edit-user">
                    <input type="hidden" name="_method" value="put">                    <div class="form-group">
                        <label for="name-eu">名</label>
                        <input type="text" name="name" id="name-eu" class="form-control form-control-sm" required="">
                    </div>
                    <div class="form-group">
                        <label for="email-eu">Eメール</label>
                        <input type="email" name="email" id="email-eu" class="form-control form-control-sm" required="">
                    </div>
                    <div class="form-group">
                        <label for="role-eu">役割</label>
                        <select name="role" id="role-eu" class="form-control form-control-sm" required="" disabled="disabled">
                                                            <option value="1">管理者</option>
                                                            <option value="2">店員</option>
                                                            <option value="3">視聴者</option>
                                                    </select>
                    </div>
                    <div class="form-group text-center">
                        <button type="submit" class="btn button-background-color button-text-color">
                            編集する
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
-->
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
          name: 'Fund1',
          age: '100',
          sex: '2019-07-12',
          content: 'VAVA 4K Short-Throw Laser Projector gives you a stunning 4K image up to 150" display. Get a HUGE image from only 7.2 inches away!'
        },
        {
          name: 'Fund2',
          age: '2900',
          sex: '2019-04-1',
          content: 'Achieve a deeper sleep and reduce anxiety with Hush’s new light, cool-to-the-touch weighted blanket.'
        },{
          name: 'Fund3',
          age: '6528',
          sex: '2019-08-30',
          content: 'Patent-pending Smart Robot is Pocket-sized and ready for travel. Meet your new best travel buddy!'
        },{
          name: 'Fund4',
          age: '2000',
          sex: '2019-07-20',
          content: 'Lumen is a device and app that measures your metabolism through the breath. With the app, you will receive daily personalized meal plans to help you lose weight and optimize your workouts. You may think you have a fast or slow metabolism, but in fact it changes every day based on the food you eat, the amount you sleep and if you workout.'
        },{
          name: 'Fund5',
          age: '1600',
          sex: '2019-06-30',
          content: 'The Smart Electronic Muscle Stimulator is our 5th generation Snore Circle with patented technology designed to detect snores and emit speciﬁc low-frequency pulses to stimulate and massage the muscles and nerves of the throat, allowing you to sleep quietly and wake up feeling more refreshed, ready to take on a new day.'
        }
      ]
   }
  },
}
</script>

<style lang="scss" src="./css/ProjectList.scss" scoped>

</style>