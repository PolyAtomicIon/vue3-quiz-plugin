<template>
    
    <div class="interactable">
        <input 
            type="text" 
            v-model="recievedAnswers.value[questionId]" 
        />
    </div>

</template>

<script>
    import InteractableBase from './InteractableBase.vue';

    export default {

        data(){
            return {
            }
        },
        extends: InteractableBase,
        inject: ['recievedAnswers'],
        created() {
            this.recievedAnswers.value[this.questionId] = '';
        },
        setup() {
        },
        methods: {
            checkAnswers(){
                console.log("CheckAnswers 23")
            },
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
