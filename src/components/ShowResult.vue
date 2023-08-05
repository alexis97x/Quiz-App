<script setup>
    import { defineProps } from 'vue';
    import { RouterLink } from 'vue-router';
    const {result} = defineProps(['result', 'quizLength'])
    console.log(result)
</script>

<template>
    <div class="text-center mt-5">
        
        <h1>Your scores...</h1>
        <h1>{{ result }}/{{quizLength}}</h1>
        <RouterLink to="/">Go back</RouterLink>
    </div>
</template>