<script setup>
  import { ref, watch } from 'vue';
  import q from './quiz-data/data.json'
  import Card from './components/Quiz-Card.vue'
  import {RouterLink} from 'vue-router'

  const quizes = ref(q)
  const search = ref("")

  watch(search, () => {
    quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
  })

</script>

<template>
  <div>
    <div class=" text-center">
          <RouterLink to="/" class="me-5">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
    </div>
    <RouterView />
    
</div>
</template>

<style scoped>


 
</style>