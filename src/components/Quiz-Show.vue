<script setup>

    import quizes from '../quiz-data/data.json'
    import { useRoute, RouterView, useRouter } from 'vue-router';
    import Question from '../components/Question.vue'
    import QuestionHeader from './Question-Header.vue'
    import ShowResult from './ShowResult.vue'
    import {ref, watch} from 'vue'
    const currentQuestionIndex = ref(0)
    const correctAnswers = ref(0)
    const showResult = ref(false)
    const route = useRoute()
    const quiz = quizes.find(quiz => quiz.id === parseInt(route.params.id))
    let quizBarPercentage = ((currentQuestionIndex.value + 1) * 100) / quiz.questions.length
    watch(currentQuestionIndex, () => {
        quizBarPercentage = ((currentQuestionIndex.value + 1) * 100) / quiz.questions.length
    })

    const onSelectChoice = (is_correct) => {
        if(is_correct) {
            correctAnswers.value++
        }
        if(quiz.questions.length-1 === currentQuestionIndex.value) {
            showResult.value = true
        }
        currentQuestionIndex.value++
    }

</script>

<template>
    <div>
        
        <QuestionHeader />
        <Question v-if="!showResult" @selectChoice="onSelectChoice" :question="quiz.questions[currentQuestionIndex]" :quizBarPercentage="quizBarPercentage" :question-length="quiz.questions.length" />
        <ShowResult v-else :result="correctAnswers" :quizLength="quiz.questions.length" />
        <RouterView />
        
    </div>
</template>

<style scoped>

    
</style>