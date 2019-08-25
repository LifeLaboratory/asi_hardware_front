<template>
<div>
  <div class="lunch-step__profileBg">
    <div class="lunch-step__profile">
      <img :src="lunch.connectionPerson.photo">
      <div class="lunch-step__userInfo">
        <div class="lunch-step__contact">
          <p>{{lunch.connectionPerson.firstName}} {{lunch.connectionPerson.lastName}}</p>
       
          <p>{{lunch.connectionPerson.city}}</p>
          <p>Тел.: {{lunch.connectionPerson.contacts.phone}}</p>
          <p>mail: {{lunch.connectionPerson.contacts.email}}</p> 
          <p>vk: {{lunch.connectionPerson.contacts.vk}}</p> 
        </div>
      </div>
    </div>
    <div class="lunch-step__about"> 
      <p>{{lunch.connectionPerson.description}}</p>
    </div> 
  </div>
  <div class="lunch-step__buttons"> 
    <button class="button--green"> встреча состоялась </button>
    <button class="button--red"> отклонить </button>
  </div>
</div>
</template>

<script>

export default {
  data () {
  },
  props: {
    lunch: Object
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