<template>
  <div>
    <h1> Demo quizzes :) </h1>
    <p>
      Developed by 29Digit Interactive Studio.
    </p>
    <h3>Here is the examples</h3>
   
    <quiz-panel 
      :questions="questions" 
      :answers="answers"
    /> 
      
  </div>
</template>

<script>

import QuizPanel from '../components/QuizPanel.vue';

export default {
  data() {
    return { 
      questions: {},
      answers: {}
    }
  },
  components: {
    QuizPanel,
  }
}

</script>

<style scoped>
</style>
