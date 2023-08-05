<script setup>

    import { defineProps, defineEmits } from 'vue';

    const emit = defineEmits('selectChoice')
    const question = defineProps(['question', 'questionLength', 'quizBarPercentage'])

    const emitSelectChoice = (is_correct) => {
        emit('selectChoice', is_correct)
    }

</script>

<template>
    <div class="container">
            <div class="row">
                <h3>Question ({{ question.question.id }}/{{questionLength}})</h3>
            </div>
            <div class="row completion rounded-pill">
                <div class="completion-status rounded-pill" :style="{width: `${quizBarPercentage}%`}"></div>
            </div>
            <div class="row">
                <h2>{{ question.question.text }}</h2>
            </div>
            <div class="row fs-3 choice" @click="emitSelectChoice(choice.is_correct)" v-for="choice in question.question.choices" :key="choice.id">
                <div class="col-1 rounded-start text-center letter">{{choice.label}}</div>
                <div class="col-11 text rounded-end">{{ choice.text }}</div>
            </div>
            
        </div>
</template>

<style scoped>
    .completion {
        width: 300px;
        background-color: rgb(236, 248, 249);
        border: 2px solid rgb(5, 191, 219);
    }

    .choice {
        margin: 20px;
        cursor: pointer;
    }

    .letter {
        background-color: rgb(100, 204, 197);
    }

    .text {
        background-color: rgb(218, 255, 251);
    }
    .completion-status {
        height: 30px;
        background-color: rgb(5, 191, 219);
    }
</style>