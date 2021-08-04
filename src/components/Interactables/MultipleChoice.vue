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
                this.recievedAnswers.value[this.questionId] = [variant];
            },
            isOptionChosen(variant){
                if( !(this.questionId in this.recievedAnswers.value) )
                    return false
                return this.recievedAnswers.value[this.questionId].includes(variant);
            }
        },
        computed: {
        }
    }

</script>

<style scoped>

    .interactable {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        background: lightgreen;
    }

    .active {
        border: 3px cyan solid;
    }

    .wrong-choice {
        border: 3px red solid;
    }
 
    .right-choice {
        border: 3px green solid;
    }

</style>
