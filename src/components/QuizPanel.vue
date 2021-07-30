<template>
    <div class="wrapper">

        <div class="timer"></div>
        <div class="question-panel">
            <h1>Question number 1</h1>
            <div class="question">
                Lorem, ipsum dolor.
            </div>
        </div>
        
        <div class="wrapper blue-background">
            <p
                v-for="(chosenOption, questionId) in recievedAnswers"
                :key="questionId"
            >  
               Question id {{ questionId }} is chosen {{chosenOption}}
               
            </p>
        </div>

        <div class="interaction-panel">
            <div
                v-for="question in questions"
                :key="question.id"
                class="question"
            >
                <h1>fsdfs {{question.task.value}}</h1>
                <multiple-choice
                    v-if="question.type === 'multiple-choice'"
                    :questionId="question.id"
                    :options="question.options"
                />

                <multiple-answers
                    v-else-if="question.type === 'multiple-answers'"
                    :questionId="question.id"
                    :options="question.options"
                />

                <drag-drop-matching
                    v-else
                    :questionId="question.id"
                    :options="question.options"
                    :labelsToMatch="question.labelsToMatch"
                />
            </div>
        </div>

    </div>
</template>

<script>
    import MultipleAnswers from './InteractablePanels/MultipleAnswers.vue'
    import DragDropMatching from './InteractablePanels/DragDropMatching.vue'
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
                        'type': 'drag-drop-matching',
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
                ],
                recievedAnswers: {},
            }
        },
        provide() {
            return {
                recievedAnswers: computed(() => this.recievedAnswers)
            }
        },
        components: {
            MultipleChoice,
            MultipleAnswers,
            DragDropMatching
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

</style>
