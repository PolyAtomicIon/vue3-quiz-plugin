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
                console.log(this.answer)
            },
            onOptionLabelChosen(variant){
                this.userInput = [variant];
            },
        },
        computed: {
        }
    }

</script>

<style scoped>

</style>
