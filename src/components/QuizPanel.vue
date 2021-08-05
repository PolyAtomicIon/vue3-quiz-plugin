<template>
    <div class="wrapper">

        <timer-component
            :iteration="questionIndex"
            :seconds-to-count-down="secondsToCountDown"
            :on-timer-end="checkAnswer"
            v-show="!showAnswers[questionIndex + 1]"
        ></timer-component>

        <!-- demo, for checking state of answers -->
        <div class="wrapper blue-background">
            Question id {{ questionIndex+1 }} is Correct ->
            {{recievedAnswers[questionIndex+1]?.isCorrect}}
            <br/>
            User Input {{recievedAnswers[questionIndex+1]?.userInput}}
            <br/>
            Answer: {{answers[questionIndex]?.answer}}
        </div>

        <div class="interaction-panel">
            <transition-group name="slide-fade" mode="out-in">
                <div
                    :key="questionIndex"
                >
                    <question-component
                        :type="questions[questionIndex]?.task.type"
                        :content="questions[questionIndex]?.task.content"
                    ></question-component>
                    <interactable-panel
                        :question="questions[questionIndex]"  
                        :answer="answers[questionIndex]"
                    ></interactable-panel>
                </div>
            </transition-group>
        </div> 

        <button
            v-if="!showAnswers[questionIndex + 1]"
            @click="checkAnswer"
            class="submit-button"
        >
            Submit
        </button>

        <button
            v-else
            @click="startNextQuestionOrEndQuiz"
            class="submit-button"
        >
            Next
        </button>

    </div>
    
</template>

<script>
    import {computed} from 'vue';

    import InteractablePanel from './InteractablePanel.vue';
    import QuestionComponent from './QuestionComponent.vue';
    import TimerComponent from './TimerComponent.vue';

    export default {
        data() {
            return {
                questionIndex: -1,
                secondsToCountDown: 0,
                recievedAnswers: {},
                showAnswers: {}
            }
        },
        props: {
            onQuizEnd: {
                type: Function
            },
            questions: {
                type: Array,
                default() {
                    return new Array();
                }
            },
            answers: {
                type: Array,
                default() {
                    return new Array();
                }
            }
        },
        provide() {
            return {
                recievedAnswers: computed(() => this.recievedAnswers),
                showAnswers: computed(() => this.showAnswers),
            }
        },
        created(){
            console.log(this.questions.length)
            this.startNextQuestionOrEndQuiz()
        },
        methods: {
            checkAnswer(){
                this.showAnswers[this.questionIndex + 1] = true
            },
            startNextQuestionOrEndQuiz(){

                if( this.questionIndex === this.questions.length )
                    return

                if(this.questionIndex + 1 === this.questions.length) {
                    this.onQuizEnd(this.recievedAnswers);
                    return
                }

                this.questionIndex += 1;
                this.secondsToCountDown = this.questions[this.questionIndex]?.time;
            },
        },
        computed: {
            isQuizActive(){
                return this.questionIndex < this.questions.length;
            }
        },
        components: {
            InteractablePanel,
            QuestionComponent,
            TimerComponent,
        },

    }

</script>

<style scoped>
    @import "../assets/style/QuizStyles.css";
</style>
