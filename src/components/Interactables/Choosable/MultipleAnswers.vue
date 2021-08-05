<template>
    
    <div class="interactable">
        <choosable-option-label
            v-for="item in options"
            :key="item.variant"
            @click="onOptionLabelChosen(item.variant)"
            :type="item.type"
            :source="item.source"

            :class="{ active: isOptionChosen(item.variant), }"
        >
        </choosable-option-label>
    </div>

</template>

<script>

    import ChoosableBase from './MultipleBase.vue'

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
                console.log("CheckAnswers 23")
            },
            onOptionLabelChosen(variant){
                if( !this.isOptionChosen(variant) )  
                    this.recievedAnswers.value[this.questionId].push(variant);
                else
                    this.recievedAnswers.value[this.questionId] = this.removeFromArrayByValueReturnArray(this.recievedAnswers.value[this.questionId], variant)
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

    .interactable {
        background: lightgreen;
    }

    .active {
        border: 3px cyan solid;
    }

</style>
