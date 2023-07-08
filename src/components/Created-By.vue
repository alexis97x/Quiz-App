<script setup>

    import quizes from '../quiz-data/data.json'
    import { useRoute, useRouter } from 'vue-router';

    const route = useRoute()
    const router = useRouter()

    const quiz = quizes.find(quiz => quiz.id === parseInt(route.params.id))
</script>
<template>
    <div>
        <h2>{{quiz.created_by}}</h2>
        <button @click="router.back" class="btn border">Nvm</button>
    </div>
</template>