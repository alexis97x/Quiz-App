<script setup>
  import { ref, watch } from 'vue';
  import q from './quiz-data/data.json'

  const quizes = ref(q)
  const search = ref("")

  watch(search, () => {
    quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
  })

</script>

<template>
   <v-app>
    <!-- SIDEBAR -->
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>