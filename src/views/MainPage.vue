<template>
  <div>

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
      answers: {},
    }
  },
  components: {
    QuizPanel,
  }
}

</script>

<style scoped>
</style>
