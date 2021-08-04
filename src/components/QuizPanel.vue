<template>
    <div class="wrapper">

        <timer-component
            :iteration="questionIndex"
            :secondsToCountDown="secondsToCountDown"
            :onTimerEnd="startNextQuestionOrEndQuiz"
        />

        <!-- demo, for checking state of answers -->
        <div class="wrapper blue-background">
            Question id {{ questionIndex+1 }} is chosen 
            {{recievedAnswers[questionIndex+1]}}
        </div>

        <div class="interaction-panel">
            <transition-group name="slide-fade" mode="out-in">
                <div
                    :key="questionIndex"
                >
                    <question-component
                        :type="questions[questionIndex]?.task.type"
                        :content="questions[questionIndex]?.task.content"
                    />
                    <interactable-panel
                        :question="questions[questionIndex]"  
                    />
                </div>
            </transition-group>
        </div> 

        <button
            @click="startNextQuestionOrEndQuiz"
            class="submit-button"
        >
            Submit
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
            }
        },
        provide() {
            return {
                recievedAnswers: computed(() => this.recievedAnswers),
            }
        },
        created(){
            console.log(this.questions.length)
            this.startNextQuestionOrEndQuiz()
        },
        methods: {
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

    .interaction-panel {
        background: lightyellow;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px
    }

    .question {
        border: solid 2px blue ;
    }

    .blue-background {
        background: lightskyblue;
    }

    .slide-fade-enter-active {
        transition: all 1s ease-out;
    }

    .slide-fade-leave-active {
        transition: all 0   s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
        transform: translateX(50px);
        opacity: 0;
    }

    .submit-button {
        height: 36px;
        width: 128px;
        background: cornsilk;
        border-radius: 5px;
        box-shadow: rgba(255,0,0,0.25) 0px 1px 1px 1px;
    }

</style>
