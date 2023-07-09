<script setup>

    import quizes from '../quiz-data/data.json'
    import { useRoute } from 'vue-router';

    const route = useRoute()
    const quiz = quizes.find(quiz => quiz.id === parseInt(route.params.id))

</script>

<template>
    <div class="container">
            <div class="row mt-5" v-if="quiz">
                <!-- <div class="col-1"> <button class="btn btn-primary" @click="router.back()">Back</button> </div> -->
                <div class="col-10 text-start">  <h1> {{  quiz.name }} </h1></div>
                <!-- <button @click="router.push(`/quiz/${quiz.id}/creator`)" class="btn">Who created this mf?</button> -->
                <!-- could work but idk -->
                <!-- <RouterLink :to="`/quiz/${quiz.id}/creator`">Who created this?</RouterLink> -->
            </div>
            <div class="row text-center text-danger mt-5" v-else>
                <h1>No Quiz Found :3</h1>
            </div>
        </div>
</template>

<style scoped>

    h1 {
        font-size: 50px;
        font-weight: bold;
    }
</style>