<script setup>

    import { defineProps } from 'vue';
    import { RouterLink } from 'vue-router';

    const {quiz} = defineProps(['quiz'])

</script>

<template>
      
        <div class="col-3 quiz-card mt-4">
          <RouterLink :to="`quiz/${quiz.id}`" class="router-link">
          <img :src="quiz.img" class="card-img-top rounded-top" alt="...">
          <div class="card-body text-start rounded-bottom shadow">
            <div class="col ms-2">
              <h5 class="card-title">{{ quiz.name }}</h5>
              <p class="card-text">{{ quiz.questions.length }} questions</p>
            </div>
          </div>
          </RouterLink>
        </div>
      
</template>

<style scoped>
.quiz-card {
  cursor: pointer;
}

.router-link{
  color: black;
  text-decoration: none;
}

.quiz-card img {
  height: 80%;
}
</style>