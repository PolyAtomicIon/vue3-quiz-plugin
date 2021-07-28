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
        
        <div class="wrapper">
            <!-- {{ chosenOption }} -->
        </div>
    </div>

</template>

<script>

    import ChoosableOptionLabel from '../ChoosableOptionLabel.vue'

    export default {

        data(){
            return {
            }
        },
        inject: ['recievedAnswers'],
        props: {
            options: Array,
            questionId: Number,
        },      
        created() {
        },
        components: {
            ChoosableOptionLabel
        },
        setup() {
        },
        methods: {
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
        background: lightgreen;
    }

    .active {
        border: 3px red solid;
    }

</style>
