<template>
    
    <div class="interactable">
        <choosable-option-label
            v-for="item in options"
            :key="item.variant"
            @click="onOptionLabelChosen(item.variant)"
            :type="item.type"
            :source="item.source"
            :disabled="isSubmitted"
            :class="labelStatusToClass(item.variant)"
        >
        </choosable-option-label>
    </div>

</template>

<script>

    import ChoosableBase from './MultipleBase.vue'
    import * as Utils from '../../../Utils.js'

    export default {

        extends: ChoosableBase,
        data(){
            return {
            }
        },    
        created() {
        },
        setup() {
        },
        methods: {
            checkAnswers(){
                this.recievedAnswer.isCorrect =  Utils.arraysEqual(this.answer.answer, this.recievedAnswer.userInput) 
            },
            onOptionLabelChosen(variant){
                this.recievedAnswer.userInput = [variant];
            },
        },
        computed: {
        }
    }

</script>

<style scoped>

</style>
