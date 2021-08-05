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
        setup() {
        },
        methods: {
            checkAnswers(){
                console.log(this.recievedAnswer.userInput)
                console.log(this.answer.answer)
                this.recievedAnswer.isCorrect = Utils.arraysEqual(this.answer.answer, this.recievedAnswer.userInput)
            },
            onOptionLabelChosen(variant){
                if( !this.isOptionChosen(variant) )  
                    this.recievedAnswer.userInput.push(variant);
                else
                    this.recievedAnswer.userInput = this.removeFromArrayByValueReturnArray(this.recievedAnswer.userInput, variant)
            },
            removeFromArrayByValueReturnArray(items, value){
                return items.filter(item => item !== value)
            }
        },
        computed: {
        }
    }

</script>

<style scoped>

</style>
