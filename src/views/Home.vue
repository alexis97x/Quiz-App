<script setup>
  import { ref, watch } from 'vue';
  import q from '../quiz-data/data.json'
  import Card from '../components/Quiz-Card.vue'
  import Sidebar from '../components/SideBar.vue'
  const quizes = ref(q)
  const search = ref("")

  watch(search, () => {
    quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
  })

</script>

<template>
    <div>
      <header>
      <div class="row mt-2 justify-content-around ">
        <div class="col-2">
          <h1>Quizes</h1>
        </div>
        <div class="col-4 mt-2">
          <input type="text" v-model="search" placeholder="Search..." class="form-control">
        </div>
      </div>
    </header>
    <div class="quiz-container container mt-3">
      <div class="row">
        <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
      </div>
    </div>
    </div>

</template>
