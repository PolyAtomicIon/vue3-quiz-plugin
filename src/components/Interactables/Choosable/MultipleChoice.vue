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
        created() {
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
