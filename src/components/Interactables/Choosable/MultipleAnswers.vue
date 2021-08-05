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
                console.log(this.userInput)
                console.log(this.answer)
            },
            onOptionLabelChosen(variant){
                if( !this.isOptionChosen(variant) )  
                    this.userInput.push(variant);
                else
                    this.userInput = this.removeFromArrayByValueReturnArray(this.userInput, variant)
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
