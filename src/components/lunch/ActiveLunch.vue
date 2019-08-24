<template>
  <div id="activeLunch">
    <div class="container">
      <div class="profile">
        <img :src="profileData.photo" width="75" height="75" style="border-radius:300px; border: solid 1px black">
        <p> {{profileData.first_name}} </p>
        <p> {{profileData.last_name}} </p>
        <p> {{profileData.about}} </p>
        <p> {{profileData.city}} </p>
      </div>
      <div class="eventButtons">
        <button v-on:click="sendRes(true)">Встретились</button>
        <button v-on:click="sendRes(false)">Не Встретились</button>
      </div>
    </div> 
  </div>
</template>

<script>
import api from '../cfg.js'
import store from '../../store'
export default {
  data () {
    return {
        profileData: {
            'photo': 'https://i.ya-webdesign.com/images/steve-transparent-minecraft-eye-16.png',
            'first_name':'Фамилия',
            'last_name': 'Имя',
            'about': 'О мне и т.д.',
            'city': 'Новосибирск'
            },

        data: {
            'userId':'0',
            'status':status
        }
    }
  },
  created () {
  //  this.fetchProfile()
  },
  watch: {

  },

  methods: {
    sendRes (status) {
        fetch('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(status),
        })
        .then(function(response) {response.json()})
        .catch(alert('Ошибка отправки'))
        
    },

    fetchProfile () {
        fetch(api.url + '1')
        .then(function(response) {
            response.json()
        })
        .then(function(data) {
            this.profileData = data 
            store.dispatch('SearchState', 'kek')
        })
        .catch( )
    }
  }
}

</script>

<style>

.profile p{
  font-size: 25px;
}
</style>