<template>
    <div class="wrapper">

        <timer-component
            :iteration="questionIndex"
            :secondsToCountDown="secondsToCountDown"
            :onTimerEnd="startNextQuestion"
        />

        <!-- demo, for checking state of answers -->
        <div class="blue-background">
            Question id {{ questionIndex+1 }} is chosen 
            {{recievedAnswers[questionIndex+1]}}
        </div>

        <div class="interaction-panel">
            <transition-group name="slide-fade" mode="out-in">
                <div
                    :key="questionIndex"
                >
                    <question-component
                        :type="questions[questionIndex].task.type"
                        :content="questions[questionIndex].task.content"
                    />
                    <interactable-panel
                        :question="questions[questionIndex]"  
                    />
                </div>
            </transition-group>
        </div> 

        <button
            @click="startNextQuestion"
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
                questions: [
                    {
                        'id': 1,
                        'type': 'multiple-choice',
                        'task': {
                            'content': 'lorem ipsum',
                            'type': 'text'
                        },
                        'time': 5,
                        'options': [
                            {   
                                'variant': 1,
                                'type': 'audio',
                                'source': 'http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3'
                            },
                            {
                                'variant': 2,
                                'type': 'audio',
                                'source': 'http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3'
                            },
                            {
                                'variant': 3,
                                'type': 'image',
                                'source': 'https://img.icons8.com/color/452/kahoot.png'
                            }
                        ]
                    },
                    {
                        'id': 2,
                        'type': 'multiple-answers',
                        'task': {
                            'content': 'lorem ipsum',
                            'type': 'text'
                        },
                        'time': 10,
                        'options': [
                            {   
                                'variant': 1,
                                'type': 'audio',
                                'source': 'http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3'
                            },
                            {
                                'variant': 2,
                                'type': 'audio',
                                'source': 'http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3'
                            },
                            {
                                'variant': 3,
                                'type': 'image',
                                'source': 'https://img.icons8.com/color/452/kahoot.png'
                            }
                        ]
                    },
                    {
                        'id': 3,
                        'type': 'drag-drop-matching',
                        'task': {
                            'content': 'lorem ipsum',
                            'type': 'text'
                        },
                        'time': 5,
                        'options': [
                            {   
                                'variant': 1,
                                'type': 'text',
                                'value': 'Elephant'
                            },
                            {
                                'variant': 2,
                                'type': 'text',
                                'value': 'Pig'
                            },
                            {
                                'variant': 3,
                                'type': 'text',
                                'value': 'Dragon'
                            }
                        ],
                        'labelsToMatch': [
                            'big', 'small', 'fiction'
                        ]
                    },
                    {
                        'id': 4,
                        'type': 'drag-drop-sentence',
                        'task': {
                            'content': 'lorem ipsum',
                            'type': 'text'
                        },
                        'time': 12,
                        'options': [
                            'big', 'small', 'fiction'
                        ],
                        'sentence': 'There was [empty] and [empty] elephant. But it is of course [empty] story'
                    },
                    {
                        'id': 5,
                        'type': 'multiple-choice',
                        'task': {
                            'content': 'lorem ipsum',
                            'type': 'text'
                        },
                        'time': 5,
                        'options': [
                            {   
                                'variant': 1,
                                'type': 'text',
                                'source': 'Laimon'
                            },
                            {
                                'variant': 2,
                                'type': 'audio',
                                'source': 'http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3'
                            },
                            {
                                'variant': 3,
                                'type': 'text',
                                'source': 'Banana'
                            },
                            {
                                'variant': 4,
                                'type': 'text',
                                'source': 'Dsa'
                            },
                        ]
                    },
                    {
                        'id': 6,
                        'type': 'fill-in',
                        'task': {
                            'content': 'lorem ipsum',
                            'type': 'text'
                        },
                        'time': 45,
                    },
                ],
                questionIndex: -1,
                secondsToCountDown: 0,
                recievedAnswers: {},
                isTimerReset: false
            }
        },
        provide() {
            return {
                recievedAnswers: computed(() => this.recievedAnswers)
            }
        },
        methods: {
            startNextQuestion(){
                if(this.questionIndex == this.questions.length) return

                this.questionIndex += 1;
                this.secondsToCountDown = this.questions[this.questionIndex].time;
            },
        },
        computed: {
            isQuizActive(){
                return this.questionIndex < this.questions.length;
            }
        },
        created(){
           this.startNextQuestion()
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
