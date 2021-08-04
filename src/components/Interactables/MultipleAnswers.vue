<template>
    
    <div class="interactable">
        <choosable-option-label
            v-for="item in options"
            :key="item.variant"
            @click="onOptionLabelChosen(item.variant)"
            :type="item.type"
            :source="item.source"

            :class="{ active: isOptionChosen(item.variant), }"
        />
    </div>

</template>

<script>

    import ChoosableOptionLabel from '../ChoosableOptionLabel.vue'
    import InteractableBase from './InteractableBase.vue'

    export default {
        extends: InteractableBase,
        data(){
            return {
            }
        },
        props: {
            options: Array,
        },      
        created() {
            // init array to not have troubles.
            this.recievedAnswers.value[this.questionId] = [];
        },
        components: {
            ChoosableOptionLabel
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
            isOptionChosen(variant){
                if( !(this.questionId in this.recievedAnswers.value) )
                    return false
                return this.recievedAnswers.value[this.questionId].includes(variant);
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
