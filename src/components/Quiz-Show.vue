<script setup>

    import quizes from '../quiz-data/data.json'
    import { useRoute, RouterView, RouterLink, useRouter } from 'vue-router';

    const route = useRoute()
    const router = useRouter()

    const quiz = quizes.find(quiz => quiz.id === parseInt(route.params.id)) 

</script>

<template>
    <div>
        <div class="row " v-if="quiz">
        
            <div class="col-1"> <button class="btn btn-primary" @click="router.back()">Back</button> </div>
            <div class="col-2">  <h1> {{  quiz.name }} </h1></div>
            <div class="col mt-3">
                <button @click="router.push(`/quiz/${quiz.id}/creator`)" class="btn">Who created this mf?</button>
                <!-- could work but idk -->
                <!-- <RouterLink :to="`/quiz/${quiz.id}/creator`">Who created this?</RouterLink> -->

            </div>
        </div>
        <div class="row text-center text-danger mt-5" v-else>
            <h1>No Quiz Found :3</h1>
        </div>
        <RouterView />
        
    </div>
</template>

<style scoped>

</style>