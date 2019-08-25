<template>

  <div class="page">
    <div class="intro ">
      <img class="intro__img" src="img/intro-img.png" alt="">

      <div class="intro__text">
        Мы YoungBussines Comminity
        Наша цель — создать сильное предпринимательское сообщество. В первую очередь из молодых и амбициозных людей,
        которые смогут развиваться сами по себе, выстраивая отношения между собой, делясь опытом и идеями.
      </div>
      <div class="intro__buttons-container">
        <a href="https://docs.google.com/forms/d/1lwf5rfdHPYM055QYWjPiLQk-79D6tQ3yw6JOZdCzTro/edit" class="button button--green-light">присоединиться</a>
        <router-link to="/login" class="button button--green-light">авторизоваться</router-link>
      </div>
    </div>


  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
