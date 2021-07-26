<template>
    <div class="wrapper">

        <div class="timer"></div>
        <div class="question-panel">
            <h1>Question number 1</h1>
            <div class="question">
                Lorem, ipsum dolor.
            </div>
        </div>
        <div class="interaction-panel">
            <multiple-choice
                :options="options"
            />
        </div>

    </div>
</template>

<script>

    import MultipleChoice from './MultipleChoice.vue'

    export default {
        data() {
            return {
                options: [
                    {
                        'option': 'AudioLabel',
                        'source': 'http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3'
                    },
                    {
                        'option': 'AudioLabel',
                        'source': 'http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3'
                    }
                ]
            }
        },
        components: {
            MultipleChoice
        },

    }

</script>

<style scoped>


</style>
