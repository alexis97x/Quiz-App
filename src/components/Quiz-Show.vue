<script setup>

    import quizes from '../quiz-data/data.json'
    import { useRoute, RouterView, useRouter } from 'vue-router';
    import Question from '../components/Question.vue'
    import QuestionHeader from './Question-Header.vue'
    import {ref, watch} from 'vue'
    const currentQuestionIndex = ref(0)
    const route = useRoute()
    const quiz = quizes.find(quiz => quiz.id === parseInt(route.params.id))
    let quizBarPercentage = ((currentQuestionIndex.value + 1) * 100) / quiz.questions.length
    watch(currentQuestionIndex, () => {
        quizBarPercentage = ((currentQuestionIndex.value + 1) * 100) / quiz.questions.length
    })
</script>

<template>
    <div>
        <QuestionHeader />
        <Question :question="quiz.questions[currentQuestionIndex]" :quizBarPercentage="quizBarPercentage" :question-length="quiz.questions.length" />
        <button class="btn btn-primary" @click="currentQuestionIndex++">Next</button>
        <RouterView />
        
    </div>
</template>

<style scoped>

    
</style>