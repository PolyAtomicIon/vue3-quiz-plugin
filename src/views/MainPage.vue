<template>
  <div>

    <quiz-preview
      v-if="!isQuizStarted"
      :onQuizStart="startQuiz"
    ></quiz-preview>

    <quiz-panel 

      v-else-if="isQuizStarted && !isQuizEnded"

      :questions="questions" 
      :answers="answers"
      :onQuizEnd="endQuiz"
    /> 

    <quiz-result
      v-else
      :recievedAnswers="recievedAnswers"
    ></quiz-result>

  </div>
</template>

<script>

import QuizPreview from '../components/QuizPreview.vue';
import QuizResult from '../components/QuizResult.vue';
import QuizPanel from '../components/QuizPanel.vue';

export default {
  data() {
    return { 
      questions: [
        //   {
        //       'id': 1,
        //       'type': 'multiple-choice',
        //       'task': {
        //           'content': 'lorem ipsum',
        //           'type': 'text'
        //       },
        //       'time': 5,
        //       'options': [
        //           {   
        //               'variant': 1,
        //               'type': 'audio',
        //               'source': 'http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3'
        //           },
        //           {
        //               'variant': 2,
        //               'type': 'audio',
        //               'source': 'http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3'
        //           },
        //           {
        //               'variant': 3,
        //               'type': 'image',
        //               'source': 'https://img.icons8.com/color/452/kahoot.png'
        //           }
        //       ]
        //   },
        //   {
        //       'id': 2,
        //       'type': 'multiple-answers',
        //       'task': {
        //           'content': 'lorem ipsum',
        //           'type': 'text'
        //       },
        //       'time': 10,
        //       'options': [
        //           {   
        //               'variant': 1,
        //               'type': 'audio',
        //               'source': 'http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3'
        //           },
        //           {
        //               'variant': 2,
        //               'type': 'audio',
        //               'source': 'http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3'
        //           },
        //           {
        //               'variant': 3,
        //               'type': 'image',
        //               'source': 'https://img.icons8.com/color/452/kahoot.png'
        //           }
        //       ]
        //   },
        //   {
        //       'id': 3,
        //       'type': 'drag-drop-matching',
        //       'task': {
        //           'content': 'lorem ipsum',
        //           'type': 'text'
        //       },
        //       'time': 5,
        //       'options': [
        //           {   
        //               'variant': 1,
        //               'type': 'text',
        //               'value': 'Elephant'
        //           },
        //           {
        //               'variant': 2,
        //               'type': 'text',
        //               'value': 'Pig'
        //           },
        //           {
        //               'variant': 3,
        //               'type': 'text',
        //               'value': 'Dragon'
        //           }
        //       ],
        //       'labelsToMatch': [
        //           'big', 'small', 'fiction'
        //       ]
        //   },
        //   {
        //       'id': 4,
        //       'type': 'drag-drop-sentence',
        //       'task': {
        //           'content': 'lorem ipsum',
        //           'type': 'text'
        //       },
        //       'time': 12,
        //       'options': [
        //           'big', 'small', 'fiction'
        //       ],
        //       'sentence': 'There was [empty] and [empty] elephant. But it is of course [empty] story'
        //   },
        //   {
        //       'id': 5,
        //       'type': 'multiple-choice',
        //       'task': {
        //           'content': 'lorem ipsum',
        //           'type': 'text'
        //       },
        //       'time': 5,
        //       'options': [
        //           {   
        //               'variant': 1,
        //               'type': 'text',
        //               'source': 'Laimon'
        //           },
        //           {
        //               'variant': 2,
        //               'type': 'audio',
        //               'source': 'http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3'
        //           },
        //           {
        //               'variant': 3,
        //               'type': 'text',
        //               'source': 'Banana'
        //           },
        //           {
        //               'variant': 4,
        //               'type': 'text',
        //               'source': 'Dsa'
        //           },
        //       ]
        //   },
          {
              'id': 1,
              'type': 'fill-in',
              'task': {
                  'content': 'lorem ipsum',
                  'type': 'text'
              },
              'time': 45,
          },
      ],
      answers: {},
      recievedAnswers: null,
      isQuizStarted: false,
      isQuizEnded: false,
    }
  },
  methods: {
    startQuiz() {
      this.isQuizStarted = true;
    },
    endQuiz(recievedAnswers){
      console.log(recievedAnswers)
      this.recievedAnswers = recievedAnswers
      this.isQuizEnded = true
      console.log("quiz ended")
    }
  },
  components: {
    QuizPanel,
    QuizPreview,
    QuizResult
  },
}

</script>

<style scoped>
</style>
