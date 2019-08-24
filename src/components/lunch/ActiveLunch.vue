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

export default {
  data () {
    return {
    }
  },
  created () {
  },
  mounted: () => {
    console.log('mounted')
  },
  methods: {
  }
}

</script>

<style>

.profile p{
  font-size: 25px;
}
</style>