<template>
    <div class="wrapper">

        <div class="timer">Time left 60sec</div>
        
        <!-- demo, for checking state of answers -->
        <div class="wrapper blue-background">
            <p
                v-for="(chosenOption, questionId) in recievedAnswers"
                :key="questionId"
            >  
               Question id {{ questionId }} is chosen {{chosenOption}}

            </p>
        </div>

        <div class="interaction-panel">
            <transition-group name="slide-fade" mode="out-in">

                <div
                    :key="questionIndex"
                    class="question"
                >
                    <h1>fsdfs {{questions[questionIndex].task.value}}</h1>
                    <multiple-choice
                        v-if="questions[questionIndex].type === 'multiple-choice'"
                        :questionId="questionIndex"
                        :options="questions[questionIndex].options"
                    />

                    <multiple-answers
                        v-else-if="questions[questionIndex].type === 'multiple-answers'"
                        :questionId="questionIndex"
                        :options="questions[questionIndex].options"
                    />

                    <drag-drop-matching
                        v-else-if="questions[questionIndex].type === 'matching'"
                        :questionId="questionIndex"
                        :options="questions[questionIndex].options"
                        :labelsToMatch="questions[questionIndex].labelsToMatch"
                    />

                    <drag-drop-sentence
                        v-else
                        :questionId="questionIndex"
                        :options="questions[questionIndex].words"
                        :sentence="questions[questionIndex].sentence"
                    />

                </div>

            </transition-group>
        </div>

        <button
            @click="next"
            class="submit-button"
        >
            Submit
        </button>

    </div>
</template>

<script>
    import MultipleAnswers from './InteractablePanels/MultipleAnswers.vue'
    import DragDropMatching from './InteractablePanels/DragDropMatching.vue'
    import DragDropSentence from './InteractablePanels/DragDropSentence.vue'
    import MultipleChoice from './InteractablePanels/MultipleChoice.vue'

    import {computed} from 'vue';

    export default {
        data() {
            return {
                questions: [
                    {
                        'id': 1,
                        'type': 'multiple-choice',
                        'task': {
                            'source': '',
                            'value': 'lorem ipsum',
                            'type': 'text'
                        },
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
                            'source': '',
                            'value': 'lorem ipsum',
                            'type': 'text'
                        },
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
                        'type': 'matching',
                        'task': {
                            'source': '',
                            'value': 'lorem ipsum',
                            'type': 'text'
                        },
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
                        'type': 'sentence',
                        'task': {
                            'source': '',
                            'value': 'lorem ipsum',
                            'type': 'text'
                        },
                        'words': [
                            'big', 'small', 'fiction'
                        ],
                        'sentence': 'There was [empty] and [empty] elephant. But it is of course [empty] story'
                    },
                ],
                questionIndex: 0,
                recievedAnswers: {},
            }
        },
        provide() {
            return {
                recievedAnswers: computed(() => this.recievedAnswers)
            }
        },
        methods: {
            next(){
                this.questionIndex += 1;
            }
        },
        components: {
            MultipleChoice,
            MultipleAnswers,
            DragDropMatching,
            DragDropSentence
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
