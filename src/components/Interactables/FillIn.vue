<template>
    
    <div class="interactable">
        <input 
            type="text" 
            v-model="recievedAnswer.userInput" 
        />
    </div>

</template>

<script>
    import InteractableBase from './InteractableBase.vue';
    import * as Utils from '../../Utils.js'

    export default {
        extends: InteractableBase,
        data(){
            return {
            }
        },
        created() {
            this.recievedAnswer.userInput = '';
        },
        setup() {
        },
        methods: {
            checkAnswers(){
                this.recievedAnswer.setUserInputAsArray(this.recievedAnswer.userInput)
                this.recievedAnswer.isCorrect = Utils.arraysEqual(this.answer.answer, this.recievedAnswer.userInput) 
            },
        },
        computed: {
        }
    }

</script>

<style scoped>
</style>
